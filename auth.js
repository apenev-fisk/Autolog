// auth.js - Управление на входа и сигурността в AutoLog
const SUPABASE_URL = 'https://tferaxmcahxalhmihubg.supabase.co';
const SUPABASE_KEY = 'sb_publishable_Rd-WYS-Rwy-_b6l_ob73uw_DRuJjN-n';
const supabaseClient = window.supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

// Проверка при зареждане на страницата
document.addEventListener("DOMContentLoaded", async () => {
    const savedUserId = localStorage.getItem('autolog_user_id');
    const authContainer = document.getElementById('auth-container');
    const appWrapper = document.getElementById('app-wrapper');

    if (savedUserId) {
        // Има влязъл потребител - скриваме входа, показваме приложението
        if (authContainer) authContainer.style.display = 'none';
        if (appWrapper) appWrapper.style.display = 'block';
    } else {
        // Няма сесия - показваме екрана за вход, скриваме приложението
        if (authContainer) {
            authContainer.style.display = 'block';
            authContainer.style.position = 'fixed';
            authContainer.style.inset = '0';
            authContainer.style.backgroundColor = '#0f172a';
            authContainer.style.zIndex = '99999';
            authContainer.style.display = 'flex';
            authContainer.style.flexDirection = 'column';
            authContainer.style.alignItems = 'center';
            authContainer.style.justifyContent = 'center';
        }
        if (appWrapper) appWrapper.style.display = 'none';
    }
});

// Превключване между табовете (ПИН / Имейл)
function switchMethod(method) {
    const pinTab = document.getElementById('btn-pin-tab');
    const emailTab = document.getElementById('btn-email-tab');
    
    if (!pinTab || !emailTab) return;

    if (method === 'pin') {
        document.getElementById('pin-form').style.display = 'block';
        document.getElementById('email-form').style.display = 'none';
        pinTab.style.background = '#ff7300';
        pinTab.style.color = '#fff';
        emailTab.style.background = 'transparent';
        emailTab.style.color = '#94a3b8';
    } else {
        document.getElementById('pin-form').style.display = 'none';
        document.getElementById('email-form').style.display = 'block';
        emailTab.style.background = '#ff7300';
        emailTab.style.color = '#fff';
        pinTab.style.background = 'transparent';
        pinTab.style.color = '#94a3b8';
    }
}

// Вход с ПИН код
async function loginWithPin() {
    const pin = document.getElementById('user-pin').value.trim();
    if (pin.length < 4) {
        alert('Моля, въведете 4-цифрен ПИН код!');
        return;
    }

    try {
        let { data: profile, error } = await supabaseClient
            .from('profiles')
            .select('*')
            .eq('pin_code', pin)
            .maybeSingle();

        if (error) {
            alert("Грешка при връзка с базата: " + error.message);
            return;
        }

        if (!profile) {
            const newUserId = 'usr_' + Date.now();
            const { data: newProfile, error: insertError } = await supabaseClient
                .from('profiles')
                .insert([{ id: newUserId, pin_code: pin, auth_provider: 'pin' }])
                .select()
                .single();

            if (insertError) {
                alert("Грешка при създаване на профил: " + insertError.message);
                return;
            }
            profile = newProfile;
        }

        localStorage.setItem('autolog_user_id', profile.id);
        location.reload();

    } catch (err) {
        alert("Възникна неочаквана грешка.");
    }
}

// Изход
function logoutUser() {
    localStorage.removeItem('autolog_user_id');
    location.reload();
}
