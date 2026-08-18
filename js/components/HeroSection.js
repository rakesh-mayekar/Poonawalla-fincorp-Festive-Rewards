// Master Hero Section Component with 24/7 Instant Sanction USP, Interest Rate Slider, & Inline Screen Swap
import { store } from '../state.js';

export function renderHeroSection() {
  const state = store.getState();
  const step = state.heroStep;
  const calc = state.heroCalculatedData;
  const userMobile = state.userSession.mobileNumber || '';

  return `
    <section id="hero" class="relative bg-wf-bg text-wf-text overflow-hidden pt-10 sm:pt-14 lg:pt-20 border-b border-wf-border bg-wireframe-grid min-h-[620px] flex flex-col justify-between">
      
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full pb-12">
        
        <!-- Desktop Grid: 2 Columns / Mobile: Stacked -->
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          <!-- Left Column: Headlines & Illustration Placeholder Area -->
          <div class="lg:col-span-7 space-y-6 text-center lg:text-left">
            
            <div class="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-wf-border text-wf-dark text-xs sm:text-sm font-semibold shadow-xs">
              <span class="w-2 h-2 rounded-full bg-wf-dark animate-ping"></span>
              <span>Poonawalla Fincorp Master Section</span>
              <i data-lucide="sparkles" class="w-4 h-4 text-wf-dark"></i>
            </div>

            <!-- Main Headline -->
            <h1 class="font-outfit text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-wf-dark leading-none">
              Welcome to the <br />
              <span class="text-wf-subtext">Festive Rewards Hub</span>
            </h1>

            <!-- Subtitle -->
            <p class="text-wf-subtext text-sm sm:text-base md:text-lg font-normal max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              Celebrate this festive season with instant pre-approved loans, zero processing fees, and guaranteed brand gift vouchers! Play games to unlock exciting festive rewards.
            </p>

            <!-- Dual Action CTAs -->
            <div class="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 sm:gap-4 pt-2">
              
              <a 
                href="#play-win"
                class="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-wf-dark hover:bg-wf-darkHover text-white font-extrabold text-sm sm:text-base flex items-center justify-center gap-2 shadow-xs active:scale-98 transition-all group"
              >
                <i data-lucide="gamepad-2" class="w-5 h-5 text-white"></i>
                <span>Play & Win Rewards</span>
                <i data-lucide="arrow-right" class="w-4 h-4 text-white group-hover:translate-x-1 transition-transform"></i>
              </a>

              <a 
                href="#preapproved"
                class="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-white hover:bg-wf-muted border border-wf-border text-wf-dark font-bold text-sm sm:text-base flex items-center justify-center gap-2 active:scale-98 transition-all"
              >
                <i data-lucide="sparkles" class="w-5 h-5 text-wf-dark"></i>
                <span>Check Pre-Approved Loan</span>
              </a>

            </div>

            <!-- Trust Badges Bar -->
            <div class="pt-4 grid grid-cols-3 gap-2 sm:gap-4 text-left border-t border-wf-border max-w-xl mx-auto lg:mx-0">
              <div class="flex items-center gap-2">
                <div class="w-8 h-8 rounded-lg bg-wf-muted border border-wf-border flex items-center justify-center text-wf-dark">
                  <i data-lucide="clock" class="w-4 h-4"></i>
                </div>
                <div>
                  <div class="font-bold text-xs sm:text-sm text-wf-dark">24/7 Dedicated</div>
                  <div class="text-[10px] sm:text-xs text-wf-subtext">Loan Team</div>
                </div>
              </div>

              <div class="flex items-center gap-2">
                <div class="w-8 h-8 rounded-lg bg-wf-muted border border-wf-border flex items-center justify-center text-wf-dark">
                  <i data-lucide="percent" class="w-4 h-4"></i>
                </div>
                <div>
                  <div class="font-bold text-xs sm:text-sm text-wf-dark">Low Rates</div>
                  <div class="text-[10px] sm:text-xs text-wf-subtext">From 9.99%</div>
                </div>
              </div>

              <div class="flex items-center gap-2">
                <div class="w-8 h-8 rounded-lg bg-wf-muted border border-wf-border flex items-center justify-center text-wf-dark">
                  <i data-lucide="gift" class="w-4 h-4"></i>
                </div>
                <div>
                  <div class="font-bold text-xs sm:text-sm text-wf-dark">100% Win</div>
                  <div class="text-[10px] sm:text-xs text-wf-subtext">Guaranteed</div>
                </div>
              </div>
            </div>

          </div>

          <!-- Right Column: 24/7 Instant Sanction Card (Inline Step Flow) -->
          <div class="lg:col-span-5">
            
            <div class="relative rounded-3xl bg-white border-2 border-wf-border p-6 shadow-md text-wf-text space-y-5">
              
              <!-- Client USP Heading: 24/7 Instant Sanction (Removed Quick Loan & Removed Top Apply Now Button) -->
              <div class="border-b border-wf-border pb-3 flex items-center justify-between">
                <div class="flex items-center gap-2.5">
                  <div class="w-10 h-10 rounded-xl bg-wf-dark text-white flex items-center justify-center font-bold">
                    <i data-lucide="shield-check" class="w-5 h-5"></i>
                  </div>
                  <div>
                    <h3 class="font-outfit font-extrabold text-lg sm:text-xl text-wf-dark leading-tight">24/7 Instant Sanction</h3>
                    <p class="text-xs text-wf-subtext">Dedicated Loan Team Available Round the Clock</p>
                  </div>
                </div>
                <span class="px-2.5 py-1 rounded-md bg-emerald-100 text-emerald-900 font-mono text-[10px] font-bold border border-emerald-300">
                  24/7 ACTIVE
                </span>
              </div>

              ${step === 1 ? `
                <!-- Step 1: Sliders Form (Amount, Interest Rate, Tenure) -->
                <div class="space-y-4">
                  
                  <!-- Slider 1: Loan Amount -->
                  <div class="space-y-2">
                    <div class="flex justify-between text-xs sm:text-sm">
                      <span class="text-wf-subtext font-semibold">Loan Amount</span>
                      <span id="hero-amount-val" class="font-outfit font-extrabold text-wf-dark text-base">₹ ${calc.amount.toLocaleString('en-IN')}</span>
                    </div>
                    <input 
                      type="range" 
                      id="hero-amount-slider" 
                      min="50000" 
                      max="3000000" 
                      step="25000" 
                      value="${calc.amount}" 
                      class="w-full"
                    />
                    <div class="flex justify-between text-[10px] text-wf-subtext font-mono">
                      <span>₹ 50,000</span>
                      <span>₹ 30 Lakh</span>
                    </div>
                  </div>

                  <!-- Slider 2: Interest Rate Component (User Request Addition) -->
                  <div class="space-y-2">
                    <div class="flex justify-between text-xs sm:text-sm">
                      <span class="text-wf-subtext font-semibold">Interest Rate (% p.a.)</span>
                      <span id="hero-rate-val" class="font-outfit font-extrabold text-wf-dark text-base">${calc.rate}% p.a.</span>
                    </div>
                    <input 
                      type="range" 
                      id="hero-rate-slider" 
                      min="8.5" 
                      max="18.0" 
                      step="0.25" 
                      value="${calc.rate}" 
                      class="w-full"
                    />
                    <div class="flex justify-between text-[10px] text-wf-subtext font-mono">
                      <span>8.5% (Min)</span>
                      <span>18.0% (Max)</span>
                    </div>
                  </div>

                  <!-- Slider 3: Tenure -->
                  <div class="space-y-2">
                    <div class="flex justify-between text-xs sm:text-sm">
                      <span class="text-wf-subtext font-semibold">Tenure (Months)</span>
                      <span id="hero-tenure-val" class="font-outfit font-extrabold text-wf-dark text-base">${calc.tenure} Months</span>
                    </div>
                    <input 
                      type="range" 
                      id="hero-tenure-slider" 
                      min="12" 
                      max="60" 
                      step="6" 
                      value="${calc.tenure}" 
                      class="w-full"
                    />
                    <div class="flex justify-between text-[10px] text-wf-subtext font-mono">
                      <span>12 Mos</span>
                      <span>60 Mos</span>
                    </div>
                  </div>

                  <!-- Calculated Monthly EMI Box & Calculate & Apply CTA -->
                  <div class="rounded-2xl bg-wf-muted border border-wf-border p-4 space-y-3">
                    <div class="flex items-center justify-between">
                      <div>
                        <div class="text-[10px] text-wf-subtext font-bold uppercase tracking-wider">Estimated Monthly EMI</div>
                        <div id="hero-calculated-emi" class="font-outfit font-black text-2xl text-wf-dark mt-0.5">
                          ₹ ${calc.emi.toLocaleString('en-IN')} / mo
                        </div>
                      </div>
                    </div>

                    <button 
                      id="btn-hero-calculate-apply"
                      class="w-full py-3.5 px-4 rounded-xl bg-wf-dark hover:bg-wf-darkHover text-white font-extrabold text-sm flex items-center justify-center gap-2 active:scale-98 transition-all shadow-xs"
                    >
                      <span>Calculate & Apply</span>
                      <i data-lucide="arrow-right" class="w-4 h-4 text-white"></i>
                    </button>
                  </div>

                </div>
              ` : `
                <!-- Step 2: Inline Summary + Mobile Number + OTP Verification (No Modal Popup) -->
                <div class="space-y-4 animate-fade-in">
                  
                  <div class="p-4 rounded-2xl bg-wf-muted border border-wf-border space-y-2">
                    <div class="flex justify-between items-center text-xs border-b border-wf-border pb-2">
                      <span class="font-bold text-wf-dark">Filled Loan Summary</span>
                      <button id="btn-hero-edit-summary" class="text-[10px] font-bold text-wf-dark underline hover:text-wf-subtext">Edit</button>
                    </div>

                    <div class="grid grid-cols-2 gap-2 text-xs">
                      <div>
                        <span class="text-[10px] text-wf-subtext block uppercase font-bold">Loan Amount</span>
                        <strong class="text-wf-dark font-mono font-bold">₹ ${calc.amount.toLocaleString('en-IN')}</strong>
                      </div>
                      <div>
                        <span class="text-[10px] text-wf-subtext block uppercase font-bold">Tenure & Rate</span>
                        <strong class="text-wf-dark font-mono font-bold">${calc.tenure} Mos @ ${calc.rate}%</strong>
                      </div>
                      <div>
                        <span class="text-[10px] text-wf-subtext block uppercase font-bold">Monthly EMI</span>
                        <strong class="text-emerald-700 font-mono font-extrabold">₹ ${calc.emi.toLocaleString('en-IN')} / mo</strong>
                      </div>
                      <div>
                        <span class="text-[10px] text-wf-subtext block uppercase font-bold">Total Amount</span>
                        <strong class="text-wf-dark font-mono font-bold">₹ ${calc.totalPayable.toLocaleString('en-IN')}</strong>
                      </div>
                    </div>
                  </div>

                  <!-- Inline Mobile & OTP Verification Form -->
                  <form id="hero-inline-otp-form" class="space-y-3 text-left">
                    <div class="space-y-1">
                      <label class="block text-xs font-bold uppercase text-wf-dark">Mobile Number for Instant Verification</label>
                      <div class="relative flex items-center">
                        <span class="absolute left-3 text-xs font-bold text-wf-subtext">+91</span>
                        <input 
                          type="tel" 
                          id="hero-inline-mobile" 
                          required 
                          maxlength="10" 
                          placeholder="98765 43210" 
                          value="${userMobile || '9876543210'}"
                          class="w-full pl-12 pr-3 py-2.5 rounded-xl border border-wf-border font-mono text-sm font-semibold text-wf-dark outline-none focus:border-wf-dark"
                        />
                      </div>
                    </div>

                    <div class="space-y-1">
                      <div class="flex justify-between items-center">
                        <label class="block text-[11px] font-bold uppercase text-wf-dark">Enter 4-Digit OTP</label>
                        <span class="text-[10px] font-bold text-emerald-700">Auto-filled (1234)</span>
                      </div>
                      <div class="grid grid-cols-4 gap-2">
                        <input type="text" value="1" readonly class="py-2 rounded-lg bg-wf-muted border border-wf-border font-mono text-base font-bold text-center text-wf-dark" />
                        <input type="text" value="2" readonly class="py-2 rounded-lg bg-wf-muted border border-wf-border font-mono text-base font-bold text-center text-wf-dark" />
                        <input type="text" value="3" readonly class="py-2 rounded-lg bg-wf-muted border border-wf-border font-mono text-base font-bold text-center text-wf-dark" />
                        <input type="text" value="4" readonly class="py-2 rounded-lg bg-wf-muted border border-wf-border font-mono text-base font-bold text-center text-wf-dark" />
                      </div>
                    </div>

                    <button 
                      type="submit"
                      class="w-full py-3 px-4 rounded-xl bg-wf-dark hover:bg-wf-darkHover text-white font-extrabold text-sm flex items-center justify-center gap-2 shadow-xs active:scale-98 transition-all"
                    >
                      <i data-lucide="check-circle" class="w-4 h-4 text-white"></i>
                      <span>Verify & Submit Application</span>
                    </button>
                  </form>

                </div>
              `}

              <div class="text-[11px] text-wf-subtext text-center flex items-center justify-center gap-1.5 pt-1 border-t border-wf-border">
                <i data-lucide="shield-check" class="w-4 h-4 text-emerald-600"></i>
                <span>Direct submission to 24/7 dedicated loan desk.</span>
              </div>

            </div>

          </div>

        </div>

      </div>

      <!-- BOTTOM BANNER FESTIVE DIYA TICKER (Aligned directly at bottom border of first section) -->
      <div class="w-full bg-white border-t-2 border-wf-border py-3.5 px-4 shadow-xs relative z-20">
        <div class="max-w-7xl mx-auto flex flex-wrap items-center justify-center sm:justify-between gap-3 text-center sm:text-left">
          
          <div class="flex items-center gap-3">
            <div class="w-7 h-7 flex items-center justify-center text-wf-dark">
              <svg class="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C10.5 4.5 9 6.5 9 9C9 10.66 10.34 12 12 12C13.66 12 15 10.66 15 9C15 6.5 13.5 4.5 12 2Z" fill="#27272A" />
                <path d="M4 14C4 17.31 7.58 20 12 20C16.42 20 20 17.31 20 14C20 13.5 19.5 13 19 13H5C4.5 13 4 13.5 4 14Z" fill="#71717A" />
              </svg>
            </div>
            <div class="font-outfit font-extrabold text-sm sm:text-base text-wf-dark tracking-wide uppercase">
              ✨ Shubh Diwali & Festive Offers 🪔
            </div>
          </div>

          <div class="flex items-center gap-3 text-xs sm:text-sm font-semibold text-wf-subtext">
            <span class="px-2.5 py-1 rounded bg-wf-muted text-wf-dark border border-wf-border font-bold">
              Guaranteed Brand Rewards
            </span>
            <span class="hidden md:inline">
              • Zero Processing Fee on Pre-Approved Loans •
            </span>
          </div>

        </div>
      </div>

    </section>
  `;
}

