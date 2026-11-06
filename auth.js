// auth.js - Zashitena inicializatsiya i vhod s Imeil (Magic Link) za AutoLog
const SUPABASE_URL = 'https://tferaxmcahxalhmihubg.supabase.co';
const SUPABASE_KEY = 'sb_publishable_Rd-WYS-Rwy-_b6l_ob73uw_DRuJjN-n';

let supabaseClient = null;

// Bezopasna inicializatsiya na Supabase SDK
if (window.supabase && typeof window.supabase.createClient === 'function') {
    supabaseClient = window.supabase.createClient(SUPABASE_URL, SUPABASE_KEY);
} else {
    console.error("Supabase SDK vse oshte ne e zareden!");
}

// Proverka za sesiya i zakachane na butoncheto sled zarejdane na DOM
document.addEventListener("DOMContentLoaded", async () => {
    const authContainer = document.getElementById('auth-container');
    const appWrapper = document.getElementById('app-wrapper');
    const sendBtn = document.getElementById('btn-send-email');

// Когато потребителят е влязъл успешно, взимаме имейла му и го показваме на екрана
const userBadge = document.getElementById('user-profile-badge');
const emailSpan = document.getElementById('logged-user-email');

if (session && session.user && session.user.email) {
    if (emailSpan) emailSpan.innerText = session.user.email;
    if (userBadge) userBadge.style.display = 'flex'; // Показва баджовете горе
}
    
    // Zakachvame lissener-a kam butona dinamichno (bez inline onclick)
    if (sendBtn) {
        sendBtn.addEventListener('click', loginWithEmail);
    }

    if (!supabaseClient) {
        console.error("Greshka: Supabase klientut ne e inicializiran!");
        return;
    }

    try {
        // 1. Proverqvame za aktivna sesiya v Supabase Auth
        const { data: { session }, error } = await supabaseClient.auth.getSession();
        
        // 2. Proverka i na lokalniya zapis
        const savedUserId = localStorage.getItem('autolog_user_id') || (session ? session.user.id : null);

        if (savedUserId) {
            // Potrebitelyat e vlyazal - skrivame vhoda, pokazvame prilojenieto
            if (authContainer) authContainer.style.display = 'none';
            if (appWrapper) appWrapper.style.display = 'block';
        } else {
            // Nyama sesiya - pokazvame ekrana za vhod
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

        // Slushame za promeni v sustoyanieto na vhoda
        supabaseClient.auth.onAuthStateChange((event, session) => {
            if (event === 'SIGNED_IN' && session) {
                localStorage.setItem('autolog_user_id', session.user.id);
                location.reload();
            }
        });

    } catch (err) {
        console.error("Greshka pri proverka na sesiyata:", err);
    }
});

// Izprashtane na Magic Link po imeil
async function loginWithEmail() {
    if (!supabaseClient) {
        alert('Greshka: Supabase klientut ne e gotov.');
        return;
    }

    const emailInput = document.getElementById('user-email');
    if (!emailInput) return;

    const email = emailInput.value.trim();
    if (!email || !email.includes('@')) {
        alert('Molya, vavedete validen imeil adres!');
        return;
    }

    const btn = document.getElementById('btn-send-email');
    if (btn) {
        btn.disabled = true;
        btn.innerText = 'Izprashtane...';
    }

    try {
        const { error } = await supabaseClient.auth.signInWithOtp({
            email: email,
            options: {
                emailRedirectTo: window.location.href
            }
        });

        if (error) {
            alert('Greshka: ' + error.message);
        } else {
            alert('Izpraten e Magic Link na ' + email + '!\nProverete poshtata si.');
        }
    } catch (err) {
        alert('Neochakvana greshka pri izprashtaneto.');
    } finally {
        if (btn) {
            btn.disabled = false;
            btn.innerHTML = '<span>Izprati Magic Link</span> <i class="fa-solid fa-arrow-right" style="font-size: 13px;"></i>';
        }
    }
}

// Izhod ot sistemata
async function logoutUser() {
    if (supabaseClient) {
        await supabaseClient.auth.signOut();
    }
    localStorage.removeItem('autolog_user_id');
    location.reload();
}
