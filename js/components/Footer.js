// Footer Component - Wireframe Theme

export function renderFooter() {
  return `
    <footer class="bg-wf-dark text-white border-t border-wf-border pt-12 pb-8">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        <!-- Main Footer Top Row -->
        <div class="grid grid-cols-1 md:grid-cols-12 gap-8 pb-8 border-b border-zinc-800">
          
          <!-- Brand Info -->
          <div class="md:col-span-4 space-y-4">
            <div class="flex items-center gap-3">
              <div class="w-10 h-10 rounded-xl bg-white text-wf-dark font-outfit font-extrabold text-xl flex items-center justify-center">
                PF
              </div>
              <div>
                <div class="font-outfit font-extrabold text-lg text-white tracking-tight">POONAWALLA FINCORP</div>
                <div class="text-[10px] text-zinc-400 tracking-widest uppercase font-semibold">Festive Engagement Wireframe</div>
              </div>
            </div>

            <p class="text-xs text-zinc-400 leading-relaxed">
              Poonawalla Fincorp Limited (Formerly Magma Fincorp Limited) is a Systemically Important Non-Banking Financial Company (NBFC-ND-SI) registered with the Reserve Bank of India.
            </p>

            <div class="flex items-center gap-3 text-xs text-zinc-300">
              <span class="flex items-center gap-1"><i data-lucide="shield-check" class="w-4 h-4 text-emerald-400"></i> RBI Regulated</span>
              <span class="text-zinc-600">•</span>
              <span class="flex items-center gap-1"><i data-lucide="lock" class="w-4 h-4 text-zinc-400"></i> 256-bit Encrypted</span>
            </div>
          </div>

          <!-- Quick Navigation Links -->
          <div class="md:col-span-3 space-y-3">
            <h4 class="font-outfit font-bold text-sm text-zinc-300 uppercase tracking-wider">Festive Games</h4>
            <ul class="space-y-2 text-xs text-zinc-400">
              <li><a href="#play-win" class="hover:text-white transition-colors">Spin & Win Wheel</a></li>
              <li><a href="#play-win" class="hover:text-white transition-colors">Golden Scratch Card</a></li>
              <li><a href="#play-win" class="hover:text-white transition-colors">3-Card Shuffle Pick</a></li>
              <li><a href="#offers" class="hover:text-white transition-colors">Top Festive Partner Offers</a></li>
              <li><a href="#vouchers" class="hover:text-white transition-colors">Instant Brand Vouchers</a></li>
            </ul>
          </div>

          <div class="md:col-span-3 space-y-3">
            <h4 class="font-outfit font-bold text-sm text-zinc-300 uppercase tracking-wider">Financial Solutions</h4>
            <ul class="space-y-2 text-xs text-zinc-400">
              <li><a href="#preapproved" class="hover:text-white transition-colors">Pre-Approved ₹15 Lakh Loan</a></li>
              <li><a href="#pfin-card" class="hover:text-white transition-colors">Digital PFIN Credit Card</a></li>
              <li><a href="#services" class="hover:text-white transition-colors">Instant Personal Loans</a></li>
              <li><a href="#services" class="hover:text-white transition-colors">Business & Gold Loans</a></li>
              <li><a href="#explore" class="hover:text-white transition-colors">Free CIBIL Credit Check</a></li>
            </ul>
          </div>

          <!-- Contact & Support -->
          <div class="md:col-span-2 space-y-3">
            <h4 class="font-outfit font-bold text-sm text-zinc-300 uppercase tracking-wider">Customer Care</h4>
            <div class="space-y-2 text-xs text-zinc-400">
              <div class="font-semibold text-white">Toll-Free Helpline:</div>
              <div class="font-mono text-sm text-white font-bold">1800-266-3201</div>
              <div class="text-[11px] text-zinc-500">Mon-Sat (9:00 AM to 6:00 PM)</div>
              <div class="pt-2 text-zinc-400">customercare@poonawallafincorp.com</div>
            </div>
          </div>

        </div>

        <!-- Bottom Copyright Row -->
        <div class="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-400 pt-4">
          <div>
            © 2026 Poonawalla Fincorp Limited. Wireframe Edition.
          </div>

          <div class="flex items-center space-x-4">
            <a href="#" class="hover:text-white transition-colors">Terms & Conditions</a>
            <span>•</span>
            <a href="#" class="hover:text-white transition-colors">Privacy Policy</a>
            <span>•</span>
            <a href="#" class="hover:text-white transition-colors">Fair Practices Code</a>
          </div>
        </div>

      </div>
    </footer>
  `;
}
