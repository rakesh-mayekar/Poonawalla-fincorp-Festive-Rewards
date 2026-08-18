// Header Component - Minimalist UI Protocol Edition
import { store } from '../state.js';

export function renderHeader() {
  const state = store.getState();
  const isAuthenticated = state.userSession.isAuthenticated;
  const mobileNumber = state.userSession.mobileNumber;

  return `
    <header class="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-wf-border text-wf-text shadow-xs">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex items-center justify-between h-16 sm:h-20 gap-4">
          
          <!-- Home as Logo -->
          <a href="#home" class="flex items-center gap-3 group focus:outline-none flex-shrink-0">
            <div class="w-10 h-10 rounded-lg bg-wf-dark text-white p-0.5 shadow-xs flex items-center justify-center font-mono font-bold text-base tracking-tighter">
              PF
            </div>
            <div class="flex flex-col text-left">
              <div class="font-sans font-bold text-base sm:text-lg text-wf-dark tracking-tight leading-none">
                POONAWALLA FINCORP
              </div>
              <span class="text-[11px] text-wf-subtext font-mono tracking-wide mt-1">
                Festive Rewards
              </span>
            </div>
          </a>

          <!-- Single Line Desktop Navigation -->
          <nav class="hidden lg:flex items-center space-x-2 xl:space-x-3 text-sm font-semibold whitespace-nowrap">
            
            <!-- Play and Win Dropdown Menu -->
            <div class="relative group">
              <button 
                class="px-3.5 py-2 rounded-lg text-wf-dark hover:bg-wf-muted transition-all flex items-center gap-1.5 focus:outline-none"
              >
                <i data-lucide="gamepad-2" class="w-4 h-4 text-wf-dark"></i>
                <span>Play and Win</span>
                <i data-lucide="chevron-down" class="w-3.5 h-3.5 text-wf-subtext group-hover:rotate-180 transition-transform"></i>
              </button>

              <!-- Dropdown Panel -->
              <div class="absolute left-0 top-full pt-1 hidden group-hover:block w-52 z-50 animate-fade-in">
                <div class="bg-white border border-wf-border rounded-xl shadow-xl p-2 space-y-1">
                  <a 
                    href="#game-spin"
                    class="flex items-center gap-2.5 px-3 py-2 rounded-lg hover:bg-wf-muted text-wf-dark text-xs font-semibold transition-colors"
                  >
                    <i data-lucide="disc" class="w-4 h-4"></i> Spin & Win
                  </a>
                  <a 
                    href="#game-scratch"
                    class="flex items-center gap-2.5 px-3 py-2 rounded-lg hover:bg-wf-muted text-wf-dark text-xs font-semibold transition-colors"
                  >
                    <i data-lucide="sparkles" class="w-4 h-4"></i> Scratch Card
                  </a>
                  <a 
                    href="#game-shuffle"
                    class="flex items-center gap-2.5 px-3 py-2 rounded-lg hover:bg-wf-muted text-wf-dark text-xs font-semibold transition-colors"
                  >
                    <i data-lucide="layers" class="w-4 h-4"></i> Shuffle Card
                  </a>
                </div>
              </div>
            </div>

            <!-- PFIN Card -->
            <a 
              href="#pfin-card-detail"
              class="px-3.5 py-2 rounded-lg text-wf-dark hover:bg-wf-muted transition-all flex items-center gap-1.5"
            >
              <i data-lucide="credit-card" class="w-4 h-4 text-wf-dark"></i> PFIN Card
            </a>

            <!-- Festive Offers -->
            <a 
              href="#offers"
              class="px-3.5 py-2 rounded-lg text-wf-dark hover:bg-wf-muted transition-all flex items-center gap-1.5"
            >
              <i data-lucide="gift" class="w-4 h-4 text-wf-dark"></i> Festive Offers
            </a>

            <!-- Services -->
            <a 
              href="#services"
              class="px-3.5 py-2 rounded-lg text-wf-dark hover:bg-wf-muted transition-all flex items-center gap-1.5"
            >
              <i data-lucide="building-2" class="w-4 h-4 text-wf-dark"></i> Services
            </a>

          </nav>

          <!-- Right Action: Verify Mobile / Account Session Logout -->
          <div class="flex items-center gap-2 sm:gap-3 whitespace-nowrap">
            ${isAuthenticated ? `
              <div class="flex items-center gap-1.5 p-1 pl-3 rounded-lg bg-wf-pastelGreen border border-emerald-200 text-wf-pastelGreenText font-semibold text-xs sm:text-sm">
                <i data-lucide="check-circle-2" class="w-4 h-4 text-emerald-600"></i>
                <span class="font-mono text-xs font-bold">+91 ${mobileNumber.slice(-4).padStart(10, 'X')}</span>
                <button 
                  id="btn-logout-session"
                  title="Remove / Logout Account"
                  class="ml-1 p-1.5 rounded bg-emerald-100 hover:bg-rose-100 hover:text-rose-700 text-emerald-800 transition-colors flex items-center gap-1 text-[11px] font-bold"
                >
                  <i data-lucide="log-out" class="w-3.5 h-3.5"></i>
                  <span class="hidden sm:inline">Logout</span>
                </button>
              </div>
            ` : `
              <button 
                id="btn-open-otp"
                class="px-4 py-2 rounded-lg bg-wf-dark hover:bg-wf-darkHover text-white font-semibold text-xs sm:text-sm flex items-center gap-1.5 shadow-xs active:scale-95 transition-all"
              >
                <i data-lucide="lock" class="w-4 h-4"></i>
                <span>Verify Mobile</span>
              </button>
            `}

            <!-- Mobile Menu Toggle -->
            <button 
              id="btn-mobile-nav-toggle"
              class="lg:hidden p-2 rounded-lg bg-wf-muted text-wf-dark focus:outline-none"
            >
              <i data-lucide="menu" class="w-5 h-5"></i>
            </button>
          </div>

        </div>

        <!-- Mobile Navigation Drawer -->
        <div id="mobile-nav-menu" class="hidden lg:hidden border-t border-wf-border py-3 space-y-1 text-left">
          <div class="px-3 py-1 text-[10px] font-mono font-bold uppercase tracking-wider text-wf-subtext">Play and Win</div>
          <a href="#game-spin" class="mobile-nav-link block px-6 py-2 rounded-lg text-wf-dark hover:bg-wf-muted text-sm font-semibold flex items-center gap-2">
            <i data-lucide="disc" class="w-4 h-4"></i> Spin & Win
          </a>
          <a href="#game-scratch" class="mobile-nav-link block px-6 py-2 rounded-lg text-wf-dark hover:bg-wf-muted text-sm font-semibold flex items-center gap-2">
            <i data-lucide="sparkles" class="w-4 h-4"></i> Scratch Card
          </a>
          <a href="#game-shuffle" class="mobile-nav-link block px-6 py-2 rounded-lg text-wf-dark hover:bg-wf-muted text-sm font-semibold flex items-center gap-2">
            <i data-lucide="layers" class="w-4 h-4"></i> Shuffle Card
          </a>
          
          <div class="border-t border-wf-border my-2 pt-2"></div>
          <a href="#pfin-card-detail" class="mobile-nav-link block px-4 py-2 rounded-lg text-wf-dark hover:bg-wf-muted text-sm font-semibold flex items-center gap-2">
            <i data-lucide="credit-card" class="w-4 h-4"></i> PFIN Card
          </a>
          <a href="#offers" class="mobile-nav-link block px-4 py-2 rounded-lg text-wf-dark hover:bg-wf-muted text-sm font-semibold flex items-center gap-2">
            <i data-lucide="gift" class="w-4 h-4"></i> Festive Offers
          </a>
          <a href="#services" class="mobile-nav-link block px-4 py-2 rounded-lg text-wf-dark hover:bg-wf-muted text-sm font-semibold flex items-center gap-2">
            <i data-lucide="building-2" class="w-4 h-4"></i> Services
          </a>
        </div>

      </div>
    </header>
  `;
}

export function bindHeaderEvents() {
  const btnOtp = document.getElementById('btn-open-otp');
  if (btnOtp) {
    btnOtp.addEventListener('click', () => {
      store.openModal('otp', { reason: 'Verify mobile to unlock festive rewards and loan offers.' });
    });
  }

  const btnLogout = document.getElementById('btn-logout-session');
  if (btnLogout) {
    btnLogout.addEventListener('click', () => {
      if (confirm('Are you sure you want to remove/logout your account session?')) {
        store.logoutUser();
      }
    });
  }

  const toggleBtn = document.getElementById('btn-mobile-nav-toggle');
  const menu = document.getElementById('mobile-nav-menu');
  if (toggleBtn && menu) {
    toggleBtn.addEventListener('click', () => {
      menu.classList.toggle('hidden');
    });

    document.querySelectorAll('.mobile-nav-link').forEach(link => {
      link.addEventListener('click', () => {
        menu.classList.add('hidden');
      });
    });
  }
}
