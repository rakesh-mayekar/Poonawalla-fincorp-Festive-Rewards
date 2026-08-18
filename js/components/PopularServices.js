// Popular Services Component - Navigates to Inner Detail Page
import { mockData } from '../mockData.js';

export function renderPopularServices() {
  const services = mockData.popularServices;

  return `
    <section id="services" class="py-12 sm:py-16 bg-wf-bg border-b border-wf-border">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        <div class="text-center max-w-3xl mx-auto space-y-2">
          <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-wf-muted border border-wf-border text-wf-dark text-xs font-bold uppercase tracking-wider">
            <i data-lucide="building-2" class="w-3.5 h-3.5 text-wf-dark"></i>
            <span>Poonawalla Fincorp Portfolio</span>
          </div>
          <h2 class="font-outfit text-3xl sm:text-4xl font-extrabold text-wf-dark tracking-tight">
            Our Popular <span class="text-wf-subtext">Services</span>
          </h2>
          <p class="text-wf-subtext text-xs sm:text-sm">
            Explore transparent financial solutions engineered for your business and personal goals.
          </p>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          ${services.map(serv => `
            <div class="rounded-2xl bg-white border-2 border-wf-border p-6 shadow-xs hover:shadow-md transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1">
              
              <div class="space-y-4">
                <div class="flex items-start justify-between gap-3">
                  <div class="w-12 h-12 rounded-xl bg-wf-muted text-wf-dark border border-wf-border flex items-center justify-center group-hover:bg-wf-dark group-hover:text-white transition-colors">
                    <i data-lucide="${serv.icon}" class="w-6 h-6"></i>
                  </div>
                  <span class="px-2.5 py-1 rounded-full bg-wf-muted text-wf-dark font-bold text-xs border border-wf-border">
                    ${serv.badge}
                  </span>
                </div>

                <div class="space-y-1">
                  <h3 class="font-outfit font-bold text-xl text-wf-dark group-hover:text-wf-subtext transition-colors">
                    ${serv.title}
                  </h3>
                  <div class="flex items-center gap-2 text-xs font-semibold text-wf-dark">
                    <span>${serv.rate}</span>
                    <span class="text-wf-subtext">•</span>
                    <span class="text-emerald-700 font-bold">${serv.maxAmount}</span>
                  </div>
                </div>

                <p class="text-xs text-wf-subtext leading-relaxed">
                  ${serv.desc}
                </p>
              </div>

              <!-- CTA Button (Navigates to Inner Detail Page) -->
              <a 
                href="#service-detail/${serv.id}"
                class="mt-6 w-full py-2.5 px-4 rounded-xl bg-wf-dark hover:bg-wf-darkHover text-white font-bold text-xs flex items-center justify-center gap-2 active:scale-95 transition-all shadow-xs"
              >
                <span>${serv.cta}</span>
                <i data-lucide="arrow-right" class="w-4 h-4 text-white"></i>
              </a>

            </div>
          `).join('')}
        </div>

      </div>
    </section>
  `;
}

export function bindPopularServicesEvents() {
  // Handled by router links #service-detail/:id
}
