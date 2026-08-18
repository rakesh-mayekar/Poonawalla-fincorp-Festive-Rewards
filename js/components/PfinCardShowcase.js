// PFIN Card Showcase Component - Minimalist UI Protocol Edition
import { store } from '../state.js';

export function renderPfinCardShowcase() {
  return `
    <section id="pfin-card" class="py-16 sm:py-24 bg-wf-bg border-b border-wf-border">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div class="rounded-xl bg-wf-dark text-white p-8 sm:p-12 shadow-md relative overflow-hidden">
          
          <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            
            <div class="lg:col-span-7 space-y-5 text-left">
              <div class="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-white/10 text-white font-mono text-xs font-bold uppercase tracking-wider">
                <i data-lucide="credit-card" class="w-3.5 h-3.5"></i>
                <span>Digital Financial Product</span>
              </div>

              <h2 class="font-serif text-3xl sm:text-4xl md:text-5xl font-semibold text-white tracking-tight leading-tight">
                Digital Credit Card <span class="text-zinc-400 italic font-normal">Sanction</span>
              </h2>

              <p class="text-zinc-300 text-xs sm:text-sm md:text-base leading-relaxed max-w-xl">
                Get 100% digital instant virtual card generation with zero joining fee and 5% festive rewards across top brand outlets.
              </p>

              <div class="grid grid-cols-3 gap-3 pt-2 max-w-lg border-t border-zinc-800">
                <div>
                  <div class="font-mono font-bold text-sm text-white">₹ 2,00,000</div>
                  <div class="text-[10px] text-zinc-400 uppercase font-mono">Credit Limit</div>
                </div>
                <div>
                  <div class="font-mono font-bold text-sm text-white">₹ 0</div>
                  <div class="text-[10px] text-zinc-400 uppercase font-mono">Joining Fee</div>
                </div>
                <div>
                  <div class="font-mono font-bold text-sm text-white">5%</div>
                  <div class="text-[10px] text-zinc-400 uppercase font-mono">Festive Cashback</div>
                </div>
              </div>

              <div class="pt-2 flex flex-col sm:flex-row items-center gap-3">
                <a 
                  href="#pfin-card-detail"
                  class="w-full sm:w-auto px-6 py-3 rounded-lg bg-white text-wf-dark font-semibold text-xs sm:text-sm hover:bg-zinc-100 transition-all flex items-center justify-center gap-2"
                >
                  <i data-lucide="file-text" class="w-4 h-4"></i>
                  <span>View Details</span>
                </a>

                <a 
                  href="#pfin-card-detail"
                  class="w-full sm:w-auto px-6 py-3 rounded-lg bg-zinc-800 hover:bg-zinc-700 text-white font-semibold text-xs sm:text-sm transition-all flex items-center justify-center gap-2"
                >
                  <i data-lucide="zap" class="w-4 h-4 text-white"></i>
                  <span>Apply for PFIN Card</span>
                </a>
              </div>
            </div>

            <div class="lg:col-span-5 flex justify-center">
              <div class="w-72 h-44 sm:w-80 sm:h-48 rounded-xl bg-zinc-900 border border-zinc-700 p-6 flex flex-col justify-between shadow-2xl">
                <div class="flex justify-between items-start">
                  <span class="font-mono font-bold text-xs tracking-widest text-zinc-300">POONAWALLA PFIN</span>
                  <div class="w-8 h-6 rounded bg-zinc-800 border border-zinc-700"></div>
                </div>
                <div class="font-mono text-base tracking-widest text-zinc-300">•••• •••• •••• 8842</div>
                <div class="flex justify-between text-[11px] font-mono text-zinc-400">
                  <span>VALUED CUSTOMER</span>
                  <span>10/30</span>
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
  // Handled by router links #pfin-card-detail
}
