// Play and Win Section Component - Minimalist UI Protocol Edition
import { store } from '../state.js';

export function renderPlayAndWinSection() {
  const gameStates = store.getState().gameStates;

  return `
    <section id="play-win" class="py-16 sm:py-24 bg-wf-bg border-b border-wf-border">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        <!-- Header -->
        <div class="text-center max-w-3xl mx-auto space-y-3">
          <div class="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-wf-pastelGreen text-wf-pastelGreenText text-xs font-mono font-bold uppercase tracking-wider border border-emerald-200">
            <i data-lucide="gamepad-2" class="w-3.5 h-3.5"></i>
            <span>Interactive Rewards Hub</span>
          </div>
          
          <h2 class="font-serif text-3xl sm:text-4xl md:text-5xl font-semibold text-wf-dark tracking-tight">
            Festive Engagement <span class="text-wf-subtext italic font-normal">Playground</span>
          </h2>

          <p class="text-wf-subtext text-xs sm:text-sm font-normal leading-relaxed">
            Play interactive mini-games to unlock verified vouchers from top retail & lifestyle brands.
          </p>
        </div>

        <!-- 3 Game Cards Grid (Bento Box Spec) -->
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          <!-- Game 1: Spin & Win Wheel -->
          <div class="rounded-xl bg-white border border-wf-border p-6 shadow-xs flex flex-col justify-between group hover:border-wf-dark transition-all duration-300">
            <div class="space-y-4">
              <div class="flex items-center justify-between">
                <div class="w-10 h-10 rounded-lg bg-wf-muted border border-wf-border text-wf-dark flex items-center justify-center font-mono font-bold text-sm">
                  01
                </div>
                <span class="px-2.5 py-1 rounded-full bg-wf-pastelBlue text-wf-pastelBlueText font-mono font-bold text-[10px] uppercase tracking-wider border border-sky-200">
                  Wheel Game
                </span>
              </div>

              <div class="space-y-1">
                <h3 class="font-sans font-bold text-xl text-wf-dark">Spin & Win Wheel</h3>
                <p class="text-xs text-wf-subtext leading-relaxed">
                  Spin the fortune wheel to win up to 50% discount vouchers on top brand electronics & shopping.
                </p>
              </div>
            </div>

            <div class="pt-6 mt-6 border-t border-wf-border">
              <a 
                href="#game-spin"
                class="w-full py-3 px-4 rounded-lg bg-wf-dark hover:bg-wf-darkHover text-white font-semibold text-xs flex items-center justify-center gap-2 transition-all active:scale-98"
              >
                <i data-lucide="disc" class="w-4 h-4"></i>
                <span>${gameStates.spinPlayed ? 'Play Again' : 'Spin the Wheel'}</span>
              </a>
            </div>
          </div>

          <!-- Game 2: Golden Scratch Card -->
          <div class="rounded-xl bg-white border border-wf-border p-6 shadow-xs flex flex-col justify-between group hover:border-wf-dark transition-all duration-300">
            <div class="space-y-4">
              <div class="flex items-center justify-between">
                <div class="w-10 h-10 rounded-lg bg-wf-muted border border-wf-border text-wf-dark flex items-center justify-center font-mono font-bold text-sm">
                  02
                </div>
                <span class="px-2.5 py-1 rounded-full bg-wf-pastelYellow text-wf-pastelYellowText font-mono font-bold text-[10px] uppercase tracking-wider border border-amber-200">
                  Scratch Foil
                </span>
              </div>

              <div class="space-y-1">
                <h3 class="font-sans font-bold text-xl text-wf-dark">Golden Scratch Card</h3>
                <p class="text-xs text-wf-subtext leading-relaxed">
                  Scratch the metallic foil layer to instantly reveal surprise cashback & travel flight codes.
                </p>
              </div>
            </div>

            <div class="pt-6 mt-6 border-t border-wf-border">
              <a 
                href="#game-scratch"
                class="w-full py-3 px-4 rounded-lg bg-wf-dark hover:bg-wf-darkHover text-white font-semibold text-xs flex items-center justify-center gap-2 transition-all active:scale-98"
              >
                <i data-lucide="sparkles" class="w-4 h-4"></i>
                <span>${gameStates.scratchPlayed ? 'Play Again' : 'Scratch & Win'}</span>
              </a>
            </div>
          </div>

          <!-- Game 3: 3-Card Shuffle Pick -->
          <div class="rounded-xl bg-white border border-wf-border p-6 shadow-xs flex flex-col justify-between group hover:border-wf-dark transition-all duration-300">
            <div class="space-y-4">
              <div class="flex items-center justify-between">
                <div class="w-10 h-10 rounded-lg bg-wf-muted border border-wf-border text-wf-dark flex items-center justify-center font-mono font-bold text-sm">
                  03
                </div>
                <span class="px-2.5 py-1 rounded-full bg-wf-pastelGreen text-wf-pastelGreenText font-mono font-bold text-[10px] uppercase tracking-wider border border-emerald-200">
                  Card Shuffle
                </span>
              </div>

              <div class="space-y-1">
                <h3 class="font-sans font-bold text-xl text-wf-dark">3-Card Shuffle Pick</h3>
                <p class="text-xs text-wf-subtext leading-relaxed">
                  Follow the card shuffle sequence and pick your lucky card to claim guaranteed gift hampers.
                </p>
              </div>
            </div>

            <div class="pt-6 mt-6 border-t border-wf-border">
              <a 
                href="#game-shuffle"
                class="w-full py-3 px-4 rounded-lg bg-wf-dark hover:bg-wf-darkHover text-white font-semibold text-xs flex items-center justify-center gap-2 transition-all active:scale-98"
              >
                <i data-lucide="layers" class="w-4 h-4"></i>
                <span>${gameStates.shufflePlayed ? 'Play Again' : 'Shuffle & Pick'}</span>
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  `;
}

export function bindPlayAndWinEvents() {
  // Navigation handled via router links #game-spin, #game-scratch, #game-shuffle
}
