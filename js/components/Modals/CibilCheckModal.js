// Free CIBIL Score Simulator Modal - Wireframe Theme
import { store } from '../../state.js';

export function renderCibilCheckModal() {
  return `
    <div class="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-xs animate-fade-in">
      <div class="w-full max-w-lg bg-white rounded-3xl shadow-2xl border-2 border-wf-border overflow-hidden animate-slide-up">
        
        <div class="bg-wf-dark text-white p-5 flex items-center justify-between">
          <div class="flex items-center gap-3">
            <div class="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center text-white">
              <i data-lucide="gauge" class="w-6 h-6"></i>
            </div>
            <div>
              <h3 class="font-outfit font-bold text-lg text-white">Instant CIBIL Score</h3>
              <p class="text-xs text-zinc-300">100% Free • No Impact on Credit Score</p>
            </div>
          </div>
          <button id="btn-close-cibil" class="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center">
            <i data-lucide="x" class="w-5 h-5"></i>
          </button>
        </div>

        <div class="p-6 space-y-6 text-center">
          
          <div class="relative w-48 h-48 mx-auto flex items-center justify-center">
            <svg class="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
              <path d="M 20,50 A 30,30 0 1,1 80,50" fill="none" stroke="#E4E4E7" stroke-width="8" stroke-linecap="round" />
              <path d="M 20,50 A 30,30 0 1,1 78,28" fill="none" stroke="#18181B" stroke-width="8" stroke-linecap="round" />
            </svg>

            <div class="absolute inset-0 flex flex-col items-center justify-center">
              <span class="text-xs font-bold text-wf-subtext uppercase tracking-widest">CIBIL Score</span>
              <span class="font-outfit font-black text-4xl text-wf-dark my-0.5">780</span>
              <span class="px-2.5 py-0.5 rounded-full bg-emerald-100 text-emerald-800 font-bold text-[10px]">
                EXCELLENT
              </span>
            </div>
          </div>

          <div class="p-3.5 rounded-xl bg-wf-muted border border-wf-border text-wf-dark text-xs text-left space-y-1">
            <div class="font-bold flex items-center gap-1.5 text-wf-dark">
              <i data-lucide="check-circle-2" class="w-4 h-4 text-emerald-600"></i>
              <span>High Pre-Approval Eligibility</span>
            </div>
            <p class="text-wf-subtext">
              Your score of 780 qualifies you for lowest personal loan interest rates starting @ 9.99% p.a. and instant approval.
            </p>
          </div>

          <div class="grid grid-cols-2 gap-3 text-left">
            <div class="p-3 rounded-xl bg-wf-muted border border-wf-border">
              <div class="text-[10px] text-wf-subtext font-bold uppercase">Credit Inquiries</div>
              <div class="font-bold text-sm text-wf-dark">Low (1 in 6 mos)</div>
            </div>
            <div class="p-3 rounded-xl bg-wf-muted border border-wf-border">
              <div class="text-[10px] text-wf-subtext font-bold uppercase">Payment History</div>
              <div class="font-bold text-sm text-emerald-700">100% On Time</div>
            </div>
          </div>

          <button 
            id="btn-download-cibil-report"
            class="w-full py-3.5 px-4 rounded-xl bg-wf-dark hover:bg-wf-darkHover text-white font-bold text-sm flex items-center justify-center gap-2 shadow-xs active:scale-98 transition-all"
          >
            <i data-lucide="download" class="w-4 h-4 text-white"></i>
            <span>Download Free Credit Report (PDF)</span>
          </button>

        </div>

      </div>
    </div>
  `;
}

export function bindCibilCheckEvents() {
  const btnClose = document.getElementById('btn-close-cibil');
  if (btnClose) btnClose.addEventListener('click', () => store.closeModal());

  const btnReport = document.getElementById('btn-download-cibil-report');
  if (btnReport) {
    btnReport.addEventListener('click', () => {
      store.showToast('Full CIBIL Credit Report PDF downloaded!');
      store.closeModal();
    });
  }
}
