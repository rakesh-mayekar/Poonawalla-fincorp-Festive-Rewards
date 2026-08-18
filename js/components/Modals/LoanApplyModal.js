// 3-Step Loan Application Wizard Modal Component - Wireframe Theme
import { store } from '../../state.js';

export function renderLoanApplyModal(data) {
  const loanType = data?.loanType || 'Personal Loan';
  const amount = data?.amount || 500000;
  const userMobile = store.getState().userSession.mobileNumber || '9876543210';

  return `
    <div class="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-xs animate-fade-in">
      <div class="w-full max-w-xl bg-white rounded-3xl shadow-2xl border-2 border-wf-border overflow-hidden animate-slide-up">
        
        <div class="bg-wf-dark text-white p-5 flex items-center justify-between">
          <div class="flex items-center gap-3">
            <div class="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center text-white">
              <i data-lucide="file-check" class="w-6 h-6"></i>
            </div>
            <div>
              <h3 class="font-outfit font-bold text-lg text-white">Instant Digital Loan Application</h3>
              <p class="text-xs text-zinc-300">${loanType} • ₹ ${amount.toLocaleString('en-IN')}</p>
            </div>
          </div>
          <button id="btn-close-loan-modal" class="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center">
            <i data-lucide="x" class="w-5 h-5"></i>
          </button>
        </div>

        <div class="p-6 space-y-6 text-left">
          
          <div class="grid grid-cols-3 gap-2 text-center pb-4 border-b border-wf-border relative">
            <div class="flex flex-col items-center space-y-1">
              <div id="step-pill-1" class="w-7 h-7 rounded-full bg-wf-dark text-white font-bold text-xs flex items-center justify-center">1</div>
              <span class="text-[10px] font-bold text-wf-dark">1. Personal</span>
            </div>
            <div class="flex flex-col items-center space-y-1">
              <div id="step-pill-2" class="w-7 h-7 rounded-full bg-wf-muted text-wf-subtext font-bold text-xs flex items-center justify-center border border-wf-border">2</div>
              <span class="text-[10px] font-bold text-wf-subtext">2. Limit</span>
            </div>
            <div class="flex flex-col items-center space-y-1">
              <div id="step-pill-3" class="w-7 h-7 rounded-full bg-wf-muted text-wf-subtext font-bold text-xs flex items-center justify-center border border-wf-border">3</div>
              <span class="text-[10px] font-bold text-wf-subtext">3. KYC</span>
            </div>
          </div>

          <!-- Step 1 Form -->
          <form id="loan-step-form-1" class="space-y-4">
            <div class="space-y-1">
              <label class="block text-xs font-bold uppercase text-wf-dark">Full Name (As per PAN)</label>
              <input type="text" required value="Rajesh Kumar" class="w-full p-3 rounded-xl border border-wf-border font-semibold text-sm focus:border-wf-dark outline-none bg-wf-bg" />
            </div>

            <div class="grid grid-cols-2 gap-3">
              <div class="space-y-1">
                <label class="block text-xs font-bold uppercase text-wf-dark">PAN Number</label>
                <input type="text" required value="ABCDE1234F" maxlength="10" class="w-full p-3 rounded-xl border border-wf-border font-mono text-sm uppercase font-bold focus:border-wf-dark outline-none bg-wf-bg" />
              </div>
              <div class="space-y-1">
                <label class="block text-xs font-bold uppercase text-wf-dark">Current Pincode</label>
                <input type="text" required value="400001" maxlength="6" class="w-full p-3 rounded-xl border border-wf-border font-mono text-sm font-semibold focus:border-wf-dark outline-none bg-wf-bg" />
              </div>
            </div>

            <div class="space-y-1">
              <label class="block text-xs font-bold uppercase text-wf-dark">Employment Type</label>
              <select class="w-full p-3 rounded-xl border border-wf-border font-semibold text-sm focus:border-wf-dark outline-none bg-wf-bg">
                <option value="salaried">Salaried Professional</option>
                <option value="self-employed">Self-Employed / Business Owner</option>
                <option value="doctor-ca">Doctor / CA / Professional</option>
              </select>
            </div>

            <button 
              type="submit"
              class="w-full py-3.5 px-4 rounded-xl bg-wf-dark hover:bg-wf-darkHover text-white font-extrabold text-sm flex items-center justify-center gap-2 shadow-xs"
            >
              <span>Proceed to Check Limit</span>
              <i data-lucide="arrow-right" class="w-4 h-4 text-white"></i>
            </button>
          </form>

          <!-- Step 2 Container -->
          <div id="loan-step-container-2" class="hidden space-y-4 text-center">
            <div class="p-6 rounded-2xl bg-wf-muted border-2 border-wf-border space-y-3">
              <div class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 font-bold text-xs">
                <i data-lucide="check-circle" class="w-3.5 h-3.5"></i> Pre-Sanction Approved
              </div>
              <h4 class="font-outfit font-black text-3xl text-wf-dark">
                ₹ ${amount.toLocaleString('en-IN')} Approved!
              </h4>
              <p class="text-xs text-wf-subtext">
                Interest Rate: <strong class="text-wf-dark">10.99% p.a.</strong> • Processing Fee: <strong class="text-emerald-700">₹ 0 (Festive Waiver)</strong>
              </p>
            </div>

            <button 
              id="btn-goto-step-3"
              class="w-full py-3.5 px-4 rounded-xl bg-wf-dark hover:bg-wf-darkHover text-white font-extrabold text-sm flex items-center justify-center gap-2 shadow-xs"
            >
              <span>Proceed to Instant KYC</span>
              <i data-lucide="arrow-right" class="w-4 h-4"></i>
            </button>
          </div>

          <!-- Step 3 Container -->
          <div id="loan-step-container-3" class="hidden space-y-4 text-center">
            <div class="p-6 rounded-2xl bg-wf-dark text-white space-y-3">
              <div class="w-12 h-12 rounded-full bg-white/10 text-white flex items-center justify-center mx-auto">
                <i data-lucide="shield-check" class="w-6 h-6"></i>
              </div>
              <h4 class="font-outfit font-bold text-xl text-white">Digital Aadhaar OKYC Complete</h4>
              <p class="text-xs text-zinc-300">
                Sanction letter generated for mobile number +91 ${userMobile}. Funds will be transferred to your verified bank account within 30 minutes!
              </p>
            </div>

            <button 
              id="btn-finish-loan-app"
              class="w-full py-3.5 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-extrabold text-sm flex items-center justify-center gap-2 shadow-xs"
            >
              <i data-lucide="check" class="w-4 h-4"></i>
              <span>Download Sanction Letter</span>
            </button>
          </div>

        </div>

      </div>
    </div>
  `;
}

