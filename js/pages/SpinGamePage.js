// Spin & Win Inner Game Tracking Page Component
import { store } from '../state.js';
import { mockData } from '../mockData.js';

export function renderSpinGamePage() {
  const prizes = mockData.gameRewards.spinWheel;

  return `
    <div class="py-12 sm:py-16 bg-wf-bg min-h-screen">
      <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 text-center">
        
        <div class="flex items-center justify-between">
          <a href="#home" class="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-white border border-wf-border text-wf-dark font-bold text-xs hover:bg-wf-muted transition-colors">
            <i data-lucide="arrow-left" class="w-4 h-4"></i> Back to Home
          </a>
          <span class="text-xs font-mono text-wf-subtext">Game ID: SPIN-WIN-PAGE</span>
        </div>

        <div class="rounded-3xl bg-white border-2 border-wf-border p-6 sm:p-10 shadow-md space-y-6">
          <div class="space-y-2">
            <span class="px-3 py-1 rounded-full bg-wf-muted text-wf-dark font-bold text-xs uppercase border border-wf-border">
              Dedicated Game Landing Page
            </span>
            <h1 class="font-outfit text-3xl sm:text-4xl font-extrabold text-wf-dark">Spin & Win Wheel of Fortune</h1>
            <p class="text-xs sm:text-sm text-wf-subtext">Click spin below to trigger wheel rotation and claim guaranteed partner vouchers.</p>
          </div>

          <div class="py-4">
            <button 
              id="btn-trigger-spin-game"
              class="px-8 py-4 rounded-xl bg-wf-dark hover:bg-wf-darkHover text-white font-extrabold text-base shadow-xs transition-all flex items-center justify-center gap-2 mx-auto"
            >
              <i data-lucide="disc-3" class="w-5 h-5 text-white"></i>
              <span>Launch Spin Wheel Game</span>
            </button>
          </div>
        </div>

      </div>
    </div>
  `;
}

export function bindSpinGamePageEvents() {
  const btn = document.getElementById('btn-trigger-spin-game');
  if (btn) {
    btn.addEventListener('click', () => {
      store.requireAuth(() => {
        store.openModal('spin');
      });
    });
  }
}
