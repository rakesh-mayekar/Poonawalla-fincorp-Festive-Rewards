// My Offers Reward Wallet Drawer - Wireframe Theme
import { store } from '../../state.js';

export function renderMyOffersDrawer() {
  const claimed = store.getState().claimedOffers;

  return `
    <div class="fixed inset-0 z-50 flex justify-end bg-slate-950/70 backdrop-blur-xs animate-fade-in">
      
      <div class="w-full max-w-md bg-white h-full shadow-2xl flex flex-col justify-between overflow-hidden animate-slide-up sm:animate-fade-in border-l-2 border-wf-border">
        
        <!-- Drawer Header -->
        <div class="bg-wf-dark text-white p-5 flex items-center justify-between shadow-xs">
          <div class="flex items-center gap-3">
            <div class="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center text-white">
              <i data-lucide="wallet" class="w-6 h-6"></i>
            </div>
            <div>
              <h3 class="font-outfit font-bold text-lg text-white">My Reward Wallet</h3>
              <p class="text-xs text-zinc-300">${claimed.length} Saved Festive Voucher${claimed.length === 1 ? '' : 's'}</p>
            </div>
          </div>

          <button 
            id="btn-close-wallet"
            class="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors"
          >
            <i data-lucide="x" class="w-5 h-5"></i>
          </button>
        </div>

        <!-- Drawer Content Body -->
        <div class="p-5 flex-1 overflow-y-auto space-y-4 custom-scrollbar bg-wf-bg">
          
          ${claimed.length === 0 ? `
            <div class="h-64 flex flex-col items-center justify-center text-center space-y-3 text-wf-subtext">
              <div class="w-16 h-16 rounded-full bg-wf-muted flex items-center justify-center text-wf-dark border border-wf-border">
                <i data-lucide="gift" class="w-8 h-8"></i>
              </div>
              <h4 class="font-outfit font-bold text-lg text-wf-dark">Your Wallet is Empty</h4>
              <p class="text-xs max-w-xs text-wf-subtext">
                Play Spin & Win, Scratch Card or Shuffle Card to claim guaranteed festive rewards!
              </p>
              <button 
                id="btn-wallet-go-play"
                class="px-5 py-2.5 rounded-xl bg-wf-dark text-white font-bold text-xs flex items-center gap-2 shadow-xs"
              >
                <i data-lucide="gamepad-2" class="w-4 h-4 text-white"></i>
                <span>Play Games Now</span>
              </button>
            </div>
          ` : `
            <div class="space-y-4">
              ${claimed.map(item => `
                <div class="rounded-2xl bg-white border border-wf-border p-5 shadow-xs space-y-3">
                  
                  <div class="flex items-center justify-between">
                    <div class="flex items-center gap-2.5">
                      <div class="w-8 h-8 rounded-lg bg-wf-dark text-white font-outfit font-extrabold text-xs flex items-center justify-center">
                        ${(item.brand || 'PF').slice(0, 2).toUpperCase()}
                      </div>
                      <div>
                        <h4 class="font-outfit font-bold text-sm text-wf-dark leading-tight">${item.brand || 'Brand Partner'}</h4>
                        <span class="text-[10px] text-wf-subtext">Claimed Voucher</span>
                      </div>
                    </div>

                    <span class="px-2 py-0.5 rounded bg-emerald-100 text-emerald-800 text-[10px] font-bold">
                      Active
                    </span>
                  </div>

                  <div>
                    <h5 class="font-outfit font-bold text-base text-wf-dark">${item.title || item.discount}</h5>
                    <p class="text-xs text-wf-subtext mt-0.5">${item.shortDesc || item.desc || ''}</p>
                  </div>

                  <!-- Code Box -->
                  <div class="flex items-center justify-between p-2.5 rounded-xl bg-wf-dark text-white">
                    <span class="font-mono text-base font-bold text-white tracking-wider pl-2">
                      ${item.couponCode || item.code}
                    </span>
                    <button 
                      data-wallet-code="${item.couponCode || item.code}"
                      class="btn-copy-wallet-code px-3 py-1 rounded-lg bg-white text-wf-dark font-bold text-xs flex items-center gap-1 active:scale-95 transition-all shadow-xs"
                    >
                      <i data-lucide="copy" class="w-3.5 h-3.5"></i>
                      <span>Copy</span>
                    </button>
                  </div>

                  <div class="flex justify-between items-center text-[10px] text-wf-subtext pt-1 border-t border-wf-border">
                    <span>Expiry: 15 Days</span>
                    <span>Single-use online</span>
                  </div>

                </div>
              `).join('')}
            </div>
          `}

        </div>

        <div class="p-4 bg-white border-t border-wf-border text-center text-xs text-wf-subtext">
          Coupons can be redeemed directly at checkout on partner sites.
        </div>

      </div>
    </div>
  `;
}

export function bindMyOffersDrawerEvents() {
  const btnClose = document.getElementById('btn-close-wallet');
  if (btnClose) {
    btnClose.addEventListener('click', () => store.closeModal());
  }

  const btnPlay = document.getElementById('btn-wallet-go-play');
  if (btnPlay) {
    btnPlay.addEventListener('click', () => {
      store.closeModal();
      window.location.hash = '#play-win';
    });
  }

  document.querySelectorAll('.btn-copy-wallet-code').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const code = e.currentTarget.getAttribute('data-wallet-code');
      if (code) {
        navigator.clipboard.writeText(code);
        store.showToast(`Code ${code} copied!`);
      }
    });
  });
}
