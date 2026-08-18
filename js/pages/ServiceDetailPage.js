// Service Inner Detail Page Component - Enriched Specification
import { store } from '../state.js';
import { mockData } from '../mockData.js';

export function renderServiceDetailPage() {
  const servId = store.getState().routeParam || 'serv-instant-loan';
  const service = mockData.popularServices.find(s => s.id === servId) || mockData.popularServices[0];

  return `
    <div class="py-12 sm:py-16 bg-wf-bg min-h-screen">
      <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        <!-- Breadcrumb & Back -->
        <div class="flex items-center justify-between">
          <a href="#home" class="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-white border border-wf-border text-wf-dark font-bold text-xs hover:bg-wf-muted transition-colors">
            <i data-lucide="arrow-left" class="w-4 h-4"></i> Back to Home
          </a>
          <span class="text-xs font-mono text-wf-subtext">Service Spec ID: ${service.id}</span>
        </div>

        <!-- Enriched Service Details Card -->
        <div class="rounded-3xl bg-white border-2 border-wf-border p-6 sm:p-10 shadow-md space-y-8 text-left">
          
          <!-- Header -->
          <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-wf-border pb-6">
            <div>
              <span class="text-xs font-bold text-wf-subtext uppercase tracking-wider">Financial Solution Specification</span>
              <h1 class="font-outfit text-3xl sm:text-4xl font-extrabold text-wf-dark mt-1">${service.title}</h1>
              <p class="text-xs text-wf-subtext mt-1">100% Digital Process • Fast Dispersal • Dedicated Relationship Desk</p>
            </div>

            <span class="px-3.5 py-1.5 rounded-full bg-emerald-100 border border-emerald-300 text-emerald-900 font-mono text-xs font-bold self-start sm:self-auto">
              ${service.badge}
            </span>
          </div>

          <!-- Highlight Metrics Grid -->
          <div class="grid grid-cols-2 sm:grid-cols-4 gap-4 p-5 rounded-2xl bg-wf-muted border border-wf-border">
            <div>
              <span class="text-[10px] uppercase font-bold text-wf-subtext">Interest Rate</span>
              <div class="font-outfit font-extrabold text-lg text-wf-dark">${service.rate}</div>
            </div>
            <div>
              <span class="text-[10px] uppercase font-bold text-wf-subtext">Max Sanction</span>
              <div class="font-outfit font-extrabold text-lg text-emerald-700">${service.maxAmount}</div>
            </div>
            <div>
              <span class="text-[10px] uppercase font-bold text-wf-subtext">Tenure Range</span>
              <div class="font-outfit font-extrabold text-lg text-wf-dark">12 - 60 Months</div>
            </div>
            <div>
              <span class="text-[10px] uppercase font-bold text-wf-subtext">Processing Fee</span>
              <div class="font-outfit font-extrabold text-lg text-emerald-700">₹ 0 (Festive Waiver)</div>
            </div>
          </div>

          <!-- Key Features & Benefits -->
          <div class="space-y-4 border-t border-wf-border pt-6">
            <h3 class="font-outfit font-bold text-xl text-wf-dark">Key Features & Benefits</h3>
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div class="p-4 rounded-xl border border-wf-border bg-wf-bg space-y-1">
                <div class="font-bold text-sm text-wf-dark flex items-center gap-2">
                  <i data-lucide="check-circle-2" class="w-4 h-4 text-emerald-600"></i> No Collateral Required
                </div>
                <p class="text-xs text-wf-subtext">100% unsecured digital loan with zero asset pledge.</p>
              </div>

              <div class="p-4 rounded-xl border border-wf-border bg-wf-bg space-y-1">
                <div class="font-bold text-sm text-wf-dark flex items-center gap-2">
                  <i data-lucide="clock" class="w-4 h-4 text-emerald-600"></i> 30-Minute Dispersal
                </div>
                <p class="text-xs text-wf-subtext">Funds directly credited to your bank account post approval.</p>
              </div>

              <div class="p-4 rounded-xl border border-wf-border bg-wf-bg space-y-1">
                <div class="font-bold text-sm text-wf-dark flex items-center gap-2">
                  <i data-lucide="file-text" class="w-4 h-4 text-emerald-600"></i> Minimal Paperwork
                </div>
                <p class="text-xs text-wf-subtext">Paperless digital Aadhaar OKYC & PAN verification.</p>
              </div>

              <div class="p-4 rounded-xl border border-wf-border bg-wf-bg space-y-1">
                <div class="font-bold text-sm text-wf-dark flex items-center gap-2">
                  <i data-lucide="shield" class="w-4 h-4 text-emerald-600"></i> Zero Foreclosure Charges
                </div>
                <p class="text-xs text-wf-subtext">Foreclose or prepay your loan anytime with zero hidden penalty.</p>
              </div>
            </div>
          </div>

          <!-- Eligibility & Required Documents -->
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6 border-t border-wf-border pt-6">
            <div class="space-y-3">
              <h4 class="font-outfit font-bold text-base text-wf-dark">Eligibility Criteria:</h4>
              <ul class="list-disc list-inside text-xs text-wf-subtext space-y-1.5">
                <li>Nationality: Resident Indian Citizen</li>
                <li>Age: 21 to 60 Years</li>
                <li>Minimum Monthly Salary: ₹ 20,000 / month</li>
                <li>Minimum Credit Score: 700+ CIBIL Score</li>
              </ul>
            </div>

            <div class="space-y-3">
              <h4 class="font-outfit font-bold text-base text-wf-dark">Required Documents:</h4>
              <ul class="list-disc list-inside text-xs text-wf-subtext space-y-1.5">
                <li>PAN Card & Aadhaar Card</li>
                <li>Latest 3 Months Salary Slips / ITR</li>
                <li>6 Months Bank Account Statement</li>
              </ul>
            </div>
          </div>

          <!-- Apply CTA -->
          <div class="pt-4">
            <button 
              id="btn-inner-apply-service"
              class="w-full py-4 px-6 rounded-xl bg-wf-dark hover:bg-wf-darkHover text-white font-extrabold text-base shadow-xs transition-all flex items-center justify-center gap-2"
            >
              <span>Apply for ${service.title} Now</span>
              <i data-lucide="arrow-right" class="w-5 h-5 text-white"></i>
            </button>
          </div>

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
