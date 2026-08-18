// Shuffle Card 3-Card Monte Game Modal Component - Wireframe Theme
import { store } from '../../state.js';
import { mockData } from '../../mockData.js';

export function renderShuffleCardModal() {
  return `
    <div class="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-xs animate-fade-in">
      
      <div class="w-full max-w-xl bg-white text-wf-text rounded-3xl shadow-2xl border-2 border-wf-border p-6 sm:p-8 space-y-6 text-center relative overflow-hidden animate-slide-up">
        
        <button 
          id="btn-close-shuffle" 
          class="absolute top-4 right-4 w-8 h-8 rounded-full bg-wf-muted hover:bg-wf-mutedHover text-wf-dark flex items-center justify-center transition-colors"
        >
          <i data-lucide="x" class="w-5 h-5"></i>
        </button>

        <div class="space-y-1">
          <span class="px-3 py-1 rounded-full bg-wf-muted text-wf-dark font-bold text-xs uppercase tracking-widest border border-wf-border">
            3-Card Shuffle Pick
          </span>
          <h3 class="font-outfit text-2xl sm:text-3xl font-extrabold text-wf-dark">Festive Lucky Card Pick</h3>
          <p class="text-xs text-wf-subtext">Click shuffle, then pick one of the 3 festive cards to reveal your prize!</p>
        </div>

        <!-- 3 Cards Grid -->
        <div id="shuffle-cards-container" class="grid grid-cols-3 gap-3 sm:gap-4 my-6">
          
          ${[0, 1, 2].map(idx => `
            <div 
              data-card-index="${idx}"
              class="shuffle-card-item relative h-40 sm:h-48 rounded-2xl bg-wf-dark text-white border-2 border-wf-border shadow-md cursor-pointer hover:scale-105 transition-all duration-300 flex flex-col items-center justify-center p-3 text-center group"
            >
              <div class="card-inner w-full h-full flex flex-col items-center justify-center space-y-2">
                <div class="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center text-white group-hover:scale-110 transition-transform">
                  <i data-lucide="sparkles" class="w-6 h-6"></i>
                </div>
                <div class="font-outfit font-extrabold text-xs sm:text-sm text-white">
                  CARD #${idx + 1}
                </div>
                <span class="text-[10px] text-zinc-300 font-semibold uppercase">Pick Me</span>
              </div>
            </div>
          `).join('')}

        </div>

        <button 
          id="btn-shuffle-action"
          class="w-full py-3.5 px-6 rounded-xl bg-wf-dark hover:bg-wf-darkHover text-white font-extrabold text-base shadow-xs active:scale-95 transition-all flex items-center justify-center gap-2"
        >
          <i data-lucide="shuffle" class="w-5 h-5 text-white"></i>
          <span>Shuffle & Pick Lucky Card</span>
        </button>

      </div>
    </div>
  `;
}

export function bindShuffleCardEvents() {
  const btnClose = document.getElementById('btn-close-shuffle');
  if (btnClose) {
    btnClose.addEventListener('click', () => store.closeModal());
  }

  const btnShuffle = document.getElementById('btn-shuffle-action');
  const cardItems = document.querySelectorAll('.shuffle-card-item');
  let isShuffling = false;
  let isPicked = false;

  if (btnShuffle) {
    btnShuffle.addEventListener('click', () => {
      if (isShuffling || isPicked) return;
      isShuffling = true;
      btnShuffle.disabled = true;
      btnShuffle.innerHTML = `<span>Shuffling Cards...</span>`;

      cardItems.forEach(card => {
        card.classList.add('animate-bounce-gentle');
      });

      setTimeout(() => {
        cardItems.forEach(card => {
          card.classList.remove('animate-bounce-gentle');
        });
        isShuffling = false;
        btnShuffle.innerHTML = `<span>Cards Shuffled! Click Any Card Above</span>`;
      }, 1200);
    });
  }

  cardItems.forEach(card => {
    card.addEventListener('click', (e) => {
      if (isShuffling || isPicked) return;
      isPicked = true;

      const idx = e.currentTarget.getAttribute('data-card-index');
      const rewards = mockData.gameRewards.shuffleCard;
      const prize = rewards[parseInt(idx, 10) % rewards.length];

      card.classList.remove('bg-wf-dark');
      card.classList.add('bg-white', 'text-wf-dark', 'border-emerald-500');
      card.innerHTML = `
        <div class="space-y-1 p-2 text-wf-dark font-outfit">
          <i data-lucide="trophy" class="w-8 h-8 mx-auto text-wf-dark"></i>
          <h4 class="font-extrabold text-sm leading-tight">${prize.title}</h4>
          <span class="inline-block px-2 py-0.5 rounded bg-wf-dark text-white font-mono text-[10px] font-bold">
            ${prize.code}
          </span>
        </div>
      `;

      setTimeout(() => {
        store.setGamePlayed('shuffle');
        store.claimReward({
          id: prize.id,
          brand: prize.brand,
          title: prize.title,
          couponCode: prize.code,
          shortDesc: prize.desc,
          expiryDays: 15,
          redemptionSteps: [
            'Visit Poonawalla Fincorp loan application page.',
            `Apply code ${prize.code} for rate cut.`
          ],
          tnc: 'Exclusive reward unlocked on 3-Card Shuffle Pick.'
        });
      }, 900);
    });
  });
}
