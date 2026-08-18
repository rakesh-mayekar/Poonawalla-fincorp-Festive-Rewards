// Play & Win Games Section Component - Wireframe Theme
import { store } from '../state.js';

export function renderPlayAndWinSection() {
  const state = store.getState();
  const gameStates = state.gameStates;

  return `
    <section id="play-win" class="py-12 sm:py-16 bg-wf-bg border-b border-wf-border">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 sm:space-y-10">
        
        <!-- Section Header -->
        <div class="text-center max-w-3xl mx-auto space-y-3">
          <div class="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-wf-muted border border-wf-border text-wf-dark text-xs font-bold uppercase tracking-wider">
            <i data-lucide="gamepad-2" class="w-4 h-4 text-wf-dark"></i>
            <span>Festive Engagement Playground</span>
          </div>
          <h2 class="font-outfit text-3xl sm:text-4xl lg:text-5xl font-extrabold text-wf-dark tracking-tight">
            Play & Win <span class="text-wf-subtext">Exciting Rewards</span>
          </h2>
          <p class="text-wf-subtext text-sm sm:text-base">
            Try your luck in our festive mini-games! Win instant Amazon pay vouchers, interest rate cuts, zero-fee processing waivers, and shopping vouchers.
          </p>
        </div>

        <!-- 3 Interactive Game Cards Grid -->
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          
          <!-- Game 1: Spin & Win -->
          <div class="group relative rounded-3xl bg-white p-6 sm:p-7 border-2 ${gameStates.spinPlayed ? 'border-emerald-400 bg-emerald-50/20' : 'border-wf-border hover:border-wf-dark'} shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between overflow-hidden">
            
            <div class="space-y-4">
              <!-- Top Badge -->
              <div class="flex items-center justify-between">
                <span class="px-3 py-1 rounded-full bg-wf-muted text-wf-dark font-bold text-xs flex items-center gap-1">
                  <i data-lucide="disc" class="w-3.5 h-3.5"></i> Wheel Game
                </span>
                ${gameStates.spinPlayed ? `
                  <span class="px-2.5 py-0.5 rounded-full bg-emerald-100 text-emerald-800 font-bold text-xs flex items-center gap-1">
                    <i data-lucide="check" class="w-3 h-3"></i> Claimed
                  </span>
                ` : `
                  <span class="px-2.5 py-0.5 rounded-full bg-wf-muted border border-wf-border text-wf-dark font-bold text-xs">
                    Guaranteed Prize
                  </span>
                `}
              </div>

              <!-- Game Graphic Preview -->
              <div class="py-4 flex justify-center">
                <div class="w-28 h-28 sm:w-32 sm:h-32 rounded-full bg-wf-dark p-1.5 shadow-md group-hover:scale-105 transition-transform flex items-center justify-center relative">
                  <div class="w-full h-full rounded-full bg-white flex items-center justify-center text-wf-dark border-2 border-wf-border">
                    <i data-lucide="disc-3" class="w-16 h-16 text-wf-dark animate-spin-slow"></i>
                  </div>
                  <!-- Center pointer icon -->
                  <div class="absolute -top-1 left-1/2 -translate-x-1/2 w-4 h-4 bg-wf-dark rotate-45 rounded-xs shadow"></div>
                </div>
              </div>

              <!-- Title & Desc -->
              <div class="text-center space-y-1">
                <h3 class="font-outfit font-extrabold text-xl text-wf-dark">Spin & Win</h3>
                <p class="text-xs text-wf-subtext">Spin the festive wheel of fortune to reveal your instant gift voucher!</p>
              </div>
            </div>

            <!-- CTA Button -->
            <button 
              id="btn-play-spin"
              class="mt-6 w-full py-3 px-4 rounded-xl ${gameStates.spinPlayed ? 'bg-wf-muted text-wf-subtext cursor-default' : 'bg-wf-dark hover:bg-wf-darkHover text-white active:scale-98'} font-bold text-sm flex items-center justify-center gap-2 transition-all shadow-xs"
            >
              <i data-lucide="play" class="w-4 h-4 text-white"></i>
              <span>${gameStates.spinPlayed ? 'Spin Again' : 'Spin Wheel Now'}</span>
            </button>

          </div>

          <!-- Game 2: Scratch Card -->
          <div class="group relative rounded-3xl bg-white p-6 sm:p-7 border-2 ${gameStates.scratchPlayed ? 'border-emerald-400 bg-emerald-50/20' : 'border-wf-border hover:border-wf-dark'} shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between overflow-hidden">
            
            <div class="space-y-4">
              <!-- Top Badge -->
              <div class="flex items-center justify-between">
                <span class="px-3 py-1 rounded-full bg-wf-muted text-wf-dark font-bold text-xs flex items-center gap-1">
                  <i data-lucide="sparkles" class="w-3.5 h-3.5"></i> Canvas Game
                </span>
                ${gameStates.scratchPlayed ? `
                  <span class="px-2.5 py-0.5 rounded-full bg-emerald-100 text-emerald-800 font-bold text-xs flex items-center gap-1">
                    <i data-lucide="check" class="w-3 h-3"></i> Claimed
                  </span>
                ` : `
                  <span class="px-2.5 py-0.5 rounded-full bg-wf-muted border border-wf-border text-wf-dark font-bold text-xs">
                    Foil Scratch
                  </span>
                `}
              </div>

              <!-- Game Graphic Preview -->
              <div class="py-4 flex justify-center">
                <div class="w-28 h-28 sm:w-32 sm:h-32 rounded-2xl bg-wf-dark p-2 shadow-md group-hover:scale-105 transition-transform flex items-center justify-center relative rotate-3">
                  <div class="w-full h-full rounded-xl bg-white border border-wf-border flex flex-col items-center justify-center text-wf-dark p-2 text-center">
                    <i data-lucide="gift" class="w-8 h-8 text-wf-dark mb-1 animate-bounce-gentle"></i>
                    <span class="text-[10px] font-bold uppercase tracking-wider">Scratch & Reveal</span>
                  </div>
                </div>
              </div>

              <!-- Title & Desc -->
              <div class="text-center space-y-1">
                <h3 class="font-outfit font-extrabold text-xl text-wf-dark">Scratch Card</h3>
                <p class="text-xs text-wf-subtext">Use your finger or cursor to scratch off the festive golden layer!</p>
              </div>
            </div>

            <!-- CTA Button -->
            <button 
              id="btn-play-scratch"
              class="mt-6 w-full py-3 px-4 rounded-xl ${gameStates.scratchPlayed ? 'bg-wf-muted text-wf-subtext cursor-default' : 'bg-wf-dark hover:bg-wf-darkHover text-white active:scale-98'} font-bold text-sm flex items-center justify-center gap-2 transition-all shadow-xs"
            >
              <i data-lucide="sparkles" class="w-4 h-4"></i>
              <span>${gameStates.scratchPlayed ? 'Scratch Again' : 'Scratch & Win'}</span>
            </button>

          </div>

          <!-- Game 3: Shuffle Card -->
          <div class="group relative rounded-3xl bg-white p-6 sm:p-7 border-2 ${gameStates.shufflePlayed ? 'border-emerald-400 bg-emerald-50/20' : 'border-wf-border hover:border-wf-dark'} shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between overflow-hidden">
            
            <div class="space-y-4">
              <!-- Top Badge -->
              <div class="flex items-center justify-between">
                <span class="px-3 py-1 rounded-full bg-wf-muted text-wf-dark font-bold text-xs flex items-center gap-1">
                  <i data-lucide="layers" class="w-3.5 h-3.5"></i> Card Pick
                </span>
                ${gameStates.shufflePlayed ? `
                  <span class="px-2.5 py-0.5 rounded-full bg-emerald-100 text-emerald-800 font-bold text-xs flex items-center gap-1">
                    <i data-lucide="check" class="w-3 h-3"></i> Claimed
                  </span>
                ` : `
                  <span class="px-2.5 py-0.5 rounded-full bg-wf-muted border border-wf-border text-wf-dark font-bold text-xs">
                    3-Card Monte
                  </span>
                `}
              </div>

              <!-- Game Graphic Preview -->
              <div class="py-4 flex justify-center items-center space-x-[-15px]">
                <div class="w-16 h-24 rounded-xl bg-wf-muted border-2 border-wf-border shadow-xs -rotate-12 flex items-center justify-center text-wf-dark">
                  <i data-lucide="sparkles" class="w-6 h-6"></i>
                </div>
                <div class="w-18 h-26 rounded-xl bg-wf-dark border-2 border-white shadow-md z-10 flex items-center justify-center text-white">
                  <i data-lucide="trophy" class="w-8 h-8"></i>
                </div>
                <div class="w-16 h-24 rounded-xl bg-wf-muted border-2 border-wf-border shadow-xs rotate-12 flex items-center justify-center text-wf-dark">
                  <i data-lucide="gift" class="w-6 h-6"></i>
                </div>
              </div>

              <!-- Title & Desc -->
              <div class="text-center space-y-1">
                <h3 class="font-outfit font-extrabold text-xl text-wf-dark">Shuffle Card</h3>
                <p class="text-xs text-wf-subtext">Follow the festive cards shuffle and pick your lucky golden card!</p>
              </div>
            </div>

            <!-- CTA Button -->
            <button 
              id="btn-play-shuffle"
              class="mt-6 w-full py-3 px-4 rounded-xl ${gameStates.shufflePlayed ? 'bg-wf-muted text-wf-subtext cursor-default' : 'bg-wf-dark hover:bg-wf-darkHover text-white active:scale-98'} font-bold text-sm flex items-center justify-center gap-2 transition-all shadow-xs"
            >
              <i data-lucide="shuffle" class="w-4 h-4 text-white"></i>
              <span>${gameStates.shufflePlayed ? 'Pick Again' : 'Shuffle & Pick Card'}</span>
            </button>

          </div>

        </div>

      </div>
    </section>
  `;
}

export function bindPlayAndWinEvents() {
  const btnSpin = document.getElementById('btn-play-spin');
  if (btnSpin) {
    btnSpin.addEventListener('click', () => {
      store.requireAuth(() => {
        store.openModal('spin');
      });
    });
  }

  const btnScratch = document.getElementById('btn-play-scratch');
  if (btnScratch) {
    btnScratch.addEventListener('click', () => {
      store.requireAuth(() => {
        store.openModal('scratch');
      });
    });
  }

  const btnShuffle = document.getElementById('btn-play-shuffle');
  if (btnShuffle) {
    btnShuffle.addEventListener('click', () => {
      store.requireAuth(() => {
        store.openModal('shuffle');
      });
    });
  }
}
