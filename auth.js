// auth.js - Перфектно синхронизирана сесия за AutoLog

const SUPABASE_URL = 'https://tferaxmcahxalhmihubg.supabase.co';
const SUPABASE_KEY = 'sb_publishable_Rd-WYS-Rwy-_b6l_ob73uw_DRuJjN-n';

let supabaseClient = null;

if (window.supabase && typeof window.supabase.createClient === 'function') {
    supabaseClient = window.supabase.createClient(SUPABASE_URL, SUPABASE_KEY);
} else {
    console.error("Supabase SDK не е зареден!");
}

document.addEventListener("DOMContentLoaded", async () => {
    const authContainer = document.getElementById('auth-container');
    const userProfileBadge = document.getElementById('user-profile-badge');
    const loggedUserEmail = document.getElementById('logged-user-email');
    const sendBtn = document.getElementById('btn-send-email');
    const authMessage = document.getElementById('auth-message');

    if (sendBtn) {
        sendBtn.addEventListener('click', loginWithEmail);
    }

    if (!supabaseClient) {
        if (authMessage) authMessage.innerText = "Грешка: Supabase клиентът не е инициализиран.";
        return;
    }

    try {
        // Проверяваме дали вече има запазена сесия
        let { data: { session } } = await supabaseClient.auth.getSession();

        // Ако няма активна сесия, но в URL-а има токен от Magic Link (връщане от пощата)
        if (!session && window.location.hash && window.location.hash.includes('access_token')) {
            // Даваме му малко време да се обработи автоматично от Supabase клиента
            await new Promise(resolve => setTimeout(resolve, 800));
            const res = await supabaseClient.auth.getSession();
            session = res.data.session;
            
            // Изчистваме дългия токен от адресната лента за чистота
            if (session && window.history && window.history.replaceState) {
                window.history.replaceState(null, '', window.location.pathname);
            }
        }

        if (session && session.user) {
            // Влязъл е успешно – скриваме входа и показваме имейла
            if (authContainer) authContainer.style.display = 'none';
            if (loggedUserEmail) loggedUserEmail.innerText = session.user.email;
            if (userProfileBadge) userProfileBadge.style.display = 'flex';
        } else {
            // Няма сесия – показваме екрана за вход
            showLoginScreen();
        }

        // Слушаме за промени
        supabaseClient.auth.onAuthStateChange((event, session) => {
            if (event === 'SIGNED_IN' && session) {
                if (authContainer) authContainer.style.display = 'none';
                if (loggedUserEmail) loggedUserEmail.innerText = session.user.email;
                if (userProfileBadge) userProfileBadge.style.display = 'flex';
            }
        });

    } catch (err) {
        console.error("Грешка при сесията:", err);
        showLoginScreen();
    }
});

function showLoginScreen() {
    const authContainer = document.getElementById('auth-container');
    const userProfileBadge = document.getElementById('user-profile-badge');
    if (authContainer) authContainer.style.display = 'flex';
    if (userProfileBadge) userProfileBadge.style.display = 'none';
}

// Функция за изпращане на Magic Link
async function loginWithEmail() {
    if (!supabaseClient) return;

    const emailInput = document.getElementById('user-email');
    const authMessage = document.getElementById('auth-message');
    const sendBtn = document.getElementById('btn-send-email');

    if (!emailInput) return;
    const email = emailInput.value.trim();

    if (!email || !email.includes('@')) {
        if (authMessage) authMessage.innerText = 'Моля, въведете валиден имейл адрес!';
        return;
    }

    if (sendBtn) {
        sendBtn.disabled = true;
        sendBtn.innerHTML = '<span>Изпращане...</span> <i class="fa-solid fa-spinner fa-spin"></i>';
    }
    if (authMessage) authMessage.innerText = 'Изпращане на линк...';

    try {
        const { error } = await supabaseClient.auth.signInWithOtp({
            email: email,
            options: {
                emailRedirectTo: window.location.href.split('#')[0]
            }
        });

        if (error) {
            if (authMessage) authMessage.innerText = 'Грешка: ' + error.message;
        } else {
            if (authMessage) {
                authMessage.innerHTML = `<span class="text-emerald-400">✅ Изпратен е Magic Link на <strong>${email}</strong>! Отворете пощата си.</span>`;
            }
        }
    } catch (err) {
        if (authMessage) authMessage.innerText = 'Възникна грешка.';
    } finally {
        if (sendBtn) {
            sendBtn.disabled = false;
            sendBtn.innerHTML = '<span>Изпрати Magic Link</span> <i class="fa-solid fa-arrow-right" style="font-size: 13px;"></i>';
        }
    }
}

// Изход от профила
async function logoutUser() {
    if (supabaseClient) {
        await supabaseClient.auth.signOut();
    }
    window.location.reload();
}
