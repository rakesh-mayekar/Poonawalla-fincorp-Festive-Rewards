// Service Inner Detail Page Component
import { store } from '../state.js';
import { mockData } from '../mockData.js';

export function renderServiceDetailPage() {
  const servId = store.getState().routeParam || 'serv-instant-loan';
  const service = mockData.popularServices.find(s => s.id === servId) || mockData.popularServices[0];

  return `
    <div class="py-12 sm:py-16 bg-wf-bg min-h-screen">
      <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        <div class="flex items-center justify-between">
          <a href="#home" class="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-white border border-wf-border text-wf-dark font-bold text-xs hover:bg-wf-muted transition-colors">
            <i data-lucide="arrow-left" class="w-4 h-4"></i> Back to Home
          </a>
          <span class="text-xs font-mono text-wf-subtext">Service ID: ${service.id}</span>
        </div>

        <div class="rounded-3xl bg-white border-2 border-wf-border p-6 sm:p-10 shadow-md space-y-6 text-left">
          
          <div class="flex items-center justify-between border-b border-wf-border pb-4">
            <div>
              <span class="text-xs font-bold text-wf-subtext uppercase tracking-wider">Financial Solution Specification</span>
              <h1 class="font-outfit text-3xl font-extrabold text-wf-dark mt-1">${service.title}</h1>
            </div>
            <span class="px-3 py-1 rounded-md bg-emerald-100 text-emerald-800 font-mono text-xs font-bold">
              ${service.badge}
            </span>
          </div>

          <div class="grid grid-cols-2 gap-4 p-4 rounded-2xl bg-wf-muted border border-wf-border">
            <div>
              <span class="text-[10px] uppercase font-bold text-wf-subtext">Interest Rate</span>
              <div class="font-outfit font-extrabold text-xl text-wf-dark">${service.rate}</div>
            </div>
            <div>
              <span class="text-[10px] uppercase font-bold text-wf-subtext">Max Sanction Limit</span>
              <div class="font-outfit font-extrabold text-xl text-emerald-700">${service.maxAmount}</div>
            </div>
          </div>

          <p class="text-xs sm:text-sm text-wf-subtext leading-relaxed">${service.desc}</p>

          <button 
            id="btn-inner-apply-service"
            class="w-full py-3.5 px-4 rounded-xl bg-wf-dark hover:bg-wf-darkHover text-white font-extrabold text-sm shadow-xs transition-all flex items-center justify-center gap-2"
          >
            <span>${service.cta}</span>
            <i data-lucide="arrow-right" class="w-4 h-4 text-white"></i>
          </button>

        </div>

      </div>
    </div>
  `;
}

export function bindServiceDetailPageEvents() {
  const btn = document.getElementById('btn-inner-apply-service');
  if (btn) {
    btn.addEventListener('click', () => {
      const servId = store.getState().routeParam || 'serv-instant-loan';
      const service = mockData.popularServices.find(s => s.id === servId) || mockData.popularServices[0];

      store.requireAuth(() => {
        store.openModal('loan-apply', {
          loanType: service.title,
          amount: 500000,
          tenure: 36
        });
      });
    });
  }
}
