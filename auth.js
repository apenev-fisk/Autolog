// auth.js - Автономно управление на входа, логото, имейла и изхода

const SUPABASE_URL = 'https://tferaxmcahxalhmihubg.supabase.co';
const SUPABASE_KEY = 'sb_publishable_Rd-WYS-Rwy-_b6l_ob73uw_DRuJjN-n';

const supabaseClient = window.supabase ? window.supabase.createClient(SUPABASE_URL, SUPABASE_KEY) : null;

// Създаване и инжектиране на визуалните елементи (с перфектния дизайн и оранжев бутон)
function injectAuthUI() {
    // 1. Стилен екран за вход с оранжев бутон и светещо лого
    if (!document.getElementById('dynamicLoginOverlay')) {
        const overlay = document.createElement('div');
        overlay.id = 'dynamicLoginOverlay';
        overlay.style.cssText = 'position: fixed; top: 0; left: 0; width: 100%; height: 100%; background: #0b0b0b; z-index: 99999; display: flex; flex-direction: column; justify-content: center; align-items: center; color: #fff; font-family: sans-serif;';
        
        overlay.innerHTML = `
            <div style="text-align: center; padding: 45px 35px; background: #161616; border: 1px solid rgba(255,255,255,0.06); border-radius: 20px; box-shadow: 0 15px 35px rgba(0,0,0,0.9), 0 0 25px rgba(230, 126, 34, 0.12); max-width: 400px; width: 90%;">
                <img src="logo.jpg" alt="AutoLog Logo" style="width: 130px; height: auto; margin-bottom: 25px; filter: drop-shadow(0 0 16px rgba(230, 126, 34, 0.35));">
                <h2 style="margin-bottom: 8px; color: #fff; font-size: 24px; font-weight: 700; letter-spacing: 0.5px;">AutoLog</h2>
                <p style="color: #888; font-size: 13px; margin-bottom: 35px;">Професионална система за сервизна история</p>
                
                <button onclick="loginWithGoogle()" style="background: linear-gradient(135deg, #e67e22, #d35400); color: white; border: none; padding: 14px 22px; font-size: 15px; font-weight: 600; border-radius: 10px; cursor: pointer; width: 100%; box-shadow: 0 6px 20px rgba(230, 126, 34, 0.4); display: flex; align-items: center; justify-content: center; gap: 12px; transition: transform 0.1s, box-shadow 0.2s;">
                    <svg width="20" height="20" viewBox="0 0 24 24"><path fill="#ffffff" d="M23.745 12.27c-.07-.7-.6-1.27-1.31-1.27H12v4.56h6.51c-.28 1.48-1.52 3.6-4.51 3.6-2.72 0-4.93-2.25-4.93-5.03s2.21-5.03 4.93-5.03c1.55 0 2.91.6 3.86 1.58l3.41-3.41C19.86 6.13 16.2 5 12 5 7.03 5 3 9.03 3 14s4.03 9 9 9c5.2 0 8.64-3.65 8.64-8.79 0-.25-.03-.5-.07-.74z"/></svg>
                    Вход с Google акаунт
                </button>
            </div>
        `;
        document.body.appendChild(overlay);
    }

    // 2. Стилен банер за потребителя горе вдясно (Имейл + Бутон Изход)
    if (!document.getElementById('dynamicUserBadge')) {
        const badge = document.createElement('div');
        badge.id = 'dynamicUserBadge';
        badge.style.cssText = 'position: fixed; top: 14px; right: 14px; z-index: 100000; display: none; align-items: center; gap: 12px; background: rgba(22, 22, 22, 0.95); border: 1px solid rgba(255,255,255,0.08); padding: 8px 14px; border-radius: 10px; font-size: 12px; color: #fff; font-family: sans-serif; box-shadow: 0 4px 20px rgba(0,0,0,0.6); backdrop-filter: blur(5px);';
        
        badge.innerHTML = `
            <span id="dynamicUserEmail" style="color: #ccc; font-weight: 500;"></span>
            <button onclick="logoutUser()" style="background: #e74c3c; color: white; border: none; padding: 6px 12px; border-radius: 6px; cursor: pointer; font-size: 11px; font-weight: bold; box-shadow: 0 2px 8px rgba(231, 76, 60, 0.4); transition: background 0.2s;">
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
        // Има вход -> Скриваме екрана за вход, показваме банера с имейла и бутона за изход горе вдясно
        if (overlay) overlay.style.display = 'none';
        if (badge) badge.style.display = 'flex';
        if (emailSpan) emailSpan.innerText = session.user.email;
    } else {
        // Няма вход -> Показваме луксозния екран за вход, скриваме банера
        if (overlay) overlay.style.display = 'flex';
        if (badge) badge.style.display = 'none';
    }
}

// Стартираме проверката при зареждане на страницата
window.addEventListener('DOMContentLoaded', checkUserSession);
