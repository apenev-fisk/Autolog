// auth.js - Защитена инициализация и вход с Имейл (Magic Link) за AutoLog
const SUPABASE_URL = 'https://tferaxmcahxalhmihubg.supabase.co';
const SUPABASE_KEY = 'sb_publishable_Rd-WYS-Rwy-_b6l_ob73uw_DRuJjN-n';

let supabaseClient = null;

// Безопасна инициализация
if (window.supabase && typeof window.supabase.createClient === 'function') {
    supabaseClient = window.supabase.createClient(SUPABASE_URL, SUPABASE_KEY);
} else {
    console.error("Supabase SDK все още не е зареден!");
}

// Проверка за сесия при зареждане на страницата
document.addEventListener("DOMContentLoaded", async () => {
    const authContainer = document.getElementById('auth-container');
    const appWrapper = document.getElementById('app-wrapper');
    // Закачаме клика към бутона безопасно, без инлайн скриптове
document.addEventListener("DOMContentLoaded", () => {
    const sendBtn = document.getElementById('btn-send-email');
    if (sendBtn) {
        sendBtn.addEventListener('click', loginWithEmail);
    }
});

    if (!supabaseClient) {
        console.error("Грешка: Supabase клиентът не е инициализиран!");
        return;
    }

    try {
        // 1. Проверяваме за активна сесия в Supabase Auth
        const { data: { session }, error } = await supabaseClient.auth.getSession();
        
        // 2. Проверяваме и локалния запис
        const savedUserId = localStorage.getItem('autolog_user_id') || (session ? session.user.id : null);

        if (savedUserId) {
            // Потребителят е влязъл - скриваме входа, показваме колите
            if (authContainer) authContainer.style.display = 'none';
            if (appWrapper) appWrapper.style.display = 'block';
        } else {
            // Няма сесия - показваме екрана за вход
            if (appWrapper) appWrapper.style.display = 'none';
            if (authContainer) {
                authContainer.style.display = 'flex';
                authContainer.style.position = 'fixed';
                authContainer.style.inset = '0';
                authContainer.style.backgroundColor = '#0b101b';
                authContainer.style.zIndex = '99999';
                authContainer.style.alignItems.center';
                authContainer.style.justifyContent = 'center';
                authContainer.style.padding = '20px';
            }
        }

        // Слушаме за промени в състоянието на входа
        supabaseClient.auth.onAuthStateChange((event, session) => {
            if (event === 'SIGNED_IN' && session) {
                localStorage.setItem('autolog_user_id', session.user.id);
                location.reload();
            }
        });

    } catch (err) {
        console.error("Грешка при проверка на сесията:", err);
    }
});

// Изпращане на Magic Link по имейл
async function loginWithEmail() {
    if (!supabaseClient) {
        alert('Грешка: Supabase клиентът не е готов.');
        return;
    }

    const emailInput = document.getElementById('user-email');
    if (!emailInput) return;

    const email = emailInput.value.trim();
    if (!email || !email.includes('@')) {
        alert('Моля, въведете валиден имейл адрес!');
        return;
    }

    const btn = document.getElementById('btn-send-email');
    if (btn) {
        btn.disabled = true;
        btn.innerText = 'Изпращане...';
    }

    try {
        const { error } = await supabaseClient.auth.signInWithOtp({
            email: email,
            options: {
                emailRedirectTo: window.location.href
            }
        });

        if (error) {
            alert('Грешка: ' + error.message);
        } else {
            alert('Изпратен е Magic Link на ' + email + '!\nПроверете пощата си.');
        }
    } catch (err) {
        alert('Неочаквана грешка при изпращането.');
    } finally {
        if (btn) {
            btn.disabled = false;
            btn.innerHTML = '<span>Изпрати Magic Link</span> <i class="fa-solid fa-arrow-right" style="font-size: 13px;"></i>';
        }
    }
}

// Изход от системата
async function logoutUser() {
    if (supabaseClient) {
        await supabaseClient.auth.signOut();
    }
    localStorage.removeItem('autolog_user_id');
    location.reload();
}
