// PFIN Card Showcase Component - Wireframe Theme
import { store } from '../state.js';

export function renderPfinCardShowcase() {
  return `
    <section id="pfin-card" class="py-12 sm:py-16 bg-wf-bg border-b border-wf-border">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <!-- PFIN Card Showcase Banner Box -->
        <div class="relative rounded-3xl bg-white text-wf-text p-6 sm:p-8 lg:p-12 shadow-md border-2 border-wf-border overflow-hidden">
          
          <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <!-- Left Side: Card Specs & Bullet Highlights -->
            <div class="lg:col-span-7 space-y-6 text-center lg:text-left">
              
              <div class="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-wf-muted border border-wf-border text-wf-dark text-xs font-semibold uppercase tracking-wider">
                <i data-lucide="credit-card" class="w-3.5 h-3.5"></i>
                <span>Next-Gen Digital Credit Card</span>
              </div>

              <h2 class="font-outfit text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-wf-dark">
                Meet the New <span class="text-wf-subtext">PFIN Card</span>
              </h2>

              <p class="text-wf-subtext text-sm sm:text-base max-w-xl mx-auto lg:mx-0">
                Experience seamless payments, instant digital issuance, and unlimited 5% festive cashback across top retail, dining, and travel brand partners.
              </p>

              <!-- Feature Bullet Points -->
              <div class="space-y-3 pt-2 max-w-lg mx-auto lg:mx-0 text-left">
                <div class="flex items-center gap-3">
                  <div class="w-6 h-6 rounded-full bg-emerald-100 text-emerald-800 flex items-center justify-center flex-shrink-0">
                    <i data-lucide="check" class="w-4 h-4"></i>
                  </div>
                  <span class="font-semibold text-sm text-wf-dark">100% Digital & Instant Sanction in 60 Seconds</span>
                </div>

                <div class="flex items-center gap-3">
                  <div class="w-6 h-6 rounded-full bg-emerald-100 text-emerald-800 flex items-center justify-center flex-shrink-0">
                    <i data-lucide="check" class="w-4 h-4"></i>
                  </div>
                  <span class="font-semibold text-sm text-wf-dark">Up to 5% Unlimited Festive Cashback on Brand Spends</span>
                </div>

                <div class="flex items-center gap-3">
                  <div class="w-6 h-6 rounded-full bg-emerald-100 text-emerald-800 flex items-center justify-center flex-shrink-0">
                    <i data-lucide="check" class="w-4 h-4"></i>
                  </div>
                  <span class="font-semibold text-sm text-wf-dark">Zero Joining Fee & Free Airport Lounge Access</span>
                </div>
              </div>

              <!-- CTA Button -->
              <div class="pt-4 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                <button 
                  id="btn-apply-pfin-card"
                  class="w-full sm:w-auto px-7 py-3.5 rounded-xl bg-wf-dark hover:bg-wf-darkHover text-white font-extrabold text-base shadow-xs active:scale-98 transition-all flex items-center justify-center gap-2 group"
                >
                  <i data-lucide="sparkles" class="w-5 h-5 text-white"></i>
                  <span>Apply for PFIN Card</span>
                  <i data-lucide="arrow-right" class="w-4 h-4 group-hover:translate-x-1 transition-transform"></i>
                </button>
                <span class="text-xs text-wf-subtext">No physical documentation required</span>
              </div>

            </div>

            <!-- Right Side: Wireframe 3D Digital Card -->
            <div class="lg:col-span-5 flex justify-center">
              
              <div class="relative w-72 h-44 sm:w-84 sm:h-52 lg:w-96 lg:h-60 rounded-2xl bg-wf-dark text-white border-2 border-wf-dark shadow-2xl p-5 flex flex-col justify-between overflow-hidden animate-float group cursor-pointer">
                
                <!-- Top Row: Card Brand Logo & Chip -->
                <div class="flex justify-between items-start">
                  <div class="flex items-center gap-2">
                    <div class="w-8 h-8 rounded-lg bg-white text-wf-dark font-extrabold text-xs flex items-center justify-center font-outfit">
                      PFIN
                    </div>
                    <span class="font-outfit font-extrabold text-white text-sm tracking-wider">POONAWALLA</span>
                  </div>
                  <!-- EMV Chip -->
                  <div class="w-10 h-8 rounded-md bg-zinc-700 border border-zinc-500 flex items-center justify-center">
                    <div class="w-6 h-5 border border-zinc-400 rounded-xs"></div>
                  </div>
                </div>

                <!-- Card Number preview -->
                <div class="space-y-1 my-2">
                  <div class="font-mono text-sm sm:text-base lg:text-lg text-zinc-300 tracking-widest font-semibold">
                    •••• •••• •••• 8842
                  </div>
                </div>

                <!-- Cardholder Name & Expiry -->
                <div class="flex justify-between items-end border-t border-zinc-700 pt-2">
                  <div>
                    <div class="text-[9px] text-zinc-400 uppercase tracking-wider">Cardholder</div>
                    <div class="font-outfit text-xs sm:text-sm font-bold text-white uppercase tracking-wide">FESTIVE MEMBER</div>
                  </div>
                  <div class="text-right">
                    <div class="text-[9px] text-zinc-400 uppercase tracking-wider">VALID THRU</div>
                    <div class="font-mono text-xs text-zinc-300 font-bold">10/30</div>
                  </div>
                </div>

              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  `;
}

export function bindPfinCardEvents() {
  const btnApply = document.getElementById('btn-apply-pfin-card');
  if (btnApply) {
    btnApply.addEventListener('click', () => {
      store.requireAuth(() => {
        store.openModal('pfin-apply');
      });
    });
  }
}
