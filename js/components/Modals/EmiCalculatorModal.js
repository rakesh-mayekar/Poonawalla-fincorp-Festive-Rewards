// EMI Calculator Modal Component - Wireframe Theme
import { store } from '../../state.js';

export function renderEmiCalculatorModal() {
  return `
    <div class="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-xs animate-fade-in">
      <div class="w-full max-w-2xl bg-white rounded-3xl shadow-2xl border-2 border-wf-border overflow-hidden animate-slide-up">
        
        <div class="bg-wf-dark text-white p-5 flex items-center justify-between">
          <div class="flex items-center gap-3">
            <div class="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center text-white">
              <i data-lucide="calculator" class="w-6 h-6"></i>
            </div>
            <div>
              <h3 class="font-outfit font-bold text-lg text-white">Advanced EMI Calculator</h3>
              <p class="text-xs text-zinc-300">Plan your loan repayment with precision</p>
            </div>
          </div>
          <button id="btn-close-emi-modal" class="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center">
            <i data-lucide="x" class="w-5 h-5"></i>
          </button>
        </div>

        <div class="p-6 space-y-6 text-left">
          
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
            
            <div class="space-y-4">
              
              <div class="space-y-1">
                <div class="flex justify-between text-xs">
                  <span class="font-bold text-wf-dark">Loan Amount</span>
                  <span id="modal-emi-amt-val" class="font-bold text-wf-dark">₹ 7,50,000</span>
                </div>
                <input type="range" id="modal-emi-amt" min="50000" max="5000000" step="50000" value="750000" class="w-full" />
              </div>

              <div class="space-y-1">
                <div class="flex justify-between text-xs">
                  <span class="font-bold text-wf-dark">Interest Rate (% p.a.)</span>
                  <span id="modal-emi-rate-val" class="font-bold text-wf-dark">10.5%</span>
                </div>
                <input type="range" id="modal-emi-rate" min="8.5" max="18.0" step="0.25" value="10.5" class="w-full" />
              </div>

              <div class="space-y-1">
                <div class="flex justify-between text-xs">
                  <span class="font-bold text-wf-dark">Tenure (Months)</span>
                  <span id="modal-emi-tenure-val" class="font-bold text-wf-dark">48 Months</span>
                </div>
                <input type="range" id="modal-emi-tenure" min="12" max="60" step="6" value="48" class="w-full" />
              </div>

            </div>

            <!-- Calculated Summary Card -->
            <div class="rounded-2xl bg-wf-dark text-white p-6 space-y-4 shadow-md border border-wf-border">
              
              <div class="border-b border-zinc-700 pb-3">
                <div class="text-[10px] text-zinc-300 font-bold uppercase tracking-wider">Monthly EMI Payable</div>
                <div id="modal-emi-result" class="font-outfit font-black text-3xl text-white mt-1">₹ 19,208 / mo</div>
              </div>

              <div class="space-y-2 text-xs text-zinc-300">
                <div class="flex justify-between">
                  <span>Principal Amount:</span>
                  <span id="modal-emi-principal-display" class="font-mono text-white">₹ 7,50,000</span>
                </div>
                <div class="flex justify-between">
                  <span>Total Interest Payable:</span>
                  <span id="modal-emi-interest-display" class="font-mono text-zinc-300">₹ 1,71,984</span>
                </div>
                <div class="flex justify-between border-t border-zinc-700 pt-2 font-bold text-white">
                  <span>Total Amount Payable:</span>
                  <span id="modal-emi-total-display" class="font-mono text-white">₹ 9,21,984</span>
                </div>
              </div>

              <button 
                id="btn-modal-emi-apply"
                class="w-full py-3 px-4 rounded-xl bg-white text-wf-dark hover:bg-wf-muted font-extrabold text-sm shadow-xs active:scale-95 transition-all"
              >
                Apply for Loan
              </button>

            </div>

          </div>

        </div>

      </div>
    </div>
  `;
}

export function bindEmiCalculatorEvents() {
  const btnClose = document.getElementById('btn-close-emi-modal');
  if (btnClose) btnClose.addEventListener('click', () => store.closeModal());

  const amtSlider = document.getElementById('modal-emi-amt');
  const rateSlider = document.getElementById('modal-emi-rate');
  const tenureSlider = document.getElementById('modal-emi-tenure');

  const amtVal = document.getElementById('modal-emi-amt-val');
  const rateVal = document.getElementById('modal-emi-rate-val');
  const tenureVal = document.getElementById('modal-emi-tenure-val');

  const resultVal = document.getElementById('modal-emi-result');
  const principalVal = document.getElementById('modal-emi-principal-display');
  const interestVal = document.getElementById('modal-emi-interest-display');
  const totalVal = document.getElementById('modal-emi-total-display');

  function calculateModalEmi() {
    if (!amtSlider || !rateSlider || !tenureSlider) return;
    const P = parseFloat(amtSlider.value);
    const annualR = parseFloat(rateSlider.value);
    const N = parseInt(tenureSlider.value, 10);

    const monthlyR = annualR / 12 / 100;
    const emi = Math.round((P * monthlyR * Math.pow(1 + monthlyR, N)) / (Math.pow(1 + monthlyR, N) - 1));
    const totalPayment = emi * N;
    const totalInterest = totalPayment - P;

    if (amtVal) amtVal.textContent = `₹ ${P.toLocaleString('en-IN')}`;
    if (rateVal) rateVal.textContent = `${annualR}%`;
    if (tenureVal) tenureVal.textContent = `${N} Months`;

    if (resultVal) resultVal.textContent = `₹ ${emi.toLocaleString('en-IN')} / mo`;
    if (principalVal) principalVal.textContent = `₹ ${P.toLocaleString('en-IN')}`;
    if (interestVal) interestVal.textContent = `₹ ${totalInterest.toLocaleString('en-IN')}`;
    if (totalVal) totalVal.textContent = `₹ ${totalPayment.toLocaleString('en-IN')}`;
  }

  [amtSlider, rateSlider, tenureSlider].forEach(slider => {
    if (slider) slider.addEventListener('input', calculateModalEmi);
  });

  const btnApply = document.getElementById('btn-modal-emi-apply');
  if (btnApply) {
    btnApply.addEventListener('click', () => {
      store.requireAuth(() => {
        store.openModal('loan-apply', {
          loanType: 'Personal Loan',
          amount: amtSlider ? parseInt(amtSlider.value) : 750000,
          tenure: tenureSlider ? parseInt(tenureSlider.value) : 48
        });
      });
    });
  }
}