export function bindHeroEvents() {
  const amountSlider = document.getElementById('hero-amount-slider');
  const rateSlider = document.getElementById('hero-rate-slider');
  const tenureSlider = document.getElementById('hero-tenure-slider');

  const amountVal = document.getElementById('hero-amount-val');
  const rateVal = document.getElementById('hero-rate-val');
  const tenureVal = document.getElementById('hero-tenure-val');
  const emiVal = document.getElementById('hero-calculated-emi');

  function updateEmi() {
    if (!amountSlider || !rateSlider || !tenureSlider) return;
    const P = parseFloat(amountSlider.value);
    const R = parseFloat(rateSlider.value) / 12 / 100;
    const N = parseInt(tenureSlider.value, 10);

    const emi = Math.round((P * R * Math.pow(1 + R, N)) / (Math.pow(1 + R, N) - 1));
    const totalPayable = emi * N;

    if (amountVal) amountVal.textContent = `₹ ${P.toLocaleString('en-IN')}`;
    if (rateVal) rateVal.textContent = `${rateSlider.value}% p.a.`;
    if (tenureVal) tenureVal.textContent = `${N} Months`;
    if (emiVal) emiVal.textContent = `₹ ${emi.toLocaleString('en-IN')} / mo`;

    store.state.heroCalculatedData = {
      amount: P,
      rate: parseFloat(rateSlider.value),
      tenure: N,
      emi: emi,
      totalPayable: totalPayable
    };
  }

  if (amountSlider && rateSlider && tenureSlider) {
    amountSlider.addEventListener('input', updateEmi);
    rateSlider.addEventListener('input', updateEmi);
    tenureSlider.addEventListener('input', updateEmi);
  }

  const btnCalculateApply = document.getElementById('btn-hero-calculate-apply');
  if (btnCalculateApply) {
    btnCalculateApply.addEventListener('click', () => {
      updateEmi();
      store.setHeroStep(2);
    });
  }

  const btnEdit = document.getElementById('btn-hero-edit-summary');
  if (btnEdit) {
    btnEdit.addEventListener('click', () => {
      store.setHeroStep(1);
    });
  }

  const otpForm = document.getElementById('hero-inline-otp-form');
  if (otpForm) {
    otpForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const mobileVal = document.getElementById('hero-inline-mobile')?.value?.trim() || '9876543210';
      
      store.loginUser(mobileVal);
      store.showToast(`Application submitted! Sanction details sent to +91 ${mobileVal}`);
      store.setHeroStep(1);
    });
  }
}
