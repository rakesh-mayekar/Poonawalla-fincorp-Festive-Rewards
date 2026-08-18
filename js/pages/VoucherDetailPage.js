// Voucher Inner Detail Page Component - Enriched Content
import { store } from '../state.js';
import { mockData } from '../mockData.js';

export function renderVoucherDetailPage() {
  const vouchId = store.getState().routeParam || 'vouch-1';
  const voucher = mockData.excitingVouchers.find(v => v.id === vouchId) || mockData.excitingVouchers[0];
  const otherVouchers = mockData.excitingVouchers.filter(v => v.id !== voucher.id);

  return `
    <div class="py-12 sm:py-16 bg-wf-bg min-h-screen">
      <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        <!-- Breadcrumb & Back -->
        <div class="flex items-center justify-between">
          <a href="#home" class="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-white border border-wf-border text-wf-dark font-bold text-xs hover:bg-wf-muted transition-colors">
            <i data-lucide="arrow-left" class="w-4 h-4"></i> Back to Home
          </a>
          <span class="text-xs font-mono text-wf-subtext">Voucher Spec ID: ${voucher.id}</span>
        </div>

        <!-- Main Enriched Voucher Card -->
        <div class="rounded-3xl bg-white border-2 border-wf-border p-6 sm:p-10 shadow-md space-y-8 text-left">
          
          <!-- Top Info Header -->
          <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-wf-border pb-6">
            <div class="space-y-1">
              <span class="text-xs font-bold px-2.5 py-0.5 rounded bg-wf-muted border border-wf-border text-wf-dark uppercase">${voucher.category} Gift Voucher</span>
              <h1 class="font-outfit text-3xl font-extrabold text-wf-dark mt-1">${voucher.brand} - ${voucher.discount}</h1>
              <p class="text-xs text-wf-subtext">Instant digital coupon code issued for Poonawalla Fincorp customers.</p>
            </div>

            <div class="p-4 rounded-2xl bg-wf-muted border border-wf-border text-center flex-shrink-0">
              <div class="text-[10px] text-wf-subtext font-bold uppercase tracking-wider">Promo Coupon Code</div>
              <div class="font-mono text-lg font-black text-wf-dark tracking-widest mt-0.5">${voucher.code}</div>
            </div>
          </div>

          <!-- Key Details Grid -->
          <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div class="p-4 rounded-2xl bg-wf-muted border border-wf-border space-y-1">
              <span class="text-[10px] uppercase font-bold text-wf-subtext">Validity Period</span>
              <div class="font-bold text-sm text-wf-dark flex items-center gap-1.5">
                <i data-lucide="calendar" class="w-4 h-4"></i>
                <span>14 Days from Claim</span>
              </div>
            </div>

            <div class="p-4 rounded-2xl bg-wf-muted border border-wf-border space-y-1">
              <span class="text-[10px] uppercase font-bold text-wf-subtext">Min Order Value</span>
              <div class="font-bold text-sm text-wf-dark flex items-center gap-1.5">
                <i data-lucide="shopping-bag" class="w-4 h-4"></i>
                <span>₹ 499 & Above</span>
              </div>
            </div>

            <div class="p-4 rounded-2xl bg-wf-muted border border-wf-border space-y-1">
              <span class="text-[10px] uppercase font-bold text-wf-subtext">Applicable Channels</span>
              <div class="font-bold text-sm text-wf-dark flex items-center gap-1.5">
                <i data-lucide="globe" class="w-4 h-4"></i>
                <span>Official App & Website</span>
              </div>
            </div>
          </div>

          <!-- Step-by-Step Redemption Guide -->
          <div class="space-y-3 border-t border-wf-border pt-6">
            <h3 class="font-outfit font-bold text-lg text-wf-dark flex items-center gap-2">
              <i data-lucide="list-checks" class="w-5 h-5"></i>
              <span>How to Redeem Your Voucher:</span>
            </h3>
            <ol class="list-decimal list-inside text-xs sm:text-sm text-wf-subtext space-y-2 leading-relaxed">
              <li>Click the <strong>Get Code & Save to Wallet</strong> button below.</li>
              <li>Open the <strong>${voucher.brand}</strong> mobile application or official website.</li>
              <li>Select your products and proceed to the checkout screen.</li>
              <li>Enter promo code <strong class="font-mono text-wf-dark">${voucher.code}</strong> under the "Apply Voucher" box.</li>
              <li>Instant discount of ${voucher.discount} will be applied to your final payment total!</li>
            </ol>
          </div>

          <!-- Terms & Conditions -->
          <div class="p-4 rounded-2xl bg-wf-muted border border-wf-border space-y-2">
            <h4 class="font-outfit font-bold text-xs text-wf-dark uppercase">Voucher Terms & Conditions:</h4>
            <ul class="list-disc list-inside text-xs text-wf-subtext space-y-1">
              <li>Offer valid once per verified Poonawalla Fincorp customer.</li>
              <li>Cannot be combined with any other promotional offer or cashback code.</li>
              <li>Non-transferable and cannot be exchanged for cash.</li>
            </ul>
          </div>

          <!-- CTA Button -->
          <div class="pt-2">
            <button 
              id="btn-inner-claim-voucher"
              class="w-full py-4 px-6 rounded-xl bg-wf-dark hover:bg-wf-darkHover text-white font-extrabold text-base shadow-xs transition-all flex items-center justify-center gap-2"
            >
              <i data-lucide="gift" class="w-5 h-5 text-white"></i>
              <span>Get Code & Save to Wallet</span>
            </button>
          </div>

        </div>

        <!-- Related Vouchers Carousel -->
        <div class="space-y-4 text-left">
          <h3 class="font-outfit font-bold text-xl text-wf-dark">More Exciting Vouchers</h3>
          <div class="grid grid-cols-1 sm:grid-cols-3 gap-4">
            ${otherVouchers.slice(0, 3).map(v => `
              <div class="rounded-2xl bg-white border border-wf-border p-4 space-y-3">
                <div class="flex justify-between text-xs font-bold">
                  <span class="text-wf-dark">${v.brand}</span>
                  <span class="text-emerald-700">${v.discount}</span>
                </div>
                <p class="text-xs text-wf-subtext line-clamp-2">${v.desc}</p>
                <a href="#voucher-detail/${v.id}" class="block text-center py-2 rounded-lg bg-wf-dark text-white font-bold text-xs">
                  View Voucher
                </a>
              </div>
            `).join('')}
          </div>
        </div>

      </div>
    </div>
  `;
}

export function bindVoucherDetailPageEvents() {
  const btn = document.getElementById('btn-inner-claim-voucher');
  if (btn) {
    btn.addEventListener('click', () => {
      const vouchId = store.getState().routeParam || 'vouch-1';
      const item = mockData.excitingVouchers.find(v => v.id === vouchId) || mockData.excitingVouchers[0];
      
      store.requireAuth(() => {
        store.claimReward({
          id: item.id,
          brand: item.brand,
          title: item.discount,
          couponCode: item.code,
          shortDesc: item.desc,
          category: item.category,
          expiryDays: 14,
          redemptionSteps: [
            `Open ${item.brand} app or site.`,
            `Apply promo code ${item.code} at payment screen.`
          ],
          tnc: 'One voucher per verified customer.'
        });
      });
    });
  }
}
