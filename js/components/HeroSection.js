// Master Hero Section Component with 1-Screen Viewport Fit, Fixed Card Container & 2-Stage OTP Verification
import { store } from '../state.js';

export function renderHeroSection() {
  const state = store.getState();
  const step = state.heroStep;
  const calc = state.heroCalculatedData;
  const userMobile = state.userSession.mobileNumber || '';
  const otpSent = state.heroOtpSent || false;

  return `
    <section id="hero" class="relative bg-wf-bg text-wf-text overflow-hidden border-b border-wf-border bg-wireframe-grid h-[calc(100vh-80px)] min-h-[640px] flex flex-col justify-between">
      
      <!-- Top / Center Content -->
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full flex-1 flex items-center py-2 sm:py-4">
        
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center w-full">
          
          <!-- Left Column: Headline & Value Propositions -->
          <div class="lg:col-span-7 space-y-4 text-center lg:text-left">
            
            <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-wf-border text-wf-dark text-xs font-semibold shadow-xs">
              <span class="w-2 h-2 rounded-full bg-wf-dark animate-ping"></span>
              <span>Poonawalla Fincorp Master Section</span>
              <i data-lucide="sparkles" class="w-3.5 h-3.5 text-wf-dark"></i>
            </div>

            <!-- Main Headline -->
            <h1 class="font-outfit text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-extrabold tracking-tight text-wf-dark leading-tight">
              Welcome to the <br />
              <span class="text-wf-subtext">Festive Rewards Hub</span>
            </h1>

            <!-- Subtitle -->
            <p class="text-wf-subtext text-xs sm:text-sm md:text-base font-normal max-w-xl mx-auto lg:mx-0 leading-relaxed">
              Celebrate this festive season with instant pre-approved loans, zero processing fees, and guaranteed brand gift vouchers! Play games to unlock exciting festive rewards.
            </p>

            <!-- Dual Action CTAs -->
            <div class="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 pt-1">
              <a 
                href="#play-win"
                class="w-full sm:w-auto px-5 py-3 rounded-xl bg-wf-dark hover:bg-wf-darkHover text-white font-extrabold text-xs sm:text-sm flex items-center justify-center gap-2 shadow-xs active:scale-98 transition-all group"
              >
                <i data-lucide="gamepad-2" class="w-4 h-4 text-white"></i>
                <span>Play & Win Rewards</span>
                <i data-lucide="arrow-right" class="w-4 h-4 text-white group-hover:translate-x-1 transition-transform"></i>
              </a>

              <a 
                href="#preapproved"
                class="w-full sm:w-auto px-5 py-3 rounded-xl bg-white hover:bg-wf-muted border border-wf-border text-wf-dark font-bold text-xs sm:text-sm flex items-center justify-center gap-2 active:scale-98 transition-all"
              >
                <i data-lucide="sparkles" class="w-4 h-4 text-wf-dark"></i>
                <span>Check Pre-Approved Loan</span>
              </a>
            </div>

            <!-- Trust Badges Bar -->
            <div class="pt-3 grid grid-cols-3 gap-2 sm:gap-3 text-left border-t border-wf-border max-w-lg mx-auto lg:mx-0">
              <div class="flex items-center gap-2">
                <div class="w-7 h-7 rounded-lg bg-wf-muted border border-wf-border flex items-center justify-center text-wf-dark flex-shrink-0">
                  <i data-lucide="clock" class="w-3.5 h-3.5"></i>
                </div>
                <div>
                  <div class="font-bold text-xs text-wf-dark leading-tight">24/7 Dedicated</div>
                  <div class="text-[10px] text-wf-subtext">Loan Team</div>
                </div>
              </div>

              <div class="flex items-center gap-2">
                <div class="w-7 h-7 rounded-lg bg-wf-muted border border-wf-border flex items-center justify-center text-wf-dark flex-shrink-0">
                  <i data-lucide="percent" class="w-3.5 h-3.5"></i>
                </div>
                <div>
                  <div class="font-bold text-xs text-wf-dark leading-tight">Low Rates</div>
                  <div class="text-[10px] text-wf-subtext">From 9.99%</div>
                </div>
              </div>

              <div class="flex items-center gap-2">
                <div class="w-7 h-7 rounded-lg bg-wf-muted border border-wf-border flex items-center justify-center text-wf-dark flex-shrink-0">
                  <i data-lucide="gift" class="w-3.5 h-3.5"></i>
                </div>
                <div>
                  <div class="font-bold text-xs text-wf-dark leading-tight">100% Win</div>
                  <div class="text-[10px] text-wf-subtext">Guaranteed</div>
                </div>
              </div>
            </div>

          </div>

          <!-- Right Column: 24/7 Instant Sanction Card (Fixed Size Container) -->
          <div class="lg:col-span-5">
            
            <div class="relative rounded-3xl bg-white border-2 border-wf-border p-5 sm:p-6 shadow-md text-wf-text space-y-4 h-[460px] flex flex-col justify-between overflow-y-auto">
              
              <!-- Card Header -->
              <div class="border-b border-wf-border pb-2.5 flex items-center justify-between flex-shrink-0">
                <div class="flex items-center gap-2.5">
                  <div class="w-9 h-9 rounded-xl bg-wf-dark text-white flex items-center justify-center font-bold">
                    <i data-lucide="shield-check" class="w-4 h-4"></i>
                  </div>
                  <div>
                    <h3 class="font-outfit font-extrabold text-base text-wf-dark leading-tight">24/7 Instant Sanction</h3>
                    <p class="text-[11px] text-wf-subtext">Dedicated Loan Team Available Round the Clock</p>
                  </div>
                </div>
                <span class="px-2 py-0.5 rounded bg-emerald-100 text-emerald-900 font-mono text-[10px] font-bold border border-emerald-300">
                  24/7 ACTIVE
                </span>
              </div>

              ${step === 1 ? `
                <!-- Step 1: Sliders Form (Amount, Interest Rate, Tenure) -->
                <div class="space-y-3.5 flex-1 flex flex-col justify-center">
                  
                  <!-- Slider 1: Loan Amount -->
                  <div class="space-y-1">
                    <div class="flex justify-between text-xs">
                      <span class="text-wf-subtext font-semibold">Loan Amount</span>
                      <span id="hero-amount-val" class="font-outfit font-extrabold text-wf-dark text-sm">₹ ${calc.amount.toLocaleString('en-IN')}</span>
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
                    <div class="flex justify-between text-[9px] text-wf-subtext font-mono">
                      <span>₹ 50,000</span>
                      <span>₹ 30 Lakh</span>
                    </div>
                  </div>

                  <!-- Slider 2: Interest Rate -->
                  <div class="space-y-1">
                    <div class="flex justify-between text-xs">
                      <span class="text-wf-subtext font-semibold">Interest Rate (% p.a.)</span>
                      <span id="hero-rate-val" class="font-outfit font-extrabold text-wf-dark text-sm">${calc.rate}% p.a.</span>
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
                    <div class="flex justify-between text-[9px] text-wf-subtext font-mono">
                      <span>8.5% (Min)</span>
                      <span>18.0% (Max)</span>
                    </div>
                  </div>

                  <!-- Slider 3: Tenure -->
                  <div class="space-y-1">
                    <div class="flex justify-between text-xs">
                      <span class="text-wf-subtext font-semibold">Tenure (Months)</span>
                      <span id="hero-tenure-val" class="font-outfit font-extrabold text-wf-dark text-sm">${calc.tenure} Months</span>
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
                    <div class="flex justify-between text-[9px] text-wf-subtext font-mono">
                      <span>12 Mos</span>
                      <span>60 Mos</span>
                    </div>
                  </div>

                  <!-- Calculated EMI Box & Calculate & Apply Button -->
                  <div class="rounded-xl bg-wf-muted border border-wf-border p-3 space-y-2">
                    <div class="flex items-center justify-between">
                      <div>
                        <div class="text-[9px] text-wf-subtext font-bold uppercase tracking-wider">Estimated Monthly EMI</div>
                        <div id="hero-calculated-emi" class="font-outfit font-black text-xl text-wf-dark mt-0.5">
                          ₹ ${calc.emi.toLocaleString('en-IN')} / mo
                        </div>
                      </div>
                    </div>

                    <button 
                      id="btn-hero-calculate-apply"
                      class="w-full py-2.5 px-4 rounded-xl bg-wf-dark hover:bg-wf-darkHover text-white font-extrabold text-xs sm:text-sm flex items-center justify-center gap-2 active:scale-98 transition-all shadow-xs"
                    >
                      <span>Calculate & Apply</span>
                      <i data-lucide="arrow-right" class="w-4 h-4 text-white"></i>
                    </button>
                  </div>

                </div>
              ` : `
                <!-- Step 2: Inline Summary + Back Button + 2-Stage Mobile OTP -->
                <div class="space-y-3 flex-1 flex flex-col justify-between animate-fade-in text-left">
                  
                  <!-- Header with Explicit Back Button -->
                  <div class="flex items-center justify-between border-b border-wf-border pb-1.5">
                    <button 
                      id="btn-hero-edit-summary" 
                      class="inline-flex items-center gap-1 text-xs font-bold text-wf-dark hover:text-wf-subtext bg-wf-muted hover:bg-zinc-200 px-2.5 py-1 rounded-lg border border-wf-border transition-colors"
                    >
                      <i data-lucide="arrow-left" class="w-3.5 h-3.5"></i>
                      <span>Back</span>
                    </button>
                    <span class="text-[11px] font-bold text-wf-dark">Filled Loan Summary</span>
                  </div>

                  <!-- Loan Summary Table -->
                  <div class="p-3 rounded-xl bg-wf-muted border border-wf-border space-y-1.5">
                    <div class="grid grid-cols-2 gap-2 text-xs">
                      <div>
                        <span class="text-[9px] text-wf-subtext block uppercase font-bold">Loan Amount</span>
                        <strong class="text-wf-dark font-mono font-bold text-xs">₹ ${calc.amount.toLocaleString('en-IN')}</strong>
                      </div>
                      <div>
                        <span class="text-[9px] text-wf-subtext block uppercase font-bold">Tenure & Rate</span>
                        <strong class="text-wf-dark font-mono font-bold text-xs">${calc.tenure} Mos @ ${calc.rate}%</strong>
                      </div>
                      <div>
                        <span class="text-[9px] text-wf-subtext block uppercase font-bold">Monthly EMI</span>
                        <strong class="text-emerald-700 font-mono font-extrabold text-xs">₹ ${calc.emi.toLocaleString('en-IN')} / mo</strong>
                      </div>
                      <div>
                        <span class="text-[9px] text-wf-subtext block uppercase font-bold">Total Payable</span>
                        <strong class="text-wf-dark font-mono font-bold text-xs">₹ ${calc.totalPayable.toLocaleString('en-IN')}</strong>
                      </div>
                    </div>
                  </div>

                  <!-- 2-Stage Mobile & OTP Verification Form -->
                  <form id="hero-inline-otp-form" class="space-y-2.5">
                    
                    <div class="space-y-1">
                      <label class="block text-[11px] font-bold uppercase text-wf-dark">Mobile Number for Verification</label>
                      <div class="flex gap-1.5">
                        <div class="relative flex-1 flex items-center">
                          <span class="absolute left-2.5 text-xs font-bold text-wf-subtext">+91</span>
                          <input 
                            type="tel" 
                            id="hero-inline-mobile" 
                            required 
                            maxlength="10" 
                            placeholder="98765 43210" 
                            value="${userMobile || '9876543210'}"
                            class="w-full pl-10 pr-2 py-2 rounded-xl border border-wf-border font-mono text-xs font-semibold text-wf-dark outline-none focus:border-wf-dark"
                          />
                        </div>
                        <button 
                          type="button" 
                          id="btn-hero-send-otp" 
                          class="px-3 py-2 rounded-xl ${otpSent ? 'bg-emerald-600 text-white' : 'bg-wf-dark hover:bg-wf-darkHover text-white'} font-bold text-xs flex-shrink-0 transition-colors"
                        >
                          ${otpSent ? '✓ Sent' : 'Send OTP'}
                        </button>
                      </div>
                    </div>

                    <!-- OTP Input Box (Disabled until OTP is sent) -->
                    <div class="space-y-1 ${otpSent ? 'opacity-100' : 'opacity-50 pointer-events-none'} transition-opacity">
                      <div class="flex justify-between items-center">
                        <label class="block text-[10px] font-bold uppercase text-wf-dark">Enter 4-Digit OTP</label>
                        <span class="text-[9px] font-bold text-emerald-700">${otpSent ? 'Auto-filled (1234)' : 'Click Send OTP'}</span>
                      </div>
                      <div class="grid grid-cols-4 gap-1.5">
                        <input type="text" value="${otpSent ? '1' : ''}" readonly class="py-1.5 rounded-lg bg-wf-muted border border-wf-border font-mono text-sm font-bold text-center text-wf-dark" />
                        <input type="text" value="${otpSent ? '2' : ''}" readonly class="py-1.5 rounded-lg bg-wf-muted border border-wf-border font-mono text-sm font-bold text-center text-wf-dark" />
                        <input type="text" value="${otpSent ? '3' : ''}" readonly class="py-1.5 rounded-lg bg-wf-muted border border-wf-border font-mono text-sm font-bold text-center text-wf-dark" />
                        <input type="text" value="${otpSent ? '4' : ''}" readonly class="py-1.5 rounded-lg bg-wf-muted border border-wf-border font-mono text-sm font-bold text-center text-wf-dark" />
                      </div>
                    </div>

                    <!-- Submit Button (Disabled until OTP is sent) -->
                    <button 
                      type="submit"
                      id="btn-hero-submit-app"
                      ${otpSent ? '' : 'disabled'}
                      class="w-full py-2.5 px-4 rounded-xl ${otpSent ? 'bg-wf-dark hover:bg-wf-darkHover text-white cursor-pointer' : 'bg-zinc-300 text-zinc-500 cursor-not-allowed'} font-extrabold text-xs flex items-center justify-center gap-2 shadow-xs transition-all"
                    >
                      <i data-lucide="check-circle" class="w-4 h-4"></i>
                      <span>Verify & Submit Application</span>
                    </button>
                  </form>

                </div>
              `}

              <div class="text-[10px] text-wf-subtext text-center flex items-center justify-center gap-1 pt-1 border-t border-wf-border flex-shrink-0">
                <i data-lucide="shield-check" class="w-3.5 h-3.5 text-emerald-600"></i>
                <span>Direct submission to 24/7 dedicated loan desk.</span>
              </div>

            </div>

          </div>

        </div>

      </div>

      <!-- BOTTOM BANNER DIYA TICKER (Fits cleanly in 1-screen viewport) -->
      <div class="w-full bg-white border-t-2 border-wf-border py-2.5 px-4 shadow-xs relative z-20 flex-shrink-0">
        <div class="max-w-7xl mx-auto flex flex-wrap items-center justify-center sm:justify-between gap-2 text-center sm:text-left">
          
          <div class="flex items-center gap-2.5">
            <div class="w-6 h-6 flex items-center justify-center text-wf-dark">
              <svg class="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C10.5 4.5 9 6.5 9 9C9 10.66 10.34 12 12 12C13.66 12 15 10.66 15 9C15 6.5 13.5 4.5 12 2Z" fill="#27272A" />
                <path d="M4 14C4 17.31 7.58 20 12 20C16.42 20 20 17.31 20 14C20 13.5 4.5 13 4 14Z" fill="#71717A" />
              </svg>
            </div>
            <div class="font-outfit font-extrabold text-xs sm:text-sm text-wf-dark tracking-wide uppercase">
              ✨ Shubh Diwali & Festive Offers 🪔
            </div>
          </div>

          <div class="flex items-center gap-2 text-xs font-semibold text-wf-subtext">
            <span class="px-2 py-0.5 rounded bg-wf-muted text-wf-dark border border-wf-border font-bold text-[11px]">
              Guaranteed Brand Rewards
            </span>
            <span class="hidden md:inline text-[11px]">
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
