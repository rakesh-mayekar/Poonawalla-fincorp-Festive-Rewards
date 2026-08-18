// Spin & Win Wheel Game Modal Component - Wireframe Theme
import { store } from '../../state.js';
import { mockData } from '../../mockData.js';

export function renderSpinWheelModal() {
  const prizes = mockData.gameRewards.spinWheel;

  return `
    <div class="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-xs animate-fade-in">
      
      <div class="w-full max-w-lg bg-white text-wf-text rounded-3xl shadow-2xl border-2 border-wf-border p-6 sm:p-8 space-y-6 text-center relative overflow-hidden animate-slide-up">
        
        <button 
          id="btn-close-spin" 
          class="absolute top-4 right-4 w-8 h-8 rounded-full bg-wf-muted hover:bg-wf-mutedHover text-wf-dark flex items-center justify-center transition-colors"
        >
          <i data-lucide="x" class="w-5 h-5"></i>
        </button>

        <div class="space-y-1">
          <span class="px-3 py-1 rounded-full bg-wf-muted text-wf-dark font-bold text-xs uppercase tracking-widest border border-wf-border">
            Wheel Game
          </span>
          <h3 class="font-outfit text-2xl sm:text-3xl font-extrabold text-wf-dark">Festive Wheel of Fortune</h3>
          <p class="text-xs text-wf-subtext">Spin the wheel to win guaranteed festive gift vouchers!</p>
        </div>

        <!-- Wheel Visual Container -->
        <div class="relative w-64 h-64 sm:w-72 sm:h-72 mx-auto my-4 flex items-center justify-center">
          
          <!-- Pointer Pin -->
          <div class="absolute -top-3 left-1/2 -translate-x-1/2 z-20 w-8 h-8 flex flex-col items-center drop-shadow-sm">
            <div class="w-6 h-6 bg-wf-dark rotate-45 border-2 border-white rounded-xs"></div>
          </div>

          <!-- Rotating Wheel Disc -->
          <div 
            id="wheel-disc" 
            class="w-full h-full rounded-full border-4 border-wf-dark shadow-xl overflow-hidden relative transition-transform duration-[4000ms] cubic-bezier(0.15, 0.9, 0.2, 1)"
            style="transform: rotate(0deg);"
          >
            <!-- SVG Wheel Slices (Monochrome Wireframe Slices) -->
            <svg class="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
              ${prizes.map((prize, idx) => {
                const angle = 360 / prizes.length;
                const startAngle = idx * angle;
                const endAngle = (idx + 1) * angle;
                
                const x1 = 50 + 50 * Math.cos((Math.PI * startAngle) / 180);
                const y1 = 50 + 50 * Math.sin((Math.PI * startAngle) / 180);
                const x2 = 50 + 50 * Math.cos((Math.PI * endAngle) / 180);
                const y2 = 50 + 50 * Math.sin((Math.PI * endAngle) / 180);

                const colors = ['#18181B', '#27272A', '#3F3F46', '#52525B', '#18181B', '#27272A'];
                const sliceColor = colors[idx % colors.length];

                return `
                  <path d="M50,50 L${x1},${y1} A50,50 0 0,1 ${x2},${y2} Z" fill="${sliceColor}" stroke="#E4E4E7" stroke-width="0.8" />
                `;
              }).join('')}
            </svg>

            <!-- Text Overlay Labels -->
            <div class="absolute inset-0 flex items-center justify-center pointer-events-none">
              ${prizes.map((prize, idx) => {
                const angle = (idx * 60) + 30;
                return `
                  <div 
                    class="absolute w-full text-center font-outfit text-[9px] font-extrabold text-white uppercase tracking-tighter truncate px-3"
                    style="transform: rotate(${angle}deg); transform-origin: 50% 50%;"
                  >
                    <span class="inline-block translate-x-12">${prize.brand}</span>
                  </div>
                `;
              }).join('')}
            </div>

            <!-- Center Cap Button -->
            <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-14 h-14 rounded-full bg-white border-4 border-wf-dark text-wf-dark font-outfit font-extrabold text-xs flex items-center justify-center shadow-md z-10">
              PFIN
            </div>

          </div>

        </div>

        <!-- Spin Trigger Button -->
        <button 
          id="btn-spin-action"
          class="w-full py-3.5 px-6 rounded-xl bg-wf-dark hover:bg-wf-darkHover text-white font-extrabold text-base shadow-xs active:scale-95 transition-all flex items-center justify-center gap-2"
        >
          <i data-lucide="disc-3" class="w-5 h-5 text-white"></i>
          <span>SPIN THE WHEEL NOW!</span>
        </button>

      </div>
    </div>
  `;
}

export function bindSpinWheelEvents() {
  const btnClose = document.getElementById('btn-close-spin');
  if (btnClose) {
    btnClose.addEventListener('click', () => store.closeModal());
  }

  const btnSpin = document.getElementById('btn-spin-action');
  const wheelDisc = document.getElementById('wheel-disc');
  let spinning = false;

  if (btnSpin && wheelDisc) {
    btnSpin.addEventListener('click', () => {
      if (spinning) return;
      spinning = true;
      btnSpin.disabled = true;
      btnSpin.innerHTML = `<span>Spinning...</span>`;

      const selectedIndex = Math.floor(Math.random() * mockData.gameRewards.spinWheel.length);
      const prize = mockData.gameRewards.spinWheel[selectedIndex];

      const sliceAngle = 360 / mockData.gameRewards.spinWheel.length;
      const targetDegrees = (360 * 5) + (360 - (selectedIndex * sliceAngle) - (sliceAngle / 2));

      wheelDisc.style.transform = `rotate(${targetDegrees}deg)`;

      setTimeout(() => {
        store.setGamePlayed('spin');
        store.claimReward({
          id: prize.id,
          brand: prize.brand,
          title: prize.title,
          couponCode: prize.code,
          shortDesc: prize.desc,
          expiryDays: 15,
          redemptionSteps: [
            'Go to loan or voucher payment page.',
            `Enter code ${prize.code} to claim your reward.`
          ],
          tnc: 'Exclusive festive reward won on Spin & Win wheel.'
        });
      }, 4100);
    });
  }
}
