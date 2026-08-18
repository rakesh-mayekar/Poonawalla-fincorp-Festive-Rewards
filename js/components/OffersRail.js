// Top Offers For You Component - Navigates to Inner Detail Page
import { store } from '../state.js';
import { mockData } from '../mockData.js';

export function renderOffersRail() {
  const offers = mockData.topOffers;

  return `
    <section id="offers" class="py-12 sm:py-16 bg-wf-bg border-b border-wf-border">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        <!-- Header Controls -->
        <div class="flex flex-col md:flex-row md:items-end justify-between gap-4">
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
        </div>

        <!-- Rail / Grid -->
        <div class="flex md:grid md:grid-cols-3 gap-5 sm:gap-6 overflow-x-auto hide-scrollbar snap-x snap-mandatory py-2 -mx-4 px-4 md:mx-0 md:px-0">
          
          ${offers.map(offer => `
            <div class="snap-start flex-shrink-0 w-72 sm:w-80 md:w-auto rounded-2xl bg-white border border-wf-border p-5 sm:p-6 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1">
              
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

                <div class="space-y-1">
                  <h3 class="font-outfit font-bold text-lg text-wf-dark group-hover:text-wf-subtext transition-colors leading-snug">
                    ${offer.title}
                  </h3>
                  <p class="text-xs text-wf-subtext line-clamp-2 leading-relaxed">
                    ${offer.shortDesc}
                  </p>
                </div>

              </div>

              <!-- Action Footnote & CTA (Navigates to Inner Detail Page) -->
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
          `).join('')}

        </div>

      </div>
    </section>
  `;
}

export function bindOffersEvents() {
  // Handled by router links #offer-detail/:id
}
