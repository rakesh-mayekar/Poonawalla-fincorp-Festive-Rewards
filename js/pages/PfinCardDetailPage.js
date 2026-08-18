// PFIN Card Inner Detail Page Component
import { store } from '../state.js';

export function renderPfinCardDetailPage() {
  const userMobile = store.getState().userSession.mobileNumber || '';

  return `
    <div class="py-12 sm:py-16 bg-wf-bg min-h-screen">
      <div class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        <!-- Breadcrumb & Back button -->
        <div class="flex items-center justify-between">
          <a href="#home" class="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-white border border-wf-border text-wf-dark font-bold text-xs hover:bg-wf-muted transition-colors">
            <i data-lucide="arrow-left" class="w-4 h-4"></i> Back to Home
          </a>
          <span class="text-xs font-mono text-wf-subtext">Page ID: PFIN-CARD-DETAIL</span>
        </div>

        <!-- Main Product Card Header -->
        <div class="rounded-3xl bg-white border-2 border-wf-border p-6 sm:p-10 shadow-md space-y-6">
          
          <div class="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            
            <div class="md:col-span-7 space-y-4">
              <span class="px-3 py-1 rounded-full bg-wf-muted border border-wf-border text-wf-dark font-bold text-xs uppercase tracking-wider">
                Digital Credit Card Product Specification
              </span>

              <h1 class="font-outfit text-3xl sm:text-4xl font-extrabold text-wf-dark">
                Poonawalla Fincorp PFIN Digital Credit Card
              </h1>

              <p class="text-wf-subtext text-sm leading-relaxed">
                The PFIN Digital Credit Card offers instant 60-second virtual card generation, zero joining fees, and 5% festive rewards across leading merchants.
              </p>

              <!-- Two Buttons Required by Client Feedback -->
              <div class="pt-3 flex flex-col sm:flex-row items-center gap-3">
                <button 
                  id="btn-card-detail-view"
                  class="w-full sm:w-auto px-6 py-3 rounded-xl bg-white border-2 border-wf-border text-wf-dark font-bold text-sm hover:bg-wf-muted transition-all flex items-center justify-center gap-2"
                >
                  <i data-lucide="file-text" class="w-4 h-4"></i>
                  <span>View Product Features</span>
                </button>

                <button 
                  id="btn-card-detail-apply-mobile"
                  class="w-full sm:w-auto px-6 py-3 rounded-xl bg-wf-dark hover:bg-wf-darkHover text-white font-extrabold text-sm transition-all flex items-center justify-center gap-2 shadow-xs"
                >
                  <i data-lucide="zap" class="w-4 h-4 text-white"></i>
                  <span>Apply for PFIN Card</span>
                </button>
              </div>

            </div>

            <!-- Card Graphic -->
            <div class="md:col-span-5 flex justify-center">
              <div class="w-72 h-44 sm:w-80 sm:h-48 rounded-2xl bg-wf-dark text-white border-2 border-wf-dark p-5 flex flex-col justify-between shadow-xl">
                <div class="flex justify-between items-start">
                  <span class="font-outfit font-extrabold text-sm tracking-wider">POONAWALLA PFIN</span>
                  <div class="w-8 h-6 rounded bg-zinc-700"></div>
                </div>
                <div class="font-mono text-base tracking-widest text-zinc-300">•••• •••• •••• 8842</div>
                <div class="flex justify-between text-xs text-zinc-400">
                  <span>FESTIVE MEMBER</span>
                  <span>10/30</span>
                </div>
              </div>
            </div>

          </div>

        </div>

        <!-- Inline Lightweight Mobile Prompt (Only Asking for Mobile Number as per Feedback) -->
        <div id="pfin-mobile-only-prompt" class="hidden rounded-3xl bg-white border-2 border-wf-border p-6 shadow-md space-y-4 max-w-xl mx-auto text-left animate-fade-in">
          <div class="flex items-center justify-between">
            <h3 class="font-outfit font-bold text-lg text-wf-dark">Apply for PFIN Card</h3>
            <span class="text-xs font-bold text-emerald-700">Instant Sanction</span>
          </div>

          <p class="text-xs text-wf-subtext">Enter your 10-digit mobile number to proceed. No other details required.</p>

          <form id="pfin-mobile-only-form" class="space-y-4">
            <div class="space-y-1">
              <label class="block text-xs font-bold uppercase text-wf-dark">Mobile Number</label>
              <div class="relative flex items-center">
                <span class="absolute left-3.5 text-xs font-bold text-wf-subtext">+91</span>
                <input 
                  type="tel" 
                  id="pfin-single-mobile-input" 
                  required 
                  maxlength="10" 
                  placeholder="98765 43210"
                  value="${userMobile || '9876543210'}"
                  class="w-full pl-14 pr-4 py-3 rounded-xl border border-wf-border font-mono text-sm font-semibold text-wf-dark outline-none focus:border-wf-dark"
                />
              </div>
            </div>

            <button 
              type="submit"
              class="w-full py-3.5 px-4 rounded-xl bg-wf-dark hover:bg-wf-darkHover text-white font-extrabold text-sm shadow-xs"
            >
              <span>Get Digital Card Now</span>
            </button>
          </form>
        </div>

      </div>
    </div>
  `;
}

export function bindPfinCardDetailPageEvents() {
  const btnView = document.getElementById('btn-card-detail-view');
  if (btnView) {
    btnView.addEventListener('click', () => {
      alert('Displaying PFIN Card product details, reward charts, and lounge access terms.');
    });
  }

  const btnApplyMobile = document.getElementById('btn-card-detail-apply-mobile');
  const promptBox = document.getElementById('pfin-mobile-only-prompt');

  if (btnApplyMobile && promptBox) {
    btnApplyMobile.addEventListener('click', () => {
      promptBox.classList.remove('hidden');
      promptBox.scrollIntoView({ behavior: 'smooth' });
    });
  }

  const form = document.getElementById('pfin-mobile-only-form');
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const mobileVal = document.getElementById('pfin-single-mobile-input')?.value?.trim() || '9876543210';
      store.loginUser(mobileVal);
      store.showToast(`PFIN Card approved for +91 ${mobileVal}!`);
      window.location.hash = '#home';
    });
  }
}
