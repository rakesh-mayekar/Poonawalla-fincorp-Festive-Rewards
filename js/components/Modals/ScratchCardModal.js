// Scratch Card Canvas Game Modal Component - Wireframe Theme
import { store } from '../../state.js';
import { mockData } from '../../mockData.js';

export function renderScratchCardModal() {
  const prize = mockData.gameRewards.scratchCard[Math.floor(Math.random() * mockData.gameRewards.scratchCard.length)];

  return `
    <div class="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-xs animate-fade-in">
      
      <div class="w-full max-w-lg bg-white text-wf-text rounded-3xl shadow-2xl border-2 border-wf-border p-6 sm:p-8 space-y-6 text-center relative overflow-hidden animate-slide-up">
        
        <button 
          id="btn-close-scratch" 
          class="absolute top-4 right-4 w-8 h-8 rounded-full bg-wf-muted hover:bg-wf-mutedHover text-wf-dark flex items-center justify-center transition-colors"
        >
          <i data-lucide="x" class="w-5 h-5"></i>
        </button>

        <div class="space-y-1">
          <span class="px-3 py-1 rounded-full bg-wf-muted text-wf-dark font-bold text-xs uppercase tracking-widest border border-wf-border">
            Foil Scratch Game
          </span>
          <h3 class="font-outfit text-2xl sm:text-3xl font-extrabold text-wf-dark">Festive Golden Scratch Card</h3>
          <p class="text-xs text-wf-subtext">Use your finger or cursor to scratch off the foil layer!</p>
        </div>

        <!-- Scratch Canvas Area Container -->
        <div class="relative w-72 h-48 sm:w-80 sm:h-52 mx-auto rounded-2xl border-2 border-wf-border shadow-md overflow-hidden bg-wf-dark flex items-center justify-center">
          
          <!-- Underneath Hidden Prize Layout -->
          <div id="scratch-hidden-prize" class="absolute inset-0 p-5 bg-wf-muted text-wf-dark flex flex-col items-center justify-center text-center space-y-2">
            <i data-lucide="trophy" class="w-10 h-10 text-wf-dark"></i>
            <h4 class="font-outfit font-black text-xl leading-tight">${prize.title}</h4>
            <p class="text-xs font-semibold text-wf-subtext">${prize.desc}</p>
            <div class="px-3 py-1 rounded-lg bg-wf-dark text-white font-mono font-bold text-sm">
              Code: ${prize.code}
            </div>
          </div>

          <!-- Top Canvas Scratch Foil Layer -->
          <canvas 
            id="scratch-canvas" 
            width="320" 
            height="208" 
            class="absolute inset-0 w-full h-full cursor-pointer scratch-canvas z-10"
          ></canvas>

        </div>

        <div class="text-xs text-wf-subtext">
          💡 Drag across the card above to reveal your prize.
        </div>

      </div>
    </div>
  `;
}

export function bindScratchCardEvents() {
  const btnClose = document.getElementById('btn-close-scratch');
  if (btnClose) {
    btnClose.addEventListener('click', () => store.closeModal());
  }

  const canvas = document.getElementById('scratch-canvas');
  if (!canvas) return;

  const ctx = canvas.getContext('2d');
  const width = canvas.width;
  const height = canvas.height;

  // Draw wireframe foil layer
  ctx.fillStyle = '#27272A';
  ctx.fillRect(0, 0, width, height);

  // Text
  ctx.fillStyle = '#FFFFFF';
  ctx.font = 'bold 16px Outfit, sans-serif';
  ctx.textAlign = 'center';
  ctx.fillText('✨ SCRATCH HERE ✨', width / 2, height / 2 - 5);
  ctx.font = '12px Plus Jakarta Sans, sans-serif';
  ctx.fillText('Poonawalla Fincorp Wireframe Card', width / 2, height / 2 + 18);

  let isScratching = false;
  let revealed = false;

  function scratch(e) {
    if (!isScratching || revealed) return;
    
    const rect = canvas.getBoundingClientRect();
    const clientX = e.touches ? e.touches[0].clientX : e.clientX;
    const clientY = e.touches ? e.touches[0].clientY : e.clientY;

    const x = (clientX - rect.left) * (canvas.width / rect.width);
    const y = (clientY - rect.top) * (canvas.height / rect.height);

    ctx.globalCompositeOperation = 'destination-out';
    ctx.beginPath();
    ctx.arc(x, y, 22, 0, Math.PI * 2);
    ctx.fill();

    checkRevealProgress();
  }

  function checkRevealProgress() {
    if (revealed) return;
    const imageData = ctx.getImageData(0, 0, width, height);
    const pixels = imageData.data;
    let transparentCount = 0;

    for (let i = 3; i < pixels.length; i += 16) {
      if (pixels[i] === 0) transparentCount++;
    }

    const totalSampled = pixels.length / 16;
    if (transparentCount / totalSampled > 0.35) {
      revealed = true;
      ctx.clearRect(0, 0, width, height);

      const prizeTitle = document.querySelector('#scratch-hidden-prize h4')?.textContent || 'Festive Reward';
      const prizeCode = document.querySelector('#scratch-hidden-prize .font-mono')?.textContent?.replace('Code: ', '') || 'SCRATCH1K';

      setTimeout(() => {
        store.setGamePlayed('scratch');
        store.claimReward({
          id: 'scratch-win-' + Date.now(),
          brand: 'Poonawalla Fincorp',
          title: prizeTitle,
          couponCode: prizeCode,
          shortDesc: 'Instant reward unlocked via Golden Scratch Card.',
          expiryDays: 15,
          redemptionSteps: [
            'Go to checkout screen on brand app.',
            `Enter promo code ${prizeCode} to apply discount.`
          ],
          tnc: 'One scratch reward per user session.'
        });
      }, 500);
    }
  }

  canvas.addEventListener('mousedown', () => isScratching = true);
  canvas.addEventListener('mouseup', () => isScratching = false);
  canvas.addEventListener('mousemove', scratch);

  canvas.addEventListener('touchstart', (e) => { isScratching = true; scratch(e); });
  canvas.addEventListener('touchend', () => isScratching = false);
  canvas.addEventListener('touchmove', scratch);
}
