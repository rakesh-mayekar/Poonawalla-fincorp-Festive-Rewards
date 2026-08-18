// Do More & Explore Component - Minimalist UI Protocol Edition
import { store } from '../state.js';

export function renderDoMoreExplore() {
  return `
    <section id="explore" class="py-16 sm:py-24 bg-wf-bg">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        <!-- Section Header -->
        <div class="space-y-2 text-center sm:text-left">
          <div class="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-wf-pastelBlue text-wf-pastelBlueText text-xs font-mono font-bold uppercase tracking-wider border border-sky-200">
            <i data-lucide="wrench" class="w-3.5 h-3.5"></i>
            <span>Self-Service Financial Suite</span>
          </div>

          <h2 class="font-serif text-3xl sm:text-4xl md:text-5xl font-semibold text-wf-dark tracking-tight">
            Do More & <span class="text-wf-subtext italic font-normal">Explore</span>
          </h2>

          <p class="text-wf-subtext text-xs sm:text-sm font-normal">
            Convenient self-service utilities on Poonawalla Fincorp official website.
          </p>
        </div>

        <!-- 4 Utility Cards Grid -->
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          
          <!-- Tool 1: Get Doc Online -->
          <div class="rounded-xl bg-white border border-wf-border p-6 shadow-xs hover:border-wf-dark transition-all duration-300 flex flex-col justify-between group">
            <div class="space-y-4 text-left">
              <div class="w-10 h-10 rounded-lg bg-wf-muted text-wf-dark border border-wf-border flex items-center justify-center group-hover:bg-wf-dark group-hover:text-white transition-colors">
                <i data-lucide="file-text" class="w-5 h-5"></i>
              </div>

              <div>
                <h3 class="font-sans font-bold text-lg text-wf-dark group-hover:text-wf-subtext transition-colors">
                  Get Doc Online
                </h3>
                <p class="text-xs text-wf-subtext mt-1 leading-relaxed">
                  Download loan NOC, interest certificates, account statements & welcome kits on official portal.
                </p>
              </div>
            </div>

            <a 
              href="https://www.poonawallafincorp.com/customer-service.php" 
              target="_blank"
              rel="noopener noreferrer"
              class="mt-6 w-full py-2.5 px-4 rounded-lg bg-wf-dark hover:bg-wf-darkHover text-white font-semibold text-xs flex items-center justify-center gap-2 transition-all active:scale-95"
            >
              <span>Download Documents</span>
              <i data-lucide="external-link" class="w-4 h-4"></i>
            </a>
          </div>

          <!-- Tool 2: Refer & Earn -->
          <div class="rounded-xl bg-white border border-wf-border p-6 shadow-xs hover:border-wf-dark transition-all duration-300 flex flex-col justify-between group">
            <div class="space-y-4 text-left">
              <div class="w-10 h-10 rounded-lg bg-wf-muted text-wf-dark border border-wf-border flex items-center justify-center group-hover:bg-wf-dark group-hover:text-white transition-colors">
                <i data-lucide="users" class="w-5 h-5"></i>
              </div>

              <div>
                <h3 class="font-sans font-bold text-lg text-wf-dark group-hover:text-wf-subtext transition-colors">
                  Refer & Earn
                </h3>
                <p class="text-xs text-wf-subtext mt-1 leading-relaxed">
                  Refer friends & family to Poonawalla Fincorp and earn up to ₹2,500 cash reward per successful loan.
                </p>
              </div>
            </div>

            <button 
              id="btn-tool-refer"
              class="mt-6 w-full py-2.5 px-4 rounded-lg bg-wf-dark hover:bg-wf-darkHover text-white font-semibold text-xs flex items-center justify-center gap-2 transition-all active:scale-95"
            >
              <span>Share Referral Link</span>
              <i data-lucide="share-2" class="w-4 h-4"></i>
            </button>
          </div>

          <!-- Tool 3: EMI Calculator -->
          <div class="rounded-xl bg-white border border-wf-border p-6 shadow-xs hover:border-wf-dark transition-all duration-300 flex flex-col justify-between group">
            <div class="space-y-4 text-left">
              <div class="w-10 h-10 rounded-lg bg-wf-muted text-wf-dark border border-wf-border flex items-center justify-center group-hover:bg-wf-dark group-hover:text-white transition-colors">
                <i data-lucide="calculator" class="w-5 h-5"></i>
              </div>

              <div>
                <h3 class="font-sans font-bold text-lg text-wf-dark group-hover:text-wf-subtext transition-colors">
                  EMI Calculator
                </h3>
                <p class="text-xs text-wf-subtext mt-1 leading-relaxed">
                  Calculate monthly EMIs & repayment schedules on Poonawalla Fincorp calculator portal.
                </p>
              </div>
            </div>

            <a 
              href="https://www.poonawallafincorp.com/emi-calculator.php" 
              target="_blank"
              rel="noopener noreferrer"
              class="mt-6 w-full py-2.5 px-4 rounded-lg bg-wf-dark hover:bg-wf-darkHover text-white font-semibold text-xs flex items-center justify-center gap-2 transition-all active:scale-95"
            >
              <span>Open EMI Suite</span>
              <i data-lucide="external-link" class="w-4 h-4"></i>
            </a>
          </div>

          <!-- Tool 4: Check CIBIL -->
          <div class="rounded-xl bg-white border border-wf-border p-6 shadow-xs hover:border-wf-dark transition-all duration-300 flex flex-col justify-between group">
            <div class="space-y-4 text-left">
              <div class="w-10 h-10 rounded-lg bg-wf-muted text-wf-dark border border-wf-border flex items-center justify-center group-hover:bg-wf-dark group-hover:text-white transition-colors">
                <i data-lucide="gauge" class="w-5 h-5"></i>
              </div>

              <div>
                <h3 class="font-sans font-bold text-lg text-wf-dark group-hover:text-wf-subtext transition-colors">
                  Check CIBIL Score
                </h3>
                <p class="text-xs text-wf-subtext mt-1 leading-relaxed">
                  Check your free CIBIL credit score instantly on Poonawalla Fincorp CIBIL portal.
                </p>
              </div>
            </div>

            <a 
              href="https://www.poonawallafincorp.com/cibil-score.php" 
              target="_blank"
              rel="noopener noreferrer"
              class="mt-6 w-full py-2.5 px-4 rounded-lg bg-wf-dark hover:bg-wf-darkHover text-white font-semibold text-xs flex items-center justify-center gap-2 transition-all active:scale-95"
            >
              <span>Check Score Free</span>
              <i data-lucide="external-link" class="w-4 h-4"></i>
            </a>
          </div>

        </div>

      </div>
    </section>
  `;
}

export function bindDoMoreExploreEvents() {
  const btnRefer = document.getElementById('btn-tool-refer');
  if (btnRefer) {
    btnRefer.addEventListener('click', () => {
      store.requireAuth(() => {
        store.openModal('refer-earn');
      });
    });
  }
}
