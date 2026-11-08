// auth.js - Автономно управление на входа, логото, имейла и изхода

const SUPABASE_URL = 'https://tferaxmcahxalhmihubg.supabase.co';
const SUPABASE_KEY = 'sb_publishable_Rd-WYS-Rwy-_b6l_ob73uw_DRuJjN-n';

const supabaseClient = window.supabase ? window.supabase.createClient(SUPABASE_URL, SUPABASE_KEY) : null;

// Създаване и инжектиране на визуалните елементи (без да пипаме index.html)
function injectAuthUI() {
    // 1. Създаваме целия екран за вход (скрит по подразбиране)
    if (!document.getElementById('dynamicLoginOverlay')) {
        const overlay = document.createElement('div');
        overlay.id = 'dynamicLoginOverlay';
        overlay.style.cssText = 'position: fixed; top: 0; left: 0; width: 100%; height: 100%; background: #121212; z-index: 99999; display: flex; flex-direction: column; justify-content: center; align-items: center; color: #fff; font-family: sans-serif;';
        
        overlay.innerHTML = `
            <div style="text-align: center; padding: 30px; background: #1e1e1e; border-radius: 12px; box-shadow: 0 4px 20px rgba(0,0,0,0.5); max-width: 350px; width: 90%;">
                <h2 style="margin-bottom: 10px; color: #fff;">Добре дошли в AutoLog</h2>
                <p style="color: #aaa; font-size: 14px; margin-bottom: 25px;">Влезте с вашия Google акаунт, за да продължите.</p>
                <button onclick="loginWithGoogle()" style="background: #4285F4; color: white; border: none; padding: 12px 20px; font-size: 15px; font-weight: bold; border-radius: 6px; cursor: pointer; width: 100%; box-shadow: 0 2px 5px rgba(0,0,0,0.2);">
                    Вход с Google акаунт
                </button>
            </div>
        `;
        document.body.appendChild(overlay);
    }

    // 2. Създаваме лентичката с имейла и бутона за изход горе вдясно
    if (!document.getElementById('dynamicUserBadge')) {
        const badge = document.createElement('div');
        badge.id = 'dynamicUserBadge';
        badge.style.cssText = 'position: fixed; top: 10px; right: 10px; z-index: 99998; display: none; align-items: center; gap: 10px; background: rgba(30, 30, 30, 0.9); padding: 6px 12px; border-radius: 6px; font-size: 12px; color: #fff; font-family: sans-serif; box-shadow: 0 2px 8px rgba(0,0,0,0.3);';
        
        badge.innerHTML = `
            <span id="dynamicUserEmail" style="color: #ddd;"></span>
            <button onclick="logoutUser()" style="background: #e74c3c; color: white; border: none; padding: 4px 8px; border-radius: 4px; cursor: pointer; font-size: 11px; font-weight: bold;">
                Изход
            </button>
        `;
        document.body.appendChild(badge);
    }
}

// Вход с Google
async function loginWithGoogle() {
    if (!supabaseClient) return;
    try {
        const { error } = await supabaseClient.auth.signInWithOAuth({
            provider: 'google',
            options: {
                redirectTo: 'https://apenev-fisk.github.io/Autolog/'
            }
        });
        if (error) throw error;
    } catch (err) {
        alert('Грешка при Google вход: ' + (err.message || JSON.stringify(err)));
    }
}

// Изход от акаунта
async function logoutUser() {
    if (!supabaseClient) return;
    const { error } = await supabaseClient.auth.signOut();
    if (error) {
        alert('Грешка при изход: ' + error.message);
    } else {
        window.location.reload();
    }
}

// Проверка на сесията
async function checkUserSession() {
    if (!supabaseClient) return;

    injectAuthUI();

    const overlay = document.getElementById('dynamicLoginOverlay');
    const badge = document.getElementById('dynamicUserBadge');
    const emailSpan = document.getElementById('dynamicUserEmail');

    const { data: { session }, error } = await supabaseClient.auth.getSession();

    if (session && session.user) {
        // Има вход -> Скриваме екрана за вход, показваме имейла и бутона Изход горе вдясно
        if (overlay) overlay.style.display = 'none';
        if (badge) badge.style.display = 'flex';
        if (emailSpan) emailSpan.innerText = session.user.email;
    } else {
        // Няма вход -> Показваме изцяло екрана за вход, скриваме банера
        if (overlay) overlay.style.display = 'flex';
        if (badge) badge.style.display = 'none';
    }
}

// Стартираме проверката при зареждане на страницата
window.addEventListener('DOMContentLoaded', checkUserSession);
