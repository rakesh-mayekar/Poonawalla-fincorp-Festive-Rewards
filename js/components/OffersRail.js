// Top Offers Component with Functional Category Tab Filtering (as per Reference Screenshot)
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
    <section id="offers" class="py-12 sm:py-16 bg-wf-bg border-b border-wf-border">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        <!-- Header Controls & Functional Category Tabs (input_file_2.png) -->
        <div class="flex flex-col md:flex-row md:items-end justify-between gap-6">
          
          <div class="space-y-2">
            <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-wf-muted border border-wf-border text-wf-dark text-xs font-bold uppercase tracking-wider">
              <i data-lucide="tag" class="w-3.5 h-3.5"></i>
              <span>Curated Partner Savings</span>
            </div>
            <h2 class="font-outfit text-3xl sm:text-4xl font-extrabold text-wf-dark tracking-tight">
              Festive Season <span class="text-wf-subtext">Offers</span>
            </h2>
            <p class="text-wf-subtext text-xs sm:text-sm">
              Exclusive discount vouchers on leading brands for Poonawalla Fincorp customers.
            </p>
          </div>

          <!-- Category Filtering Tabs (Exact Layout from attached screenshot) -->
          <div class="flex items-center gap-2 overflow-x-auto hide-scrollbar pb-1">
            ${categories.map(cat => `
              <button 
                data-offer-tab="${cat}"
                class="btn-offer-tab px-4 py-2 rounded-full font-bold text-xs whitespace-nowrap transition-all ${
                  activeTab === cat 
                    ? 'bg-wf-dark text-white shadow-xs' 
                    : 'bg-white hover:bg-wf-muted text-wf-dark border border-wf-border'
                }"
              >
                ${cat}
              </button>
            `).join('')}
          </div>

        </div>

        <!-- Offers Grid -->
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          
          ${filteredOffers.length > 0 ? filteredOffers.map(offer => `
            <div class="rounded-2xl bg-white border-2 border-wf-border p-5 sm:p-6 shadow-xs hover:shadow-md transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1">
              
              <div class="space-y-4">
                
                <div class="flex items-center justify-between">
                  <div class="flex items-center gap-3">
                    <div class="w-10 h-10 rounded-xl bg-wf-muted text-wf-dark font-black text-sm flex items-center justify-center border border-wf-border">
                      <i data-lucide="${offer.logoIcon}" class="w-5 h-5"></i>
                    </div>
                    <div>
                      <h4 class="font-outfit font-bold text-base text-wf-dark leading-tight">${offer.brand}</h4>
                      <span class="text-[10px] text-wf-subtext font-semibold">${offer.category}</span>
                    </div>
                  </div>

                  <span class="px-2.5 py-1 rounded-md bg-wf-muted text-wf-dark font-bold text-xs border border-wf-border">
                    ${offer.discount}
                  </span>
                </div>

                <div class="space-y-1 text-left">
                  <h3 class="font-outfit font-bold text-lg text-wf-dark group-hover:text-wf-subtext transition-colors leading-snug">
                    ${offer.title}
                  </h3>
                  <p class="text-xs text-wf-subtext line-clamp-2 leading-relaxed">
                    ${offer.shortDesc}
                  </p>
                </div>

              </div>

              <!-- Action Footnote & CTA -->
              <div class="pt-5 border-t border-wf-border flex items-center justify-between gap-3 mt-4">
                <div class="text-[11px] text-wf-subtext flex items-center gap-1">
                  <i data-lucide="clock" class="w-3.5 h-3.5"></i>
                  <span>${offer.expiryDays} Days Left</span>
                </div>

                <a 
                  href="#offer-detail/${offer.id}"
                  class="px-4 py-2 rounded-xl bg-wf-dark hover:bg-wf-darkHover text-white font-bold text-xs flex items-center gap-1.5 shadow-xs active:scale-95 transition-all"
                >
                  <span>Claim Offer</span>
                  <i data-lucide="chevron-right" class="w-4 h-4"></i>
                </a>
              </div>

            </div>
          `).join('') : `
            <div class="col-span-full py-12 text-center bg-white rounded-2xl border border-wf-border p-6 text-wf-subtext text-sm">
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
