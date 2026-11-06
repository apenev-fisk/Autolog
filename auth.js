
// AUTOLOG - SECURE SUPABASE AUTH
// Magic Link Authentication

const SUPABASE_URL = 'https://tferaxmcahxalhmihubg.supabase.co';
const SUPABASE_KEY = 'sb_publishable_Rd-WYS-Rwy-_b6l_ob73uw_DRuJjN-n';

let supabaseClient = null;
let authInitialized = false;

// ----------------------------------
// SUPABASE INITIALIZATION
// ----------------------------------

if (
    window.supabase &&
    typeof window.supabase.createClient === 'function'
) {
    supabaseClient = window.supabase.createClient(
        SUPABASE_URL,
        SUPABASE_KEY
    );
} else {
    console.error('AutoLog: Supabase SDK не е зареден!');
}

// ----------------------------------
// AUTH UI
// ----------------------------------

function setAuthUI(session) {
    const authContainer = document.getElementById('auth-container');
    const appWrapper = document.getElementById('app-wrapper');
    const userBadge = document.getElementById('user-profile-badge');
    const emailSpan = document.getElementById('logged-user-email');

    const authenticated = !!(
        session &&
        session.user &&
        session.user.id
    );

    if (appWrapper) {
        appWrapper.style.display = authenticated ? 'block' : 'none';
    }

    if (authContainer) {
        authContainer.style.display = authenticated ? 'none' : 'flex';
    }

    if (userBadge) {
        userBadge.style.display =
            authenticated && session.user.email ? 'flex' : 'none';
    }

    if (emailSpan) {
        emailSpan.textContent =
            authenticated ? (session.user.email || '') : '';
    }

    if (authenticated) {
        localStorage.setItem(
            'autolog_user_id',
            session.user.id
        );
    } else {
        localStorage.removeItem('autolog_user_id');
    }
}

// ----------------------------------
// INITIALIZATION
// ----------------------------------

document.addEventListener('DOMContentLoaded', async () => {

    const sendBtn = document.getElementById('btn-send-email');

    if (sendBtn) {
        sendBtn.addEventListener('click', loginWithEmail);
    }

    if (!supabaseClient) {
        console.error('AutoLog: Няма Supabase клиент.');
        return;
    }

    try {

        // First check the real Supabase session
        const {
            data: { session },
            error
        } = await supabaseClient.auth.getSession();

        if (error) {
            throw error;
        }

        // Display the correct application state
        setAuthUI(session);

        authInitialized = true;

        // Listen for authentication changes
        supabaseClient.auth.onAuthStateChange(
            (event, newSession) => {

                if (!authInitialized) return;

                setAuthUI(newSession);

                if (event === 'SIGNED_IN') {
                    console.log('AutoLog: Успешен вход.');
                }

                if (event === 'SIGNED_OUT') {
                    console.log('AutoLog: Изход от профила.');
                }

                if (event === 'TOKEN_REFRESHED') {
                    console.log('AutoLog: Сесията е обновена.');
                }
            }
        );

    } catch (err) {

        console.error(
            'AutoLog: Грешка при проверка на сесията:',
            err
        );

        setAuthUI(null);
    }
});

// ----------------------------------
// MAGIC LINK LOGIN
// ----------------------------------

async function loginWithEmail() {

    if (!supabaseClient) {
        alert('Грешка: Supabase не е инициализиран.');
        return;
    }

    const emailInput = document.getElementById('user-email');
    const btn = document.getElementById('btn-send-email');

    if (!emailInput) return;

    const email = emailInput.value.trim();

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(email)) {
        alert('Моля, въведете валиден имейл адрес!');
        emailInput.focus();
        return;
    }

    if (btn) {
        btn.disabled = true;
        btn.innerHTML = 'Изпращане...';
    }

    try {

        const redirectUrl =
            window.location.origin + window.location.pathname;

        const { error } =
            await supabaseClient.auth.signInWithOtp({

                email: email,

                options: {
                    emailRedirectTo: redirectUrl
                }

            });

        if (error) {
            throw error;
        }

        alert(
            'Magic Link е изпратен успешно на:\n' +
            email +
            '\n\nПроверете пощата си.'
        );

    } catch (err) {

        console.error('AutoLog Login Error:', err);

        alert(
            'Грешка при изпращане на Magic Link:\n' +
            (err.message || 'Неочаквана грешка.')
        );

    } finally {

        if (btn) {
            btn.disabled = false;

            btn.innerHTML =
                '<span>Изпрати Magic Link</span>' +
                '<i class="fa-solid fa-arrow-right" style="font-size:13px;"></i>';
        }
    }
}

// ----------------------------------
// LOGOUT
// ----------------------------------

async function logoutUser() {

    if (!supabaseClient) return;

    try {

        const { error } = await supabaseClient.auth.signOut();

        if (error) {
            throw error;
        }

        localStorage.removeItem('autolog_user_id');

        setAuthUI(null);

    } catch (err) {

        console.error('AutoLog Logout Error:', err);

        alert('Грешка при изход: ' + err.message);
    }
}
