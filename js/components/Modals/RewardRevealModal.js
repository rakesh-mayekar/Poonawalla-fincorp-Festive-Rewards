// Celebration Reward Reveal Modal ("YOU WON! 🎉") - Wireframe Theme
import { store } from '../../state.js';
import { triggerConfetti } from '../../utils/confetti.js';

export function renderRewardRevealModal(rewardItem) {
  setTimeout(() => triggerConfetti(), 150);

  const brand = rewardItem?.brand || 'Poonawalla Fincorp';
  const title = rewardItem?.title || 'Festive Reward';
  const code = rewardItem?.couponCode || rewardItem?.code || 'FESTIVE2026';
  const steps = rewardItem?.redemptionSteps || [
    'Open the brand partner app or website.',
    'Add eligible festive items to your cart.',
    `Apply code ${code} at checkout.`
  ];
  const tnc = rewardItem?.tnc || 'Valid for verified session. Expiry applies.';

  return `
    <div class="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-xs animate-fade-in">
      
      <div class="w-full max-w-lg bg-white text-wf-text rounded-3xl shadow-2xl border-2 border-wf-border p-6 sm:p-8 space-y-6 text-center relative overflow-hidden animate-slide-up">
        
        <button 
          id="btn-close-reward"
          class="absolute top-4 right-4 w-8 h-8 rounded-full bg-wf-muted hover:bg-wf-mutedHover text-wf-dark flex items-center justify-center transition-colors"
        >
          <i data-lucide="x" class="w-5 h-5"></i>
        </button>

        <div class="space-y-2 pt-2">
          <div class="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-wf-muted border border-wf-border text-wf-dark font-bold text-xs uppercase tracking-widest">
            <span>✨ Festive Winner ✨</span>
          </div>

          <h2 class="font-outfit text-4xl sm:text-5xl font-black text-wf-dark tracking-tight">
            YOU WON! 🎉
          </h2>
          <p class="text-xs sm:text-sm text-wf-subtext font-medium">
            Congratulations! Your reward has been added to your <strong class="text-wf-dark">My Offers Wallet</strong>.
          </p>
        </div>

        <!-- Reward Card Voucher Box -->
        <div class="rounded-2xl bg-wf-muted border-2 border-wf-border p-5 space-y-4 text-left">
          
          <div class="flex items-center justify-between">
            <div class="flex items-center gap-2.5">
              <div class="w-9 h-9 rounded-lg bg-wf-dark text-white font-outfit font-extrabold text-sm flex items-center justify-center">
                ${brand.slice(0, 2).toUpperCase()}
              </div>
              <div>
                <h4 class="font-outfit font-bold text-base text-wf-dark leading-tight">${brand}</h4>
                <span class="text-[10px] text-wf-subtext">Exclusive Reward</span>
              </div>
            </div>
            <span class="px-2.5 py-1 rounded bg-emerald-100 text-emerald-800 text-xs font-mono font-bold">
              Active
            </span>
          </div>

          <div class="border-t border-wf-border pt-3 space-y-1">
            <h3 class="font-outfit text-xl font-extrabold text-wf-dark">${title}</h3>
            <p class="text-xs text-wf-subtext">${rewardItem?.shortDesc || rewardItem?.desc || ''}</p>
          </div>

          <!-- Coupon Code Display -->
          <div class="pt-2">
            <div class="text-[10px] uppercase font-bold text-wf-subtext tracking-wider mb-1">Your Coupon Code</div>
            <div class="flex items-center justify-between p-3 rounded-xl bg-wf-dark text-white">
              <span id="coupon-code-text" class="font-mono text-xl font-black tracking-widest text-white">
                ${code}
              </span>
              <button 
                id="btn-copy-code"
                class="px-3.5 py-1.5 rounded-lg bg-white text-wf-dark font-bold text-xs flex items-center gap-1.5 active:scale-95 transition-all shadow-xs"
              >
                <i data-lucide="copy" class="w-3.5 h-3.5"></i>
                <span>Copy Code</span>
              </button>
            </div>
          </div>

          <!-- Redemption Steps -->
          <div class="space-y-1.5 pt-2">
            <div class="text-[11px] font-bold text-wf-dark uppercase tracking-wider">How to Redeem:</div>
            <ol class="space-y-1 text-xs text-wf-subtext list-decimal list-inside pl-1">
              ${steps.map(step => `<li>${step}</li>`).join('')}
            </ol>
          </div>

          <div class="text-[10px] text-wf-subtext pt-1 border-t border-wf-border">
            T&C: ${tnc}
          </div>

        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
          <button 
            id="btn-view-wallet"
            class="w-full py-3 px-4 rounded-xl bg-wf-dark hover:bg-wf-darkHover text-white font-extrabold text-sm flex items-center justify-center gap-2 shadow-xs active:scale-95 transition-all"
          >
            <i data-lucide="wallet" class="w-4 h-4 text-white"></i>
            <span>View My Offers</span>
          </button>

          <button 
            id="btn-continue-playing"
            class="w-full py-3 px-4 rounded-xl bg-wf-muted hover:bg-wf-mutedHover border border-wf-border text-wf-dark font-bold text-sm flex items-center justify-center gap-2 active:scale-95 transition-all"
          >
            <span>Play More Games</span>
          </button>
        </div>

      </div>
    </div>
  `;
}

export function bindRewardRevealEvents() {
  const btnClose = document.getElementById('btn-close-reward');
  if (btnClose) {
    btnClose.addEventListener('click', () => store.closeModal());
  }

  const btnCopy = document.getElementById('btn-copy-code');
  if (btnCopy) {
    btnCopy.addEventListener('click', () => {
      const codeText = document.getElementById('coupon-code-text')?.textContent?.trim();
      if (codeText) {
        navigator.clipboard.writeText(codeText);
        store.showToast(`Coupon code ${codeText} copied to clipboard!`);
      }
    });
  }

  const btnWallet = document.getElementById('btn-view-wallet');
  if (btnWallet) {
    btnWallet.addEventListener('click', () => {
      store.openModal('my-offers');
    });
  }

  const btnContinue = document.getElementById('btn-continue-playing');
  if (btnContinue) {
    btnContinue.addEventListener('click', () => {
      store.closeModal();
    });
  }
}
