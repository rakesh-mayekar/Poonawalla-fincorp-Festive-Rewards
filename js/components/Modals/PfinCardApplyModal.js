// Instant PFIN Credit Card Application Modal Component - Wireframe Theme
import { store } from '../../state.js';

export function renderPfinCardApplyModal() {
  const userMobile = store.getState().userSession.mobileNumber || '9876543210';

  return `
    <div class="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-xs animate-fade-in">
      <div class="w-full max-w-lg bg-white rounded-3xl shadow-2xl border-2 border-wf-border overflow-hidden animate-slide-up">
        
        <div class="bg-wf-dark text-white p-5 flex items-center justify-between">
          <div class="flex items-center gap-3">
            <div class="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center text-white">
              <i data-lucide="credit-card" class="w-6 h-6"></i>
            </div>
            <div>
              <h3 class="font-outfit font-bold text-lg text-white">Instant PFIN Card Sanction</h3>
              <p class="text-xs text-zinc-300">100% Digital • Zero Joining Fee</p>
            </div>
          </div>
          <button id="btn-close-pfin-modal" class="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center">
            <i data-lucide="x" class="w-5 h-5"></i>
          </button>
        </div>

        <form id="pfin-card-form" class="p-6 space-y-4 text-left">
          
          <div class="p-3.5 rounded-xl bg-wf-muted border border-wf-border text-wf-dark text-xs flex items-center gap-2">
            <i data-lucide="sparkles" class="w-4 h-4 text-wf-dark flex-shrink-0"></i>
            <span>Festive Special: Get ₹1,000 instant cashback on your first digital card spend!</span>
          </div>

          <div class="space-y-1">
            <label class="block text-xs font-bold uppercase text-wf-dark">Full Name</label>
            <input type="text" required value="Rajesh Kumar" class="w-full p-3 rounded-xl border border-wf-border font-semibold text-sm focus:border-wf-dark outline-none bg-wf-bg" />
          </div>

          <div class="space-y-1">
            <label class="block text-xs font-bold uppercase text-wf-dark">Registered Mobile Number</label>
            <input type="text" readonly value="+91 ${userMobile}" class="w-full p-3 rounded-xl bg-wf-muted border border-wf-border font-mono text-sm font-semibold text-wf-dark outline-none" />
          </div>

          <div class="space-y-1">
            <label class="block text-xs font-bold uppercase text-wf-dark">Preferred Name on Physical Card</label>
            <input type="text" required value="RAJESH KUMAR" class="w-full p-3 rounded-xl border border-wf-border font-mono text-sm uppercase font-bold focus:border-wf-dark outline-none bg-wf-bg" />
          </div>

          <button 
            type="submit"
            class="w-full py-3.5 px-4 rounded-xl bg-wf-dark hover:bg-wf-darkHover text-white font-extrabold text-sm sm:text-base shadow-xs active:scale-98 transition-all flex items-center justify-center gap-2"
          >
            <i data-lucide="zap" class="w-4 h-4 text-white"></i>
            <span>Issue Digital PFIN Card Now</span>
          </button>

        </form>

      </div>
    </div>
  `;
}

export function bindPfinCardApplyEvents() {
  const btnClose = document.getElementById('btn-close-pfin-modal');
  if (btnClose) btnClose.addEventListener('click', () => store.closeModal());

  const form = document.getElementById('pfin-card-form');
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      store.claimReward({
        id: 'pfin-card-' + Date.now(),
        brand: 'PFIN Card',
        title: '🎉 Digital PFIN Card Sanctioned!',
        couponCode: 'PFINCARD8842',
        shortDesc: 'Your virtual card is active with ₹2,00,000 credit limit.',
        expiryDays: 365,
        redemptionSteps: [
          'Log in to Poonawalla Fincorp Mobile App.',
          'View card CVV & manage card controls.',
          'Enjoy 5% festive cashback on top brand purchases!'
        ],
        tnc: 'Zero joining & zero annual fee for year 1.'
      });
    });
  }
}
