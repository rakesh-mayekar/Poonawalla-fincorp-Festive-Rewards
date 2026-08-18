// Popular Services Component - Minimalist UI Protocol Edition
import { mockData } from '../mockData.js';

export function renderPopularServices() {
  const services = mockData.popularServices;

  return `
    <section id="services" class="py-16 sm:py-24 bg-wf-bg border-b border-wf-border">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        <div class="text-center max-w-3xl mx-auto space-y-3">
          <div class="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-wf-pastelGreen text-wf-pastelGreenText text-xs font-mono font-bold uppercase tracking-wider border border-emerald-200">
            <i data-lucide="building-2" class="w-3.5 h-3.5"></i>
            <span>Poonawalla Fincorp Portfolio</span>
          </div>

          <h2 class="font-serif text-3xl sm:text-4xl md:text-5xl font-semibold text-wf-dark tracking-tight">
            Our Popular <span class="text-wf-subtext italic font-normal">Services</span>
          </h2>

          <p class="text-wf-subtext text-xs sm:text-sm font-normal">
            Explore transparent financial solutions engineered for your business and personal goals.
          </p>
        </div>

        <!-- Services Grid -->
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          ${services.map(serv => `
            <div class="rounded-xl bg-white border border-wf-border p-6 shadow-xs hover:border-wf-dark transition-all duration-300 flex flex-col justify-between group">
              
              <div class="space-y-4 text-left">
                <div class="flex items-start justify-between gap-3">
                  <div class="w-10 h-10 rounded-lg bg-wf-muted text-wf-dark border border-wf-border flex items-center justify-center group-hover:bg-wf-dark group-hover:text-white transition-colors">
                    <i data-lucide="${serv.icon}" class="w-5 h-5"></i>
                  </div>
                  <span class="px-2.5 py-1 rounded bg-wf-pastelGreen text-wf-pastelGreenText font-mono font-bold text-xs border border-emerald-200">
                    ${serv.badge}
                  </span>
                </div>

                <div class="space-y-1">
                  <h3 class="font-sans font-bold text-xl text-wf-dark group-hover:text-wf-subtext transition-colors">
                    ${serv.title}
                  </h3>
                  <div class="flex items-center gap-2 text-xs font-mono font-semibold text-wf-dark">
                    <span>${serv.rate}</span>
                    <span class="text-wf-subtext">•</span>
                    <span class="text-wf-pastelGreenText font-bold">${serv.maxAmount}</span>
                  </div>
                </div>

                <p class="text-xs text-wf-subtext leading-relaxed">
                  ${serv.desc}
                </p>
              </div>

              <!-- CTA Button -->
              <a 
                href="#service-detail/${serv.id}"
                class="mt-6 w-full py-3 px-4 rounded-lg bg-wf-dark hover:bg-wf-darkHover text-white font-semibold text-xs flex items-center justify-center gap-2 transition-all active:scale-95"
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
