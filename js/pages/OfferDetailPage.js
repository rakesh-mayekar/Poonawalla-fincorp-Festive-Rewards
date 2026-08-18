// Offer Inner Detail Page Component
import { store } from '../state.js';
import { mockData } from '../mockData.js';

export function renderOfferDetailPage() {
  const offerId = store.getState().routeParam || 'offer-1';
  const offer = mockData.topOffers.find(o => o.id === offerId) || mockData.topOffers[0];

  return `
    <div class="py-12 sm:py-16 bg-wf-bg min-h-screen">
      <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        <div class="flex items-center justify-between">
          <a href="#home" class="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-white border border-wf-border text-wf-dark font-bold text-xs hover:bg-wf-muted transition-colors">
            <i data-lucide="arrow-left" class="w-4 h-4"></i> Back to Home
          </a>
          <span class="text-xs font-mono text-wf-subtext">Offer ID: ${offer.id}</span>
        </div>

        <div class="rounded-3xl bg-white border-2 border-wf-border p-6 sm:p-10 shadow-md space-y-6 text-left">
          
          <div class="flex items-center justify-between border-b border-wf-border pb-4">
            <div>
              <span class="text-xs font-bold text-wf-subtext uppercase tracking-wider">${offer.category} Partner Offer</span>
              <h1 class="font-outfit text-3xl font-extrabold text-wf-dark mt-1">${offer.brand} - ${offer.discount}</h1>
            </div>
            <span class="px-3 py-1 rounded-md bg-wf-dark text-white font-mono text-xs font-bold">
              ${offer.couponCode}
            </span>
          </div>

          <div class="space-y-3">
            <h3 class="font-outfit font-bold text-lg text-wf-dark">${offer.title}</h3>
            <p class="text-xs sm:text-sm text-wf-subtext leading-relaxed">${offer.shortDesc}</p>
          </div>

          <div class="p-4 rounded-2xl bg-wf-muted border border-wf-border space-y-2">
            <h4 class="font-outfit font-bold text-xs text-wf-dark uppercase">Redemption Instructions:</h4>
            <ol class="list-decimal list-inside text-xs text-wf-subtext space-y-1">
              ${offer.redemptionSteps.map(step => `<li>${step}</li>`).join('')}
            </ol>
          </div>

          <div class="pt-2">
            <button 
              id="btn-inner-claim-offer"
              class="w-full py-3.5 px-4 rounded-xl bg-wf-dark hover:bg-wf-darkHover text-white font-extrabold text-sm shadow-xs active:scale-98 transition-all flex items-center justify-center gap-2"
            >
              <i data-lucide="gift" class="w-4 h-4 text-white"></i>
              <span>Claim Voucher to Wallet</span>
            </button>
          </div>

        </div>

      </div>
    </div>
  `;
}

export function bindOfferDetailPageEvents() {
  const btn = document.getElementById('btn-inner-claim-offer');
  if (btn) {
    btn.addEventListener('click', () => {
      const offerId = store.getState().routeParam || 'offer-1';
      const offer = mockData.topOffers.find(o => o.id === offerId) || mockData.topOffers[0];
      
      store.requireAuth(() => {
        store.claimReward(offer);
      });
    });
  }
}
