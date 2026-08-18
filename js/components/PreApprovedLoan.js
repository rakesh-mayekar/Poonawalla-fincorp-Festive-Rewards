// Pre-Approved Loan Section Component - 2 Fields (Full Name & Mobile Number Only)
import { store } from '../state.js';

export function renderPreApprovedLoan() {
  const userMobile = store.getState().userSession.mobileNumber || '';
  const userName = store.getState().userSession.userName || 'Rajesh Kumar';

  return `
    <section id="preapproved" class="py-12 sm:py-16 bg-wf-bg border-b border-wf-border">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div class="rounded-3xl bg-white border-2 border-wf-border p-6 sm:p-10 shadow-md text-wf-text space-y-6">
          
          <div class="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-wf-border pb-6">
            <div class="space-y-2">
              <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 border border-emerald-300 text-emerald-900 text-xs font-bold uppercase tracking-wider">
                <i data-lucide="sparkles" class="w-3.5 h-3.5 text-emerald-700"></i>
                <span>Festive Exclusive</span>
              </div>
              <h2 class="font-outfit text-3xl sm:text-4xl font-extrabold text-wf-dark tracking-tight">
                Exclusive Pre-Approved <span class="text-wf-subtext">Loan Offer</span>
              </h2>
              <p class="text-wf-subtext text-xs sm:text-sm">
                Get up to ₹15,00,000 sanctioned instantly with zero processing fees.
              </p>
            </div>

            <div class="px-5 py-3 rounded-2xl bg-wf-muted border border-wf-border text-center">
              <div class="text-[10px] text-wf-subtext font-bold uppercase tracking-wider">Approved Amount</div>
              <div class="font-outfit font-black text-2xl sm:text-3xl text-wf-dark">₹ 15,00,000</div>
            </div>
          </div>

          <!-- 2-Field Callback Request Form (Name & Contact Mobile Only as requested) -->
          <form id="preapproved-callback-form" class="space-y-4 max-w-2xl mx-auto text-left pt-2">
            
            <div class="p-3.5 rounded-xl bg-wf-muted border border-wf-border text-xs text-wf-dark flex items-center gap-2">
              <i data-lucide="phone-call" class="w-4 h-4 text-wf-dark flex-shrink-0"></i>
              <span>Enter your details below and our 24/7 dedicated loan desk team will contact you within 15 minutes!</span>
            </div>

            <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div class="space-y-1">
                <label class="block text-xs font-bold uppercase text-wf-dark">Full Name</label>
                <input 
                  type="text" 
                  id="preapp-name-input" 
                  required 
                  placeholder="e.g. Rajesh Kumar" 
                  value="${userName}" 
                  class="w-full p-3 rounded-xl border border-wf-border font-semibold text-sm focus:border-wf-dark outline-none bg-wf-bg"
                />
              </div>

              <div class="space-y-1">
                <label class="block text-xs font-bold uppercase text-wf-dark">Contact Mobile Number</label>
                <div class="relative flex items-center">
                  <span class="absolute left-3.5 text-xs font-bold text-wf-subtext">+91</span>
                  <input 
                    type="tel" 
                    id="preapp-mobile-input" 
                    required 
                    maxlength="10" 
                    placeholder="98765 43210" 
                    value="${userMobile || '9876543210'}" 
                    class="w-full pl-14 pr-3 p-3 rounded-xl border border-wf-border font-mono text-sm font-semibold text-wf-dark outline-none focus:border-wf-dark bg-wf-bg"
                  />
                </div>
              </div>
            </div>

            <button 
              type="submit"
              class="w-full py-3.5 px-6 rounded-xl bg-wf-dark hover:bg-wf-darkHover text-white font-extrabold text-sm sm:text-base flex items-center justify-center gap-2 shadow-xs active:scale-98 transition-all"
            >
              <i data-lucide="shield-check" class="w-5 h-5 text-white"></i>
              <span>Request 24/7 Instant Callback</span>
            </button>

          </form>

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
