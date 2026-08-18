// Refer & Earn Referral Dashboard Modal - Wireframe Theme
import { store } from '../../state.js';

export function renderReferEarnModal() {
  const userMobile = store.getState().userSession.mobileNumber || '9876543210';
  const refCode = `PFINREF${userMobile.slice(-4)}`;
  const refLink = `https://poonawallafincorp.com/festive?ref=${refCode}`;

  return `
    <div class="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-xs animate-fade-in">
      <div class="w-full max-w-lg bg-white rounded-3xl shadow-2xl border-2 border-wf-border overflow-hidden animate-slide-up">
        
        <div class="bg-wf-dark text-white p-5 flex items-center justify-between">
          <div class="flex items-center gap-3">
            <div class="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center text-white">
              <i data-lucide="share-2" class="w-6 h-6"></i>
            </div>
            <div>
              <h3 class="font-outfit font-bold text-lg text-white">Refer & Earn Rewards</h3>
              <p class="text-xs text-zinc-300">Earn up to ₹2,500 per friend</p>
            </div>
          </div>
          <button id="btn-close-refer" class="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center">
            <i data-lucide="x" class="w-5 h-5"></i>
          </button>
        </div>

        <div class="p-6 space-y-5 text-left">
          
          <div class="grid grid-cols-2 gap-3 p-4 rounded-2xl bg-wf-muted border border-wf-border">
            <div>
              <div class="text-[10px] uppercase font-bold text-wf-subtext tracking-wider">Total Earnings</div>
              <div class="font-outfit font-black text-2xl text-wf-dark">₹ 5,000</div>
            </div>
            <div>
              <div class="text-[10px] uppercase font-bold text-wf-subtext tracking-wider">Successful Referrals</div>
              <div class="font-outfit font-black text-2xl text-wf-dark">2 Friends</div>
            </div>
          </div>

          <div class="space-y-1.5">
            <label class="block text-xs font-bold uppercase tracking-wider text-wf-dark">Your Custom Referral Link</label>
            <div class="flex items-center justify-between p-3 rounded-xl bg-wf-dark text-white border border-wf-border">
              <span id="referral-link-text" class="font-mono text-xs text-zinc-300 truncate max-w-[240px]">
                ${refLink}
              </span>
              <button 
                id="btn-copy-ref-link"
                class="px-3 py-1.5 rounded-lg bg-white text-wf-dark font-bold text-xs flex items-center gap-1 active:scale-95 transition-all shadow-xs"
              >
                <i data-lucide="copy" class="w-3.5 h-3.5"></i>
                <span>Copy Link</span>
              </button>
            </div>
          </div>

          <div class="space-y-2">
            <div class="text-xs font-bold uppercase tracking-wider text-wf-dark">How Referral Cash Works:</div>
            <ul class="space-y-1.5 text-xs text-wf-subtext list-disc list-inside">
              <li>Share your unique link via WhatsApp, SMS, or Social Media.</li>
              <li>Friend applies for any loan or PFIN Card via your link.</li>
              <li>Get ₹2,500 direct bank transfer credited upon disbursal!</li>
            </ul>
          </div>

          <button 
            id="btn-share-whatsapp"
            class="w-full py-3.5 px-4 rounded-xl bg-wf-dark hover:bg-wf-darkHover text-white font-bold text-sm flex items-center justify-center gap-2 shadow-xs active:scale-98 transition-all"
          >
            <i data-lucide="send" class="w-4 h-4 text-white"></i>
            <span>Share via WhatsApp</span>
          </button>

        </div>

      </div>
    </div>
  `;
}

export function bindReferEarnEvents() {
  const btnClose = document.getElementById('btn-close-refer');
  if (btnClose) btnClose.addEventListener('click', () => store.closeModal());

  const btnCopy = document.getElementById('btn-copy-ref-link');
  if (btnCopy) {
    btnCopy.addEventListener('click', () => {
      const linkText = document.getElementById('referral-link-text')?.textContent?.trim();
      if (linkText) {
        navigator.clipboard.writeText(linkText);
        store.showToast('Referral link copied to clipboard!');
      }
    });
  }

  const btnWa = document.getElementById('btn-share-whatsapp');
  if (btnWa) {
    btnWa.addEventListener('click', () => {
      const linkText = document.getElementById('referral-link-text')?.textContent?.trim();
      const msg = encodeURIComponent(`Hey! Celebrate this festive season with Poonawalla Fincorp. Apply for instant loans & win guaranteed gift vouchers here: ${linkText}`);
      window.open(`https://api.whatsapp.com/send?text=${msg}`, '_blank');
    });
  }
}
