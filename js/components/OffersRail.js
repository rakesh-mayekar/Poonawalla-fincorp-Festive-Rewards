// Top Offers Component - Minimalist UI Protocol Edition
import { store } from '../state.js';
import { mockData } from '../mockData.js';

export function renderOffersRail() {
  const activeTab = store.getState().activeOfferTab || 'All Offers';
  const allOffers = mockData.topOffers;

  const filteredOffers = activeTab === 'All Offers' 
    ? allOffers 
    : allOffers.filter(o => o.category.toLowerCase() === activeTab.toLowerCase());

  const categories = ['All Offers', 'Shopping', 'Electronics', 'Travel', 'Dining'];

  return `
    <section id="offers" class="py-16 sm:py-24 bg-wf-bg border-b border-wf-border">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        <!-- Header Controls & Functional Category Tabs -->
        <div class="flex flex-col md:flex-row md:items-end justify-between gap-6">
          
          <div class="space-y-2 text-left">
            <div class="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-wf-pastelBlue text-wf-pastelBlueText text-xs font-mono font-bold uppercase tracking-wider border border-sky-200">
              <i data-lucide="tag" class="w-3.5 h-3.5"></i>
              <span>Curated Partner Savings</span>
            </div>
            
            <h2 class="font-serif text-3xl sm:text-4xl md:text-5xl font-semibold text-wf-dark tracking-tight">
              Festive Season <span class="text-wf-subtext italic font-normal">Offers</span>
            </h2>

            <p class="text-wf-subtext text-xs sm:text-sm font-normal">
              Exclusive discount vouchers on leading brands for Poonawalla Fincorp customers.
            </p>
          </div>

          <!-- Category Filtering Tabs (minimalist-ui pills) -->
          <div class="flex items-center gap-2 overflow-x-auto hide-scrollbar pb-1">
            ${categories.map(cat => `
              <button 
                data-offer-tab="${cat}"
                class="btn-offer-tab px-4 py-1.5 rounded-full font-mono text-xs font-semibold whitespace-nowrap transition-all ${
                  activeTab === cat 
                    ? 'bg-wf-dark text-white' 
                    : 'bg-white hover:bg-wf-muted text-wf-dark border border-wf-border'
                }"
              >
                ${cat}
              </button>
            `).join('')}
          </div>

        </div>

        <!-- Offers Grid (Bento Box Spec) -->
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          
          ${filteredOffers.length > 0 ? filteredOffers.map(offer => `
            <div class="rounded-xl bg-white border border-wf-border p-6 shadow-xs hover:border-wf-dark transition-all duration-300 flex flex-col justify-between group">
              
              <div class="space-y-4">
                
                <div class="flex items-center justify-between">
                  <div class="flex items-center gap-3">
                    <div class="w-10 h-10 rounded-lg bg-wf-muted text-wf-dark font-mono font-bold text-xs flex items-center justify-center border border-wf-border">
                      <i data-lucide="${offer.logoIcon}" class="w-5 h-5"></i>
                    </div>
                    <div class="text-left">
                      <h4 class="font-sans font-bold text-base text-wf-dark leading-tight">${offer.brand}</h4>
                      <span class="text-[10px] text-wf-subtext font-mono uppercase tracking-wider">${offer.category}</span>
                    </div>
                  </div>

                  <span class="px-2.5 py-1 rounded bg-wf-pastelYellow text-wf-pastelYellowText font-mono font-bold text-xs border border-amber-200">
                    ${offer.discount}
                  </span>
                </div>

                <div class="space-y-1 text-left">
                  <h3 class="font-sans font-bold text-lg text-wf-dark group-hover:text-wf-subtext transition-colors leading-snug">
                    ${offer.title}
                  </h3>
                  <p class="text-xs text-wf-subtext line-clamp-2 leading-relaxed">
                    ${offer.shortDesc}
                  </p>
                </div>

              </div>

              <!-- Action Footnote & CTA -->
              <div class="pt-5 border-t border-wf-border flex items-center justify-between gap-3 mt-4">
                <div class="text-[11px] font-mono text-wf-subtext flex items-center gap-1">
                  <i data-lucide="clock" class="w-3.5 h-3.5"></i>
                  <span>${offer.expiryDays} Days Left</span>
                </div>

                <a 
                  href="#offer-detail/${offer.id}"
                  class="px-4 py-2 rounded-lg bg-wf-dark hover:bg-wf-darkHover text-white font-semibold text-xs flex items-center gap-1.5 transition-all active:scale-95"
                >
                  <span>Claim Offer</span>
                  <i data-lucide="chevron-right" class="w-4 h-4"></i>
                </a>
              </div>

            </div>
          `).join('') : `
            <div class="col-span-full py-12 text-center bg-white rounded-xl border border-wf-border p-6 text-wf-subtext font-mono text-xs">
              No offers found in category "${activeTab}". Select another tab above.
            </div>
          `}

        </div>

      </div>
    </section>
  `;
}

export function bindOffersEvents() {
  document.querySelectorAll('.btn-offer-tab').forEach(tabBtn => {
    tabBtn.addEventListener('click', (e) => {
      const selectedTab = e.currentTarget.getAttribute('data-offer-tab');
      store.state.activeOfferTab = selectedTab;
      store.notify();
    });
  });
}
