// Pre-Approved Loan Section Component - Single Line Horizontal Grid Alignment
import { store } from '../state.js';

export function renderPreApprovedLoan() {
  const userMobile = store.getState().userSession.mobileNumber || '';
  const userName = store.getState().userSession.userName || 'Rajesh Kumar';

  return `
    <section id="preapproved" class="py-12 sm:py-16 bg-wf-bg border-b border-wf-border">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div class="rounded-3xl bg-white border-2 border-wf-border p-6 sm:p-8 shadow-md text-wf-text space-y-6">
          
          <!-- Section Header -->
          <div class="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-wf-border pb-4">
            <div class="space-y-1 text-left">
              <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 border border-emerald-300 text-emerald-900 text-xs font-bold uppercase tracking-wider">
                <i data-lucide="sparkles" class="w-3.5 h-3.5 text-emerald-700"></i>
                <span>Festive Exclusive</span>
              </div>
              <h2 class="font-outfit text-2xl sm:text-3xl font-extrabold text-wf-dark tracking-tight">
                Exclusive Pre-Approved <span class="text-wf-subtext">Loan Offer</span>
              </h2>
            </div>

            <div class="px-4 py-2 rounded-2xl bg-wf-muted border border-wf-border text-center flex-shrink-0">
              <span class="text-[10px] text-wf-subtext font-bold uppercase tracking-wider block">Pre-Approved Amount</span>
              <strong class="font-outfit font-black text-xl sm:text-2xl text-wf-dark">₹ 15,00,000</strong>
            </div>
          </div>

          <!-- Single-Line Form Layout: Full Name - Contact Mobile - Request Callback Button -->
          <form id="preapproved-callback-form" class="space-y-4 pt-1">
            
            <div class="p-3 rounded-xl bg-wf-muted border border-wf-border text-xs text-wf-dark flex items-center gap-2 text-left">
              <i data-lucide="phone-call" class="w-4 h-4 text-wf-dark flex-shrink-0"></i>
              <span>Our 24/7 dedicated loan desk team will call you within 15 minutes of requesting callback!</span>
            </div>

            <!-- Single Row Grid (1 Line for Desktop/Tablet) -->
            <div class="grid grid-cols-1 md:grid-cols-12 gap-3 items-end">
              
              <!-- Field 1: Full Name -->
              <div class="md:col-span-4 space-y-1 text-left">
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

              <!-- Field 2: Contact Mobile Number -->
              <div class="md:col-span-4 space-y-1 text-left">
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

              <!-- Button 3: Request 24/7 Instant Callback -->
              <div class="md:col-span-4">
                <button 
                  type="submit"
                  class="w-full py-3.5 px-4 rounded-xl bg-wf-dark hover:bg-wf-darkHover text-white font-extrabold text-xs sm:text-sm flex items-center justify-center gap-2 shadow-xs active:scale-98 transition-all whitespace-nowrap"
                >
                  <i data-lucide="shield-check" class="w-4 h-4 text-white"></i>
                  <span>Request 24/7 Instant Callback</span>
                </button>
              </div>

            </div>

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
