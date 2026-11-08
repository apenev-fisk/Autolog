// auth.js - Автономно управление на входа, логото, имейла и изхода

const SUPABASE_URL = 'https://tferaxmcahxalhmihubg.supabase.co';
const SUPABASE_KEY = 'sb_publishable_Rd-WYS-Rwy-_b6l_ob73uw_DRuJjN-n';

const supabaseClient = window.supabase ? window.supabase.createClient(SUPABASE_URL, SUPABASE_KEY) : null;

// Създаване и инжектиране на визуалните елементи (без да пипаме index.html)
function injectAuthUI() {
    // 1. Екран за вход с оригиналния дизайн, лого и светещ ефект
    if (!document.getElementById('dynamicLoginOverlay')) {
        const overlay = document.createElement('div');
        overlay.id = 'dynamicLoginOverlay';
        overlay.style.cssText = 'position: fixed; top: 0; left: 0; width: 100%; height: 100%; background: #0f0f0f; z-index: 99999; display: flex; flex-direction: column; justify-content: center; align-items: center; color: #fff; font-family: sans-serif;';
        
        overlay.innerHTML = `
            <div style="text-align: center; padding: 40px 30px; background: #1a1a1a; border: 1px solid rgba(255,255,255,0.08); border-radius: 16px; box-shadow: 0 10px 30px rgba(0,0,0,0.8), 0 0 20px rgba(66, 133, 244, 0.15); max-width: 380px; width: 90%;">
                <img src="logo.png" alt="AutoLog Logo" style="width: 120px; height: auto; margin-bottom: 20px; filter: drop-shadow(0 0 12px rgba(255,255,255,0.2));">
                <h2 style="margin-bottom: 8px; color: #fff; font-size: 22px; font-weight: 600;">AutoLog</h2>
                <p style="color: #888; font-size: 13px; margin-bottom: 30px;">Система за управление и сервизна история</p>
                
                <button onclick="loginWithGoogle()" style="background: #ffffff; color: #202124; border: none; padding: 12px 20px; font-size: 14px; font-weight: 600; border-radius: 8px; cursor: pointer; width: 100%; box-shadow: 0 4px 12px rgba(0,0,0,0.3); display: flex; align-items: center; justify-content: center; gap: 10px; transition: background 0.2s;">
                    <svg width="18" height="18" viewBox="0 0 24 24"><path fill="#4285F4" d="M23.745 12.27c-.07-.7-.6-1.27-1.31-1.27H12v4.56h6.51c-.28 1.48-1.52 3.6-4.51 3.6-2.72 0-4.93-2.25-4.93-5.03s2.21-5.03 4.93-5.03c1.55 0 2.91.6 3.86 1.58l3.41-3.41C19.86 6.13 16.2 5 12 5 7.03 5 3 9.03 3 14s4.03 9 9 9c5.2 0 8.64-3.65 8.64-8.79 0-.25-.03-.5-.07-.74z"/></svg>
                    Вход с Google акаунт
                </button>
            </div>
        `;
        document.body.appendChild(overlay);
    }

    // 2. Стилен банер за потребителя горе вдясно
    if (!document.getElementById('dynamicUserBadge')) {
        const badge = document.createElement('div');
        badge.id = 'dynamicUserBadge';
        badge.style.cssText = 'position: fixed; top: 12px; right: 12px; z-index: 99998; display: none; align-items: center; gap: 12px; background: rgba(26, 26, 26, 0.95); border: 1px solid rgba(255,255,255,0.1); padding: 8px 14px; border-radius: 8px; font-size: 12px; color: #fff; font-family: sans-serif; box-shadow: 0 4px 15px rgba(0,0,0,0.5);';
        
        badge.innerHTML = `
            <span id="dynamicUserEmail" style="color: #bbb;"></span>
            <button onclick="logoutUser()" style="background: #e74c3c; color: white; border: none; padding: 5px 10px; border-radius: 6px; cursor: pointer; font-size: 11px; font-weight: bold; transition: background 0.2s;">
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
