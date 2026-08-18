// Master Hero Section Component - Mobile-First Responsive System (320px to 4K)
import { store } from '../state.js';

export function renderHeroSection() {
  const state = store.getState();
  const step = state.heroStep;
  const calc = state.heroCalculatedData;
  const userMobile = state.userSession.mobileNumber || '';
  const otpSent = state.heroOtpSent || false;

  return `
    <section id="hero" class="relative bg-wf-bg text-wf-text overflow-hidden border-b border-wf-border bg-wireframe-grid lg:min-h-[calc(100vh-80px)] flex flex-col justify-between">
      
      <!-- Top / Center Content -->
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full flex-1 flex items-center py-6 sm:py-8 lg:py-10">
        
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center w-full">
          
          <!-- Left Column: Headline & Value Propositions -->
          <div class="lg:col-span-7 space-y-4 sm:space-y-6 text-center lg:text-left">
            
            <div class="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-wf-muted border border-wf-border text-wf-dark text-[11px] sm:text-xs font-mono tracking-wider">
              <span class="w-1.5 h-1.5 rounded-full bg-wf-dark"></span>
              <span>POONAWALLA FINCORP MASTER SECTION</span>
            </div>

            <!-- Main Editorial Serif Headline (Fluid Typography) -->
            <h1 class="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-semibold tracking-tight text-wf-dark leading-[1.1]">
              Welcome to the <br />
              <span class="text-wf-subtext italic font-normal">Festive Rewards Hub</span>
            </h1>

            <!-- Subtitle -->
            <p class="text-wf-subtext text-xs sm:text-sm md:text-base lg:text-lg font-normal max-w-xl mx-auto lg:mx-0 leading-relaxed">
              Celebrate this festive season with instant pre-approved loans, zero processing fees, and guaranteed brand gift vouchers. Play games to unlock verified festive rewards.
            </p>

            <!-- Dual Action CTAs -->
            <div class="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 sm:gap-4 pt-1 sm:pt-2">
              <a 
                href="#play-win"
                class="w-full sm:w-auto px-5 py-3.5 sm:px-6 sm:py-3.5 rounded-lg bg-wf-dark hover:bg-wf-darkHover text-white font-semibold text-xs sm:text-sm flex items-center justify-center gap-2 active:scale-98 transition-all group touch-target"
              >
                <i data-lucide="gamepad-2" class="w-4 h-4 text-white"></i>
                <span>Play & Win Rewards</span>
                <i data-lucide="arrow-right" class="w-4 h-4 text-white group-hover:translate-x-1 transition-transform"></i>
              </a>

              <a 
                href="#preapproved"
                class="w-full sm:w-auto px-5 py-3.5 sm:px-6 sm:py-3.5 rounded-lg bg-white hover:bg-wf-muted border border-wf-border text-wf-dark font-semibold text-xs sm:text-sm flex items-center justify-center gap-2 active:scale-98 transition-all touch-target"
              >
                <i data-lucide="sparkles" class="w-4 h-4 text-wf-dark"></i>
                <span>Check Pre-Approved Loan</span>
              </a>
            </div>

            <!-- Trust Badges Bar -->
            <div class="pt-4 grid grid-cols-3 gap-2 sm:gap-4 text-left border-t border-wf-border max-w-xl mx-auto lg:mx-0">
              <div class="flex items-center gap-2 sm:gap-2.5">
                <div class="w-8 h-8 rounded-md bg-wf-muted border border-wf-border flex items-center justify-center text-wf-dark flex-shrink-0">
                  <i data-lucide="clock" class="w-4 h-4"></i>
                </div>
                <div>
                  <div class="font-semibold text-xs sm:text-sm text-wf-dark leading-tight">24/7 Dedicated</div>
                  <div class="text-[10px] sm:text-xs text-wf-subtext">Loan Team</div>
                </div>
              </div>

              <div class="flex items-center gap-2 sm:gap-2.5">
                <div class="w-8 h-8 rounded-md bg-wf-muted border border-wf-border flex items-center justify-center text-wf-dark flex-shrink-0">
                  <i data-lucide="percent" class="w-4 h-4"></i>
                </div>
                <div>
                  <div class="font-semibold text-xs sm:text-sm text-wf-dark leading-tight">Low Rates</div>
                  <div class="text-[10px] sm:text-xs text-wf-subtext">From 9.99%</div>
                </div>
              </div>

              <div class="flex items-center gap-2 sm:gap-2.5">
                <div class="w-8 h-8 rounded-md bg-wf-muted border border-wf-border flex items-center justify-center text-wf-dark flex-shrink-0">
                  <i data-lucide="shield-check" class="w-4 h-4"></i>
                </div>
                <div>
                  <div class="font-semibold text-xs sm:text-sm text-wf-dark leading-tight">100% Win</div>
                  <div class="text-[10px] sm:text-xs text-wf-subtext">Guaranteed</div>
                </div>
              </div>
            </div>

          </div>

          <!-- Right Column: 24/7 Instant Sanction Card (Fluid Heights & Touch Controls) -->
          <div class="lg:col-span-5 w-full">
            
            <div class="relative rounded-xl bg-white border border-wf-border p-5 sm:p-7 text-wf-text space-y-4 sm:space-y-5 lg:min-h-[530px] flex flex-col justify-between shadow-xs">
              
              <!-- Card Header -->
              <div class="border-b border-wf-border pb-3 flex items-center justify-between flex-shrink-0">
                <div class="flex items-center gap-2.5 sm:gap-3">
                  <div class="w-9 h-9 sm:w-10 sm:h-10 rounded-lg bg-wf-dark text-white flex items-center justify-center font-bold">
                    <i data-lucide="shield-check" class="w-4 h-4 sm:w-5 sm:h-5"></i>
                  </div>
                  <div class="text-left">
                    <h3 class="font-sans font-bold text-base sm:text-lg text-wf-dark leading-tight">24/7 Instant Sanction</h3>
                    <p class="text-[11px] sm:text-xs text-wf-subtext mt-0.5">Dedicated Loan Desk Available Round the Clock</p>
                  </div>
                </div>
                <span class="px-2 py-0.5 sm:px-2.5 sm:py-1 rounded bg-wf-pastelGreen text-wf-pastelGreenText font-mono text-[10px] sm:text-[11px] font-bold border border-emerald-200">
                  24/7 ACTIVE
                </span>
              </div>

              ${step === 1 ? `
                <!-- Step 1: Sliders Form -->
                <div class="space-y-3.5 sm:space-y-4 flex-1 flex flex-col justify-between py-1">
                  
                  <!-- Slider 1: Loan Amount -->
                  <div class="space-y-1.5 text-left">
                    <div class="flex justify-between text-xs sm:text-sm">
                      <span class="text-wf-subtext font-medium">Loan Amount</span>
                      <span id="hero-amount-val" class="font-mono font-bold text-wf-dark text-sm sm:text-base">₹ ${calc.amount.toLocaleString('en-IN')}</span>
                    </div>
                    <input 
                      type="range" 
                      id="hero-amount-slider" 
                      min="50000" 
                      max="3000000" 
                      step="25000" 
                      value="${calc.amount}" 
                      class="w-full touch-target"
                    />
                    <div class="flex justify-between text-[10px] text-wf-subtext font-mono">
                      <span>₹ 50,000</span>
                      <span>₹ 30 Lakh</span>
                    </div>
                  </div>

                  <!-- Slider 2: Interest Rate -->
                  <div class="space-y-1.5 text-left">
                    <div class="flex justify-between text-xs sm:text-sm">
                      <span class="text-wf-subtext font-medium">Interest Rate (% p.a.)</span>
                      <span id="hero-rate-val" class="font-mono font-bold text-wf-dark text-sm sm:text-base">${calc.rate}% p.a.</span>
                    </div>
                    <input 
                      type="range" 
                      id="hero-rate-slider" 
                      min="8.5" 
                      max="18.0" 
                      step="0.25" 
                      value="${calc.rate}" 
                      class="w-full touch-target"
                    />
                    <div class="flex justify-between text-[10px] text-wf-subtext font-mono">
                      <span>8.5% (Min)</span>
                      <span>18.0% (Max)</span>
                    </div>
                  </div>

                  <!-- Slider 3: Tenure -->
                  <div class="space-y-1.5 text-left">
                    <div class="flex justify-between text-xs sm:text-sm">
                      <span class="text-wf-subtext font-medium">Tenure (Months)</span>
                      <span id="hero-tenure-val" class="font-mono font-bold text-wf-dark text-sm sm:text-base">${calc.tenure} Months</span>
                    </div>
                    <input 
                      type="range" 
                      id="hero-tenure-slider" 
                      min="12" 
                      max="60" 
                      step="6" 
                      value="${calc.tenure}" 
                      class="w-full touch-target"
                    />
                    <div class="flex justify-between text-[10px] text-wf-subtext font-mono">
                      <span>12 Mos</span>
                      <span>60 Mos</span>
                    </div>
                  </div>

                  <!-- Calculated EMI Box & Button -->
                  <div class="rounded-lg bg-wf-muted border border-wf-border p-3.5 sm:p-4 space-y-3 mt-2 text-left">
                    <div class="flex items-center justify-between">
                      <div>
                        <div class="text-[10px] text-wf-subtext font-bold uppercase tracking-wider font-mono">Estimated Monthly EMI</div>
                        <div id="hero-calculated-emi" class="font-mono font-bold text-xl sm:text-2xl text-wf-dark mt-0.5">
                          ₹ ${calc.emi.toLocaleString('en-IN')} / mo
                        </div>
                      </div>
                    </div>

                    <button 
                      id="btn-hero-calculate-apply"
                      class="w-full py-3 sm:py-3.5 px-5 rounded-lg bg-wf-dark hover:bg-wf-darkHover text-white font-semibold text-xs sm:text-sm flex items-center justify-center gap-2 active:scale-98 transition-all touch-target"
                    >
                      <span>Calculate & Apply</span>
                      <i data-lucide="arrow-right" class="w-4 h-4 text-white"></i>
                    </button>
                  </div>

                </div>
              ` : `
                <!-- Step 2: Inline Summary + Back Button + 2-Stage Mobile OTP -->
                <div class="space-y-4 flex-1 flex flex-col justify-between py-1 animate-fade-in text-left">
                  
                  <!-- Header with Back Button -->
                  <div class="flex items-center justify-between border-b border-wf-border pb-2">
                    <button 
                      id="btn-hero-edit-summary" 
                      class="inline-flex items-center gap-1.5 text-xs font-semibold text-wf-dark hover:text-wf-subtext bg-wf-muted px-3 py-1.5 rounded border border-wf-border transition-colors touch-target"
                    >
                      <i data-lucide="arrow-left" class="w-4 h-4"></i>
                      <span>Back</span>
                    </button>
                    <span class="text-xs font-semibold text-wf-dark">Filled Loan Summary</span>
                  </div>

                  <!-- Loan Summary Table -->
                  <div class="p-3.5 sm:p-4 rounded-lg bg-wf-muted border border-wf-border space-y-2">
                    <div class="grid grid-cols-2 gap-2 sm:gap-3 text-xs">
                      <div>
                        <span class="text-[9px] sm:text-[10px] text-wf-subtext block uppercase font-mono font-bold">Loan Amount</span>
                        <strong class="text-wf-dark font-mono font-bold text-xs sm:text-sm">₹ ${calc.amount.toLocaleString('en-IN')}</strong>
                      </div>
                      <div>
                        <span class="text-[9px] sm:text-[10px] text-wf-subtext block uppercase font-mono font-bold">Tenure & Rate</span>
                        <strong class="text-wf-dark font-mono font-bold text-xs sm:text-sm">${calc.tenure} Mos @ ${calc.rate}%</strong>
                      </div>
                      <div>
                        <span class="text-[9px] sm:text-[10px] text-wf-subtext block uppercase font-mono font-bold">Monthly EMI</span>
                        <strong class="text-wf-dark font-mono font-bold text-xs sm:text-sm">₹ ${calc.emi.toLocaleString('en-IN')} / mo</strong>
                      </div>
                      <div>
                        <span class="text-[9px] sm:text-[10px] text-wf-subtext block uppercase font-mono font-bold">Total Payable</span>
                        <strong class="text-wf-dark font-mono font-bold text-xs sm:text-sm">₹ ${calc.totalPayable.toLocaleString('en-IN')}</strong>
                      </div>
                    </div>
                  </div>

                  <!-- 2-Stage Mobile & OTP Verification Form -->
                  <form id="hero-inline-otp-form" class="space-y-3">
                    
                    <div class="space-y-1">
                      <label class="block text-xs font-semibold uppercase text-wf-dark font-mono">Mobile Number for Verification</label>
                      <div class="flex gap-2">
                        <div class="relative flex-1 flex items-center">
                          <span class="absolute left-3 text-xs font-mono font-bold text-wf-subtext">+91</span>
                          <input 
                            type="tel" 
                            id="hero-inline-mobile" 
                            required 
                            maxlength="10" 
                            placeholder="98765 43210" 
                            value="${userMobile || '9876543210'}"
                            class="w-full pl-11 pr-2 py-2.5 rounded-lg border border-wf-border font-mono text-xs sm:text-sm font-semibold text-wf-dark outline-none focus:border-wf-dark"
                          />
                        </div>
                        <button 
                          type="button" 
                          id="btn-hero-send-otp" 
                          class="px-3.5 py-2.5 rounded-lg ${otpSent ? 'bg-wf-pastelGreen text-wf-pastelGreenText border border-emerald-300' : 'bg-wf-dark hover:bg-wf-darkHover text-white'} font-semibold text-xs flex-shrink-0 transition-colors touch-target"
                        >
                          ${otpSent ? '✓ Sent' : 'Send OTP'}
                        </button>
                      </div>
                    </div>

                    <!-- Exactly 4 OTP Input Boxes -->
                    <div class="space-y-1 ${otpSent ? 'opacity-100' : 'opacity-50 pointer-events-none'} transition-opacity">
                      <div class="flex justify-between items-center">
                        <label class="block text-[11px] font-semibold uppercase text-wf-dark font-mono">Enter 4-Digit OTP</label>
                        <span class="text-[10px] font-mono text-wf-pastelGreenText font-bold">${otpSent ? 'Auto-filled (1234)' : 'Click Send OTP'}</span>
                      </div>
                      <div class="grid grid-cols-4 gap-1.5 sm:gap-2">
                        <input type="text" value="${otpSent ? '1' : ''}" readonly class="py-2 rounded bg-wf-muted border border-wf-border font-mono text-sm font-bold text-center text-wf-dark" />
                        <input type="text" value="${otpSent ? '2' : ''}" readonly class="py-2 rounded bg-wf-muted border border-wf-border font-mono text-sm font-bold text-center text-wf-dark" />
                        <input type="text" value="${otpSent ? '3' : ''}" readonly class="py-2 rounded bg-wf-muted border border-wf-border font-mono text-sm font-bold text-center text-wf-dark" />
                        <input type="text" value="${otpSent ? '4' : ''}" readonly class="py-2 rounded bg-wf-muted border border-wf-border font-mono text-sm font-bold text-center text-wf-dark" />
                      </div>
                    </div>

                    <!-- Submit Button -->
                    <button 
                      type="submit"
                      id="btn-hero-submit-app"
                      ${otpSent ? '' : 'disabled'}
                      class="w-full py-3 px-4 rounded-lg ${otpSent ? 'bg-wf-dark hover:bg-wf-darkHover text-white cursor-pointer' : 'bg-zinc-200 text-zinc-400 cursor-not-allowed'} font-semibold text-xs sm:text-sm flex items-center justify-center gap-2 transition-all touch-target"
                    >
                      <i data-lucide="check-circle" class="w-4 h-4"></i>
                      <span>Verify & Submit Application</span>
                    </button>
                  </form>

                </div>
              `}

              <div class="text-[11px] text-wf-subtext text-center flex items-center justify-center gap-1.5 pt-2 border-t border-wf-border flex-shrink-0">
                <i data-lucide="shield-check" class="w-4 h-4 text-wf-dark"></i>
                <span>Direct submission to 24/7 dedicated loan desk.</span>
              </div>

            </div>

          </div>

        </div>

      </div>

      <!-- BOTTOM BANNER TICKER -->
      <div class="w-full bg-white border-t border-wf-border py-2.5 sm:py-3 px-4 relative z-20 flex-shrink-0">
        <div class="max-w-7xl mx-auto flex flex-wrap items-center justify-center sm:justify-between gap-2.5 text-center sm:text-left">
          
          <div class="flex items-center gap-2 sm:gap-2.5">
            <i data-lucide="sparkles" class="w-4 h-4 text-wf-dark"></i>
            <div class="font-mono text-xs sm:text-sm text-wf-dark tracking-wide uppercase font-bold">
              Shubh Diwali & Festive Offers
            </div>
          </div>

          <div class="flex items-center gap-2 sm:gap-3 text-xs font-semibold text-wf-subtext">
            <span class="px-2.5 py-1 rounded bg-wf-pastelYellow text-wf-pastelYellowText border border-amber-200 font-mono text-[10px] sm:text-xs font-bold">
              Guaranteed Brand Rewards
            </span>
            <span class="hidden md:inline text-xs font-mono">
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
      store.state.heroOtpSent = false;
      store.setHeroStep(2);
    });
  }

  const btnEdit = document.getElementById('btn-hero-edit-summary');
  if (btnEdit) {
    btnEdit.addEventListener('click', () => {
      store.setHeroStep(1);
    });
  }

  const btnSendOtp = document.getElementById('btn-hero-send-otp');
  if (btnSendOtp) {
    btnSendOtp.addEventListener('click', () => {
      const mobileVal = document.getElementById('hero-inline-mobile')?.value?.trim() || '9876543210';
      store.state.heroOtpSent = true;
      store.showToast(`OTP 1234 sent to +91 ${mobileVal}!`);
      store.notify();
    });
  }

  const otpForm = document.getElementById('hero-inline-otp-form');
  if (otpForm) {
    otpForm.addEventListener('submit', (e) => {
      e.preventDefault();
      if (!store.state.heroOtpSent) return;

      const mobileVal = document.getElementById('hero-inline-mobile')?.value?.trim() || '9876543210';
      store.loginUser(mobileVal);
      store.showToast(`Application submitted! Sanction details sent to +91 ${mobileVal}`);
      store.setHeroStep(1);
    });
  }
}