export function bindLoanApplyEvents() {
  const btnClose = document.getElementById('btn-close-loan-modal');
  if (btnClose) btnClose.addEventListener('click', () => store.closeModal());

  const form1 = document.getElementById('loan-step-form-1');
  const step2 = document.getElementById('loan-step-container-2');
  const step3 = document.getElementById('loan-step-container-3');

  const pill2 = document.getElementById('step-pill-2');
  const pill3 = document.getElementById('step-pill-3');

  if (form1) {
    form1.addEventListener('submit', (e) => {
      e.preventDefault();
      form1.classList.add('hidden');
      step2.classList.remove('hidden');

      if (pill2) {
        pill2.classList.remove('bg-wf-muted', 'text-wf-subtext');
        pill2.classList.add('bg-wf-dark', 'text-white');
      }
    });
  }

  const btnStep3 = document.getElementById('btn-goto-step-3');
  if (btnStep3) {
    btnStep3.addEventListener('click', () => {
      step2.classList.add('hidden');
      step3.classList.remove('hidden');

      if (pill3) {
        pill3.classList.remove('bg-wf-muted', 'text-wf-subtext');
        pill3.classList.add('bg-wf-dark', 'text-white');
      }
    });
  }

  const btnFinish = document.getElementById('btn-finish-loan-app');
  if (btnFinish) {
    btnFinish.addEventListener('click', () => {
      store.showToast('Loan Sanction Letter downloaded successfully!');
      store.closeModal();
    });
  }
}
