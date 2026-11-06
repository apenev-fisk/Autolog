// auth.js - Вход само с Имейл (Magic Link) за AutoLog
const SUPABASE_URL = 'https://tferaxmcahxalhmihubg.supabase.co';
const SUPABASE_KEY = 'sb_publishable_Rd-WYS-Rwy-_b6l_ob73uw_DRuJjN-n';
const supabaseClient = window.supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

// Проверка за сесия при зареждане
document.addEventListener("DOMContentLoaded", async () => {
    // 1. Проверяваме за активна Supabase Auth сесия
    const { data: { session } } = await supabaseClient.auth.getSession();
    
    // 2. Или за запазен ID локално
    const savedUserId = localStorage.getItem('autolog_user_id') || (session ? session.user.id : null);

    const authContainer = document.getElementById('auth-container');
    const appWrapper = document.getElementById('app-wrapper');

    if (savedUserId) {
        // Потребителят е влезнал - показваме приложението
        if (authContainer) authContainer.style.display = 'none';
        if (appWrapper) appWrapper.style.display = 'block';
    } else {
        // Потребителят не е влезнал - показваме стилния прозорец за вход
        if (appWrapper) appWrapper.style.display = 'none';
        if (authContainer) {
            authContainer.style.display = 'flex';
            authContainer.style.position = 'fixed';
            authContainer.style.inset = '0';
            authContainer.style.backgroundColor = '#0b101b';
            authContainer.style.zIndex = '99999';
            authContainer.style.alignItems = 'center';
            authContainer.style.justifyContent = 'center';
            authContainer.style.padding = '20px';
        }
    }

    // Слушаме за промени в auth състоянието (напр. когато кликне на линка от имейла)
    supabaseClient.auth.onAuthStateChange((event, session) => {
        if (event === 'SIGNED_IN' && session) {
            localStorage.setItem('autolog_user_id', session.user.id);
            location.reload();
        }
    });
});

// Изпращане на Magic Link по имейл
async function loginWithEmail() {
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
            alert('Изпратен е Magic Link на ' + email + '!\nПроверете пощата си (включително папка Спам).');
        }
    } catch (err) {
        alert('Неочаквана грешка при изпращането.');
    } finally {
        if (btn) {
            btn.disabled = false;
            btn.innerText = 'Изпрати Magic Link';
        }
    }
}

// Изход от профила
async function logoutUser() {
    await supabaseClient.auth.signOut();
    localStorage.removeItem('autolog_user_id');
    location.reload();
}
