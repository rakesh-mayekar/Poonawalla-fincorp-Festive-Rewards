// Pre-Approved Loan Section Component - Minimalist UI Protocol Edition
import { store } from '../state.js';

export function renderPreApprovedLoan() {
  const userMobile = store.getState().userSession.mobileNumber || '';
  const userName = store.getState().userSession.userName || 'Rajesh Kumar';

  return `
    <section id="preapproved" class="py-16 sm:py-24 bg-wf-bg border-b border-wf-border">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div class="rounded-xl bg-white border border-wf-border p-6 sm:p-10 text-wf-text">
          
          <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            <!-- Left Side: Editorial Serif Headlines & Offer Details -->
            <div class="lg:col-span-7 space-y-4 text-left">
              
              <div class="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-wf-pastelYellow text-wf-pastelYellowText text-xs font-mono font-bold tracking-wider border border-amber-200">
                <i data-lucide="sparkles" class="w-3.5 h-3.5"></i>
                <span>EXCLUSIVE PRE-APPROVED OFFER</span>
              </div>

              <h2 class="font-serif text-3xl sm:text-4xl md:text-5xl font-semibold text-wf-dark tracking-tight leading-tight">
                Pre-approved Loan <span class="text-wf-subtext italic font-normal">Just for You</span>
              </h2>

              <div class="flex items-baseline gap-3 pt-1">
                <span class="font-serif font-bold text-4xl sm:text-5xl lg:text-6xl text-wf-dark tracking-tight">
                  ₹ 15 Lakh
                </span>
                <span class="text-base sm:text-xl font-mono font-bold text-wf-subtext">
                  @ 10.99% <span class="text-xs font-normal">p.a.</span>
                </span>
              </div>

              <p class="text-wf-subtext text-xs sm:text-sm md:text-base font-normal leading-relaxed max-w-xl">
                Congratulations. Based on your credit history, you are pre-approved for instant disbursal with zero physical documentation required.
              </p>

              <div class="pt-2 flex items-center gap-2 text-xs font-mono font-semibold text-wf-pastelGreenText">
                <i data-lucide="shield-check" class="w-4 h-4 text-emerald-600"></i>
                <span>Zero processing fee waiver applied for festive season.</span>
              </div>

            </div>

            <!-- Right Side: Vertical Form Stack -->
            <div class="lg:col-span-5">
              
              <div class="rounded-lg bg-wf-muted border border-wf-border p-6 space-y-4 text-left">
                
                <div>
                  <h3 class="font-sans font-bold text-lg text-wf-dark">Request Instant Callback</h3>
                  <p class="text-xs text-wf-subtext mt-0.5">Our 24/7 dedicated loan desk team will call you within 15 mins.</p>
                </div>

                <form id="preapproved-callback-form" class="space-y-4">
                  
                  <!-- Field 1: Full Name -->
                  <div class="space-y-1">
                    <label class="block text-xs font-mono font-semibold uppercase text-wf-dark">Full Name</label>
                    <input 
                      type="text" 
                      id="preapp-name-input" 
                      required 
                      placeholder="e.g. Rajesh Kumar" 
                      value="${userName}" 
                      class="w-full p-3 rounded-lg border border-wf-border font-semibold text-sm focus:border-wf-dark outline-none bg-white"
                    />
                  </div>

                  <!-- Field 2: Contact Mobile Number -->
                  <div class="space-y-1">
                    <label class="block text-xs font-mono font-semibold uppercase text-wf-dark">Contact Mobile Number</label>
                    <div class="relative flex items-center">
                      <span class="absolute left-3.5 text-xs font-mono font-bold text-wf-subtext">+91</span>
                      <input 
                        type="tel" 
                        id="preapp-mobile-input" 
                        required 
                        maxlength="10" 
                        placeholder="98765 43210" 
                        value="${userMobile || '9876543210'}" 
                        class="w-full pl-14 pr-3 p-3 rounded-lg border border-wf-border font-mono text-sm font-semibold text-wf-dark outline-none focus:border-wf-dark bg-white"
                      />
                    </div>
                  </div>

                  <!-- CTA Button -->
                  <button 
                    type="submit"
                    class="w-full py-3.5 px-4 rounded-lg bg-wf-dark hover:bg-wf-darkHover text-white font-semibold text-xs sm:text-sm flex items-center justify-center gap-2 transition-all active:scale-98"
                  >
                    <i data-lucide="shield-check" class="w-4 h-4 text-white"></i>
                    <span>Request 24/7 Instant Callback</span>
                  </button>

                </form>

              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  `;
}

export function bindPreApprovedEvents() {
  const form = document.getElementById('preapproved-callback-form');
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const nameVal = document.getElementById('preapp-name-input')?.value?.trim() || 'Valued Customer';
      const mobileVal = document.getElementById('preapp-mobile-input')?.value?.trim() || '9876543210';
      
      store.loginUser(mobileVal, nameVal);
      store.showToast(`Request submitted! Our 24/7 team will call +91 ${mobileVal} within 15 mins.`);
    });
  }
}
