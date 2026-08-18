// Pre-approved Loan Component - Wireframe Theme
import { store } from '../state.js';

export function renderPreApprovedLoan() {
  return `
    <section id="preapproved" class="py-12 sm:py-16 bg-wf-bg border-b border-wf-border">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <!-- Pre-Approved Loan Main Card Box -->
        <div class="relative rounded-3xl bg-white text-wf-text p-6 sm:p-8 lg:p-12 shadow-md border-2 border-wf-border overflow-hidden">
          
          <div class="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <!-- Left Side: Offer Headlines & Amount -->
            <div class="lg:col-span-7 space-y-4 text-center lg:text-left">
              
              <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-wf-muted border border-wf-border text-wf-dark text-xs font-bold uppercase tracking-wider">
                <i data-lucide="sparkles" class="w-3.5 h-3.5"></i>
                <span>Exclusive Pre-Approved Offer</span>
              </div>

              <h2 class="font-outfit text-2xl sm:text-3xl lg:text-4xl font-extrabold text-wf-dark tracking-tight">
                Pre-approved Loan <span class="text-wf-subtext">Just for You</span>
              </h2>

              <div class="flex flex-wrap items-baseline justify-center lg:justify-start gap-3 pt-1">
                <span class="font-outfit text-4xl sm:text-5xl lg:text-6xl font-black text-wf-dark tracking-tight">
                  ₹ 15 Lakh
                </span>
                <span class="text-xl sm:text-2xl text-wf-subtext font-bold">
                  @ 10.99% <span class="text-xs font-normal">p.a.</span>
                </span>
              </div>

              <p class="text-wf-subtext text-xs sm:text-sm max-w-xl mx-auto lg:mx-0">
                Congratulations! Based on your credit history, you are pre-approved for instant disbursal with zero physical documentation required.
              </p>

            </div>

            <!-- Right Side: 3-Step Process (Wireframe Image Source of Truth) -->
            <div class="lg:col-span-5 space-y-6 bg-wf-muted p-5 sm:p-6 rounded-2xl border border-wf-border">
              
              <div class="text-xs font-bold uppercase tracking-wider text-wf-dark text-center lg:text-left">
                3-Step Instant Approval Flow
              </div>

              <!-- 3 Steps Timeline (1: Personal Details, 2: Know Your Limit, 3: Provide KYC) -->
              <div class="grid grid-cols-3 gap-2 relative">
                
                <!-- Progress Line Behind Steps -->
                <div class="absolute top-4 left-6 right-6 h-0.5 bg-wf-border -z-0"></div>

                <!-- Step 1 -->
                <div class="relative z-10 flex flex-col items-center text-center space-y-1.5">
                  <div class="w-8 h-8 rounded-full bg-wf-dark text-white font-black text-sm flex items-center justify-center shadow-xs">
                    1
                  </div>
                  <div class="text-xs font-bold text-wf-dark">Personal Details</div>
                </div>

                <!-- Step 2 -->
                <div class="relative z-10 flex flex-col items-center text-center space-y-1.5">
                  <div class="w-8 h-8 rounded-full bg-wf-dark text-white font-black text-sm flex items-center justify-center shadow-xs">
                    2
                  </div>
                  <div class="text-xs font-bold text-wf-dark">Know Your Limit</div>
                </div>

                <!-- Step 3 -->
                <div class="relative z-10 flex flex-col items-center text-center space-y-1.5">
                  <div class="w-8 h-8 rounded-full bg-wf-dark text-white font-black text-sm flex items-center justify-center shadow-xs">
                    3
                  </div>
                  <div class="text-xs font-bold text-wf-dark">Provide KYC</div>
                </div>

              </div>

              <!-- Apply Now CTA Button -->
              <button 
                id="btn-preapproved-apply"
                class="w-full py-3.5 px-6 rounded-xl bg-wf-dark hover:bg-wf-darkHover text-white font-extrabold text-base shadow-xs active:scale-98 transition-all flex items-center justify-center gap-2 group"
              >
                <span>Apply Now</span>
                <i data-lucide="arrow-right" class="w-5 h-5 text-white group-hover:translate-x-1 transition-transform"></i>
              </button>

              <div class="text-[11px] text-wf-subtext text-center flex items-center justify-center gap-1.5">
                <i data-lucide="shield-check" class="w-4 h-4 text-emerald-600"></i>
                <span>Instant 2-minute digital loan disbursement</span>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  `;
}

export function bindPreApprovedEvents() {
  const btnApply = document.getElementById('btn-preapproved-apply');
  if (btnApply) {
    btnApply.addEventListener('click', () => {
      store.requireAuth(() => {
        store.openModal('loan-apply', {
          loanType: 'Pre-Approved Festive Loan',
          amount: 1500000,
          tenure: 48,
          isPreapproved: true
        });
      });
    });
  }
}
