// Global Session OTP Authentication Modal - Wireframe Theme
import { store } from '../../state.js';

export function renderOtpModal(modalData) {
  return `
    <div class="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-4 bg-slate-950/70 backdrop-blur-xs animate-fade-in">
      
      <div class="w-full sm:max-w-md bg-white rounded-t-3xl sm:rounded-3xl shadow-2xl border-2 border-wf-border overflow-hidden animate-slide-up sm:animate-fade-in">
        
        <!-- Header -->
        <div class="bg-wf-dark text-white p-5 flex items-center justify-between">
          <div class="flex items-center gap-3">
            <div class="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center text-white">
              <i data-lucide="shield-check" class="w-6 h-6"></i>
            </div>
            <div>
              <h3 class="font-outfit font-bold text-lg text-white">One-Time Verification</h3>
              <p class="text-xs text-zinc-300">Poonawalla Fincorp Secure Auth</p>
            </div>
          </div>

          <button 
            id="btn-close-otp" 
            class="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors"
          >
            <i data-lucide="x" class="w-5 h-5"></i>
          </button>
        </div>

        <!-- Form -->
        <div class="p-6 space-y-5">
          
          <div class="p-3.5 rounded-xl bg-wf-muted border border-wf-border text-wf-dark text-xs flex items-start gap-2.5">
            <i data-lucide="sparkles" class="w-4 h-4 text-wf-dark flex-shrink-0 mt-0.5"></i>
            <span>${modalData?.reason || 'Verify your mobile number once to play games, claim vouchers & access pre-approved loan offers.'}</span>
          </div>

          <form id="otp-form" class="space-y-4">
            
            <div class="space-y-1.5 text-left">
              <label class="block text-xs font-bold uppercase tracking-wider text-wf-dark">Mobile Number</label>
              <div class="relative flex items-center">
                <span class="absolute left-3.5 text-sm font-bold text-wf-subtext">+91</span>
                <input 
                  type="tel" 
                  id="otp-mobile-input"
                  maxlength="10"
                  placeholder="98765 43210"
                  pattern="[0-9]{10}"
                  required
                  class="w-full pl-14 pr-4 py-3 rounded-xl border-2 border-wf-border focus:border-wf-dark font-mono text-base font-semibold text-wf-dark outline-none transition-all"
                  value="${store.getState().userSession.mobileNumber || '9876543210'}"
                />
              </div>
            </div>

            <div class="space-y-1.5 text-left">
              <div class="flex justify-between items-center">
                <label class="block text-xs font-bold uppercase tracking-wider text-wf-dark">4-Digit OTP Code</label>
                <span class="text-[11px] text-emerald-700 font-semibold flex items-center gap-1">
                  <i data-lucide="check-circle" class="w-3 h-3"></i> Auto-filled (1234)
                </span>
              </div>

              <div class="grid grid-cols-4 gap-3 text-center">
                <input type="text" maxlength="1" value="1" readonly class="py-3 rounded-xl bg-wf-muted border border-wf-border font-mono text-xl font-black text-center text-wf-dark" />
                <input type="text" maxlength="1" value="2" readonly class="py-3 rounded-xl bg-wf-muted border border-wf-border font-mono text-xl font-black text-center text-wf-dark" />
                <input type="text" maxlength="1" value="3" readonly class="py-3 rounded-xl bg-wf-muted border border-wf-border font-mono text-xl font-black text-center text-wf-dark" />
                <input type="text" maxlength="1" value="4" readonly class="py-3 rounded-xl bg-wf-muted border border-wf-border font-mono text-xl font-black text-center text-wf-dark" />
              </div>
            </div>

            <button 
              type="submit"
              class="w-full py-3.5 px-4 rounded-xl bg-wf-dark hover:bg-wf-darkHover text-white font-extrabold text-sm sm:text-base shadow-xs active:scale-98 transition-all flex items-center justify-center gap-2"
            >
              <span>Verify & Continue</span>
              <i data-lucide="arrow-right" class="w-4 h-4 text-white"></i>
            </button>

          </form>

          <div class="text-center text-[11px] text-wf-subtext">
            By proceeding, you agree to Poonawalla Fincorp's <a href="#" class="underline">Terms & Privacy Policy</a>.
          </div>

        </div>

      </div>
    </div>
  `;
}

export function bindOtpModalEvents() {
  const btnClose = document.getElementById('btn-close-otp');
  if (btnClose) {
    btnClose.addEventListener('click', () => store.closeModal());
  }

  const form = document.getElementById('otp-form');
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const mobileInput = document.getElementById('otp-mobile-input');
      const mobileVal = mobileInput ? mobileInput.value.trim() : '9876543210';

      if (mobileVal.length < 10) {
        alert('Please enter a valid 10-digit mobile number');
        return;
      }

      store.loginUser(mobileVal);
    });
  }
}
