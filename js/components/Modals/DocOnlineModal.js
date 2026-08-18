// Get Doc Online Document Downloader Modal - Wireframe Theme
import { store } from '../../state.js';

export function renderDocOnlineModal() {
  return `
    <div class="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-xs animate-fade-in">
      <div class="w-full max-w-lg bg-white rounded-3xl shadow-2xl border-2 border-wf-border overflow-hidden animate-slide-up">
        
        <div class="bg-wf-dark text-white p-5 flex items-center justify-between">
          <div class="flex items-center gap-3">
            <div class="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center text-white">
              <i data-lucide="file-text" class="w-6 h-6"></i>
            </div>
            <div>
              <h3 class="font-outfit font-bold text-lg text-white">Get Doc Online</h3>
              <p class="text-xs text-zinc-300">Instant Digital Document Downloads</p>
            </div>
          </div>
          <button id="btn-close-doc" class="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center">
            <i data-lucide="x" class="w-5 h-5"></i>
          </button>
        </div>

        <form id="doc-download-form" class="p-6 space-y-4 text-left">
          <div class="space-y-1">
            <label class="block text-xs font-bold uppercase text-wf-dark">Select Document Type</label>
            <select id="doc-type-select" class="w-full p-3 rounded-xl border border-wf-border font-semibold text-sm text-wf-dark focus:border-wf-dark outline-none bg-wf-bg">
              <option value="noc">No Objection Certificate (NOC)</option>
              <option value="statement">Statement of Account (SOA)</option>
              <option value="interest-cert">Provisional Interest Certificate</option>
              <option value="welcome-kit">Loan Welcome Kit & Agreement</option>
            </select>
          </div>

          <div class="space-y-1">
            <label class="block text-xs font-bold uppercase text-wf-dark">Loan Account Number / LAN</label>
            <input 
              type="text" 
              required
              placeholder="e.g. PFIN-PL-2026-98741"
              value="PFIN-PL-2026-98741"
              class="w-full p-3 rounded-xl border border-wf-border font-mono text-sm font-semibold text-wf-dark focus:border-wf-dark outline-none bg-wf-bg"
            />
          </div>

          <div class="p-3.5 rounded-xl bg-wf-muted border border-wf-border text-wf-dark text-xs flex items-center gap-2">
            <i data-lucide="info" class="w-4 h-4 text-wf-dark flex-shrink-0"></i>
            <span>Documents are digitally signed with QR verification stamp as per IT Act 2000.</span>
          </div>

          <button 
            type="submit"
            class="w-full py-3.5 px-4 rounded-xl bg-wf-dark hover:bg-wf-darkHover text-white font-extrabold text-sm flex items-center justify-center gap-2 shadow-xs active:scale-98 transition-all"
          >
            <i data-lucide="download" class="w-4 h-4 text-white"></i>
            <span>Download Digital PDF</span>
          </button>
        </form>

      </div>
    </div>
  `;
}

export function bindDocOnlineEvents() {
  const btnClose = document.getElementById('btn-close-doc');
  if (btnClose) btnClose.addEventListener('click', () => store.closeModal());

  const form = document.getElementById('doc-download-form');
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const docType = document.getElementById('doc-type-select')?.value;
      store.showToast(`Document (${docType.toUpperCase()}) generated and downloaded successfully!`);
      store.closeModal();
    });
  }
}
