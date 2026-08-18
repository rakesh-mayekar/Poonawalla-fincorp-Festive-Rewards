// Scratch Card Inner Game Tracking Page Component with Pre-Game Mobile Verification
import { store } from '../state.js';

export function renderScratchGamePage() {
  const state = store.getState();
  const isAuthenticated = state.userSession.isAuthenticated;
  const userMobile = state.userSession.mobileNumber || '';

  return `
    <div class="py-12 sm:py-16 bg-wf-bg min-h-screen">
      <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 text-center">
        
        <div class="flex items-center justify-between">
          <a href="#home" class="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-white border border-wf-border text-wf-dark font-bold text-xs hover:bg-wf-muted transition-colors">
            <i data-lucide="arrow-left" class="w-4 h-4"></i> Back to Home
          </a>
          <span class="text-xs font-mono text-wf-subtext">Game ID: SCRATCH-PAGE</span>
        </div>

        <div class="rounded-3xl bg-white border-2 border-wf-border p-6 sm:p-10 shadow-md space-y-6 text-left">
          
          <div class="space-y-2 text-center">
            <span class="px-3 py-1 rounded-full bg-wf-muted text-wf-dark font-bold text-xs uppercase border border-wf-border">
              Festive Mini-Game Playground
            </span>
            <h1 class="font-outfit text-3xl sm:text-4xl font-extrabold text-wf-dark">Golden Scratch Card Playground</h1>
            <p class="text-xs sm:text-sm text-wf-subtext">Scratch off the metallic foil to reveal your instant gift prize.</p>
          </div>

          ${!isAuthenticated ? `
            <!-- Pre-Game Mobile Verification Locked State -->
            <div class="max-w-md mx-auto p-6 rounded-2xl bg-wf-muted border-2 border-wf-border space-y-4 text-center">
              <div class="w-12 h-12 rounded-full bg-wf-dark text-white flex items-center justify-center mx-auto">
                <i data-lucide="lock" class="w-6 h-6"></i>
              </div>
              <div>
                <h3 class="font-outfit font-bold text-lg text-wf-dark">Mobile Verification Required</h3>
                <p class="text-xs text-wf-subtext mt-1">Please verify your mobile number to unlock the Scratch Card game.</p>
              </div>

              <form id="game-mobile-verify-form" class="space-y-3 text-left">
                <div class="space-y-1">
                  <label class="block text-xs font-bold uppercase text-wf-dark">Mobile Number</label>
                  <div class="relative flex items-center">
                    <span class="absolute left-3 text-xs font-bold text-wf-subtext">+91</span>
                    <input 
                      type="tel" 
                      id="game-mobile-input" 
                      required 
                      maxlength="10" 
                      placeholder="98765 43210"
                      value="9876543210"
                      class="w-full pl-12 pr-3 py-2.5 rounded-xl border border-wf-border font-mono text-xs font-semibold text-wf-dark outline-none bg-white"
                    />
                  </div>
                </div>

                <button 
                  type="submit"
                  class="w-full py-3 px-4 rounded-xl bg-wf-dark hover:bg-wf-darkHover text-white font-extrabold text-xs shadow-xs"
                >
                  Verify Mobile & Play Game
                </button>
              </form>
            </div>
          ` : `
            <!-- Mobile Verified Unlocked Game Launcher -->
            <div class="max-w-md mx-auto p-6 rounded-2xl bg-emerald-50 border-2 border-emerald-300 space-y-4 text-center">
              <div class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100 text-emerald-900 font-bold text-xs">
                <i data-lucide="check-circle" class="w-4 h-4 text-emerald-600"></i>
                <span>Verified: +91 ${userMobile}</span>
              </div>
              <h3 class="font-outfit font-bold text-xl text-wf-dark">Game Unlocked!</h3>
              <p class="text-xs text-wf-subtext">Click below to launch the golden Scratch Card game.</p>

              <button 
                id="btn-trigger-scratch-game"
                class="w-full py-3.5 px-6 rounded-xl bg-wf-dark hover:bg-wf-darkHover text-white font-extrabold text-sm shadow-xs transition-all flex items-center justify-center gap-2 mx-auto"
              >
                <i data-lucide="sparkles" class="w-5 h-5 text-white"></i>
                <span>Scratch Card Now</span>
              </button>
            </div>
          `}

        </div>

      </div>
    </div>
  `;
}

export function bindScratchGamePageEvents() {
  const verifyForm = document.getElementById('game-mobile-verify-form');
  if (verifyForm) {
    verifyForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const mob = document.getElementById('game-mobile-input')?.value?.trim() || '9876543210';
      store.loginUser(mob);
      store.openModal('scratch');
    });
  }

  const btn = document.getElementById('btn-trigger-scratch-game');
  if (btn) {
    btn.addEventListener('click', () => {
      store.openModal('scratch');
    });
  }
}
