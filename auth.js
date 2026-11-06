// auth.js - Интегрирана оторизация със Supabase Magic Link за AutoLog

const SUPABASE_URL = 'https://tferaxmcahxalhmihubg.supabase.co';
const SUPABASE_KEY = 'sb_publishable_Rd-WYS-Rwy-_b6l_ob73uw_DRuJjN-n';

let supabaseClient = null;

// Безопасна инициализация на Supabase SDK
if (window.supabase && typeof window.supabase.createClient === 'function') {
    supabaseClient = window.supabase.createClient(SUPABASE_URL, SUPABASE_KEY);
} else {
    console.error("Supabase SDK все още не е зареден!");
}

document.addEventListener("DOMContentLoaded", async () => {
    const authContainer = document.getElementById('auth-container');
    const userProfileBadge = document.getElementById('user-profile-badge');
    const loggedUserEmail = document.getElementById('logged-user-email');
    const sendBtn = document.getElementById('btn-send-email');
    const authMessage = document.getElementById('auth-message');

    // Динамично закачане на слушателя за клик към бутона за вход (без inline скриптове)
    if (sendBtn) {
        sendBtn.addEventListener('click', loginWithEmail);
    }

    if (!supabaseClient) {
        if (authMessage) authMessage.innerText = "Грешка: Supabase клиентът не е инициализиран.";
        return;
    }

    try {
        // 1. Проверяваме за активна сесия в Supabase
        const { data: { session }, error } = await supabaseClient.auth.getSession();

        if (session && session.user) {
            // Потребителят е влязъл: скриваме входа и показваме имейла му горе в хедъра
            if (authContainer) authContainer.style.display = 'none';
            if (loggedUserEmail) loggedUserEmail.innerText = session.user.email;
            if (userProfileBadge) userProfileBadge.style.display = 'flex';
        } else {
            // Няма активна сесия: показваме екрана за вход
            if (authContainer) authContainer.style.display = 'flex';
            if (userProfileBadge) userProfileBadge.style.display = 'none';
        }

        // 2. Слушаме за реални промени в състоянието на сесията (например при клик на линка от пощата)
        supabaseClient.auth.onAuthStateChange((event, session) => {
            if (event === 'SIGNED_IN' && session) {
                if (authContainer) authContainer.style.display = 'none';
                if (loggedUserEmail) loggedUserEmail.innerText = session.user.email;
                if (userProfileBadge) userProfileBadge.style.display = 'flex';
                window.location.reload();
            } else if (event === 'SIGNED_OUT') {
                if (authContainer) authContainer.style.display = 'flex';
                if (userProfileBadge) userProfileBadge.style.display = 'none';
                window.location.reload();
            }
        });

    } catch (err) {
        console.error("Грешка при проверка на сесията:", err);
    }
});

// Функция за изпращане на Magic Link по имейл
async function loginWithEmail() {
    if (!supabaseClient) {
        alert('Грешка: Supabase клиентът не е готов.');
        return;
    }

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
    if (authMessage) authMessage.innerText = 'Изпращане на еднократен линк...';

    try {
        const { error } = await supabaseClient.auth.signInWithOtp({
            email: email,
            options: {
                emailRedirectTo: window.location.href
            }
        });

        if (error) {
            if (authMessage) authMessage.innerText = 'Грешка: ' + error.message;
        } else {
            if (authMessage) {
                authMessage.innerHTML = `<span class="text-emerald-400">✅ Изпратен е Magic Link на <strong>${email}</strong>! Проверете пощата си.</span>`;
            }
        }
    } catch (err) {
        if (authMessage) authMessage.innerText = 'Възникна неочаквана грешка при изпращането.';
    } finally {
        if (sendBtn) {
            sendBtn.disabled = false;
            sendBtn.innerHTML = '<span>Изпрати Magic Link</span> <i class="fa-solid fa-arrow-right" style="font-size: 13px;"></i>';
        }
    }
}

// Глобална функция за изход от профила (извиква се от бутона с кошчето/изхода в хедъра)
async function logoutUser() {
    if (supabaseClient) {
        await supabaseClient.auth.signOut();
    }
    localStorage.removeItem('autolog_user_id');
    window.location.reload();
}
