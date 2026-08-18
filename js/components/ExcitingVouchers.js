// Exciting Vouchers Component - Navigates to Inner Detail Page
import { mockData } from '../mockData.js';

export function renderExcitingVouchers() {
  const vouchers = mockData.excitingVouchers;

  return `
    <section id="vouchers" class="py-12 sm:py-16 bg-wf-bg border-b border-wf-border">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        <div class="space-y-2 text-center sm:text-left">
          <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-wf-muted border border-wf-border text-wf-dark text-xs font-bold uppercase tracking-wider">
            <i data-lucide="gift" class="w-3.5 h-3.5"></i>
            <span>Instant Gift Coupons</span>
          </div>
          <h2 class="font-outfit text-3xl sm:text-4xl font-extrabold text-wf-dark tracking-tight">
            Exciting <span class="text-wf-subtext">Vouchers</span>
          </h2>
          <p class="text-wf-subtext text-xs sm:text-sm">
            Instant digital vouchers ready for direct redemption at partner apps.
          </p>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          ${vouchers.map(v => `
            <div class="rounded-2xl bg-white border-2 border-wf-border text-wf-text p-5 shadow-xs hover:shadow-md transition-all duration-300 flex flex-col justify-between group">
              
              <div class="space-y-3">
                <div class="flex items-center justify-between">
                  <span class="text-xs font-mono font-bold px-2 py-0.5 rounded bg-wf-muted border border-wf-border text-wf-dark uppercase">${v.category}</span>
                  <span class="text-xs font-extrabold text-wf-dark">${v.brand}</span>
                </div>

                <div>
                  <h4 class="font-outfit text-xl font-black text-wf-dark tracking-tight">${v.discount}</h4>
                  <p class="text-xs text-wf-subtext mt-1 leading-relaxed">${v.desc}</p>
                </div>
              </div>

              <div class="mt-5 pt-4 border-t border-wf-border flex items-center justify-between gap-2">
                <div class="bg-wf-muted px-3 py-1.5 rounded-lg border border-wf-border font-mono text-xs font-bold tracking-widest text-wf-dark">
                  ${v.code}
                </div>

                <a 
                  href="#voucher-detail/${v.id}"
                  class="px-3.5 py-1.5 rounded-lg bg-wf-dark hover:bg-wf-darkHover text-white font-bold text-xs shadow-xs active:scale-95 transition-all"
                >
                  Get Code
                </a>
              </div>

            </div>
          `).join('')}
        </div>

      </div>
    </section>
  `;
}

export function bindExcitingVouchersEvents() {
  // Handled by router links #voucher-detail/:id
}
