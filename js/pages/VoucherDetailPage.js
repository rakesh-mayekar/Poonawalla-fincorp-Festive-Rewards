// Voucher Inner Detail Page Component
import { store } from '../state.js';
import { mockData } from '../mockData.js';

export function renderVoucherDetailPage() {
  const vouchId = store.getState().routeParam || 'vouch-1';
  const voucher = mockData.excitingVouchers.find(v => v.id === vouchId) || mockData.excitingVouchers[0];

  return `
    <div class="py-12 sm:py-16 bg-wf-bg min-h-screen">
      <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        <div class="flex items-center justify-between">
          <a href="#home" class="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-white border border-wf-border text-wf-dark font-bold text-xs hover:bg-wf-muted transition-colors">
            <i data-lucide="arrow-left" class="w-4 h-4"></i> Back to Home
          </a>
          <span class="text-xs font-mono text-wf-subtext">Voucher ID: ${voucher.id}</span>
        </div>

        <div class="rounded-3xl bg-white border-2 border-wf-border p-6 sm:p-10 shadow-md space-y-6 text-left">
          
          <div class="flex items-center justify-between border-b border-wf-border pb-4">
            <div>
              <span class="text-xs font-bold text-wf-subtext uppercase tracking-wider">${voucher.category} Gift Voucher</span>
              <h1 class="font-outfit text-3xl font-extrabold text-wf-dark mt-1">${voucher.brand} - ${voucher.discount}</h1>
            </div>
            <span class="px-3 py-1 rounded-md bg-wf-dark text-white font-mono text-xs font-bold">
              ${voucher.code}
            </span>
          </div>

          <p class="text-xs sm:text-sm text-wf-subtext leading-relaxed">${voucher.desc}</p>

          <button 
            id="btn-inner-claim-voucher"
            class="w-full py-3.5 px-4 rounded-xl bg-wf-dark hover:bg-wf-darkHover text-white font-extrabold text-sm shadow-xs transition-all flex items-center justify-center gap-2"
          >
            <i data-lucide="gift" class="w-4 h-4 text-white"></i>
            <span>Get Code & Save to Wallet</span>
          </button>

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
