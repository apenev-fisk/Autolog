// auth.js - Интегрирана оторизация с Google OAuth за AutoLog

const SUPABASE_URL = 'https://tferaxmcahxalhmihubg.supabase.co';
const SUPABASE_KEY = 'sb_publishable_Rd-WYS-Rwy-_b6l_ob73uw_DRuJjN-n';

// Инициализираме го точно като 'supabase' (за да пасва на останалия код):
const supabase = window.supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

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
    const googleBtn = document.getElementById('btn-google-login');

    if (googleBtn) {
        googleBtn.addEventListener('click', loginWithGoogle);
    }

    if (!supabaseClient) {
        console.error("Грешка: Supabase клиентът не е инициализиран.");
        return;
    }

    try {
        // Проверяваме дали има активна сесия
        const { data: { session }, error } = await supabaseClient.auth.getSession();

        if (session && session.user) {
            // Влязъл е – скриваме входа и показваме имейла му горе в хедъра
            if (authContainer) authContainer.style.display = 'none';
            if (loggedUserEmail) loggedUserEmail.innerText = session.user.email;
            if (userProfileBadge) userProfileBadge.style.display = 'flex';
        } else {
            // Няма сесия – показваме екрана за вход
            if (authContainer) authContainer.style.display = 'flex';
            if (userProfileBadge) userProfileBadge.style.display = 'none';
        }

        // Слушаме за промени в състоянието
        supabaseClient.auth.onAuthStateChange((event, session) => {
            if (event === 'SIGNED_IN' && session) {
                if (authContainer) authContainer.style.display = 'none';
                if (loggedUserEmail) loggedUserEmail.innerText = session.user.email;
                if (userProfileBadge) userProfileBadge.style.display = 'flex';
                window.location.reload();
            }
        });

    } catch (err) {
        console.error("Грешка при проверка на сесията:", err);
    }
});

// Функция за вход с Google акаунт през Supabase
async function loginWithGoogle() {
    if (!supabaseClient) {
        alert('Грешка: Supabase клиентът не е готов.');
        return;
    }

   try {
  const { data, error } = await supabase.auth.signInWithOAuth({
    provider: 'google',
    options: {
      redirectTo: 'https://apenev-fisk.github.io/Autolog/'
    }
  });

        if (error) {
            alert('Грешка при Google вход: ' + error.message);
        }
    } catch (err) {
        alert('Грешка: ' + (error.message || JSON.stringify(error)));
    }
}

// Изход от профила
async function logoutUser() {
    if (supabaseClient) {
        await supabaseClient.auth.signOut();
    }
    window.location.reload();
}
