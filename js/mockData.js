// Poonawalla Fincorp Festive Engagement Microsite Mock Data

export const mockData = {
  // Top Festive Season Partner Offers
  topOffers: [
    {
      id: 'offer-1',
      brand: 'Amazon',
      logoBg: 'bg-[#FF9900]/10',
      logoText: 'text-[#FF9900]',
      logoIcon: 'shopping-bag',
      title: 'Flat ₹500 Amazon Gift Voucher',
      shortDesc: 'Valid on festive shopping of ₹2,500 and above via Amazon Pay.',
      discount: '₹500 OFF',
      category: 'Shopping',
      couponCode: 'PFINAMZ500',
      expiryDays: 15,
      channel: 'Online & Amazon App',
      redemptionSteps: [
        'Open Amazon App or Website & add items worth ₹2,500+ to cart.',
        'Go to Payment page and select Gift Cards & Vouchers.',
        'Enter code PFINAMZ500 to apply ₹500 discount instantly.'
      ],
      tnc: 'Valid for Poonawalla Fincorp customers. One claim per user session. Cannot be combined with other bank offers.'
    },
    {
      id: 'offer-2',
      brand: 'MakeMyTrip',
      logoBg: 'bg-[#EB2026]/10',
      logoText: 'text-[#EB2026]',
      logoIcon: 'plane',
      title: 'Up to ₹2,500 OFF on Domestic Flights',
      shortDesc: 'Enjoy special festive travel discounts on all flight bookings.',
      discount: '₹2,500 OFF',
      category: 'Travel',
      couponCode: 'PFINMMT2500',
      expiryDays: 30,
      channel: 'MakeMyTrip App & Web',
      redemptionSteps: [
        'Search flights on MakeMyTrip app or site.',
        'Enter coupon code PFINMMT2500 on the checkout screen.',
        'Pay using any net banking or debit/credit card.'
      ],
      tnc: 'Minimum booking value ₹6,500. Valid till festive end date.'
    },
    {
      id: 'offer-3',
      brand: 'Flipkart',
      logoBg: 'bg-[#2874F0]/10',
      logoText: 'text-[#2874F0]',
      logoIcon: 'tag',
      title: 'Extra 10% Instant Discount on Electronics',
      shortDesc: 'Save up to ₹1,500 on smartphones, laptops, and appliances.',
      discount: '10% OFF',
      category: 'Electronics',
      couponCode: 'PFINFLIP10',
      expiryDays: 12,
      channel: 'Flipkart App',
      redemptionSteps: [
        'Add eligible electronic products to Flipkart cart.',
        'Apply coupon PFINFLIP10 at payment checkout.',
        'Discount will automatically apply to final invoice.'
      ],
      tnc: 'Minimum transaction ₹5,000. Maximum discount ₹1,500.'
    },
    {
      id: 'offer-4',
      brand: 'Croma',
      logoBg: 'bg-[#00E5B7]/10',
      logoText: 'text-[#00A884]',
      logoIcon: 'tv',
      title: 'Flat ₹1,000 Voucher on Home Appliances',
      shortDesc: 'Upgrade your home this festive season with exclusive Croma savings.',
      discount: '₹1,000 OFF',
      category: 'Electronics',
      couponCode: 'PFINCROMA1K',
      expiryDays: 20,
      channel: 'In-store & Online',
      redemptionSteps: [
        'Visit Croma store or website croma.com.',
        'Present or enter coupon code PFINCROMA1K at billing counter or checkout.',
        'Instant ₹1,000 deduction on purchase above ₹8,000.'
      ],
      tnc: 'Applicable on select festive appliance ranges.'
    },
    {
      id: 'offer-5',
      brand: 'Tanishq',
      logoBg: 'bg-[#8B0000]/10',
      logoText: 'text-[#8B0000]',
      logoIcon: 'sparkles',
      title: '20% OFF on Gold & Diamond Making Charges',
      shortDesc: 'Add festive sparkle with premium handcrafted jewellery.',
      discount: '20% OFF',
      category: 'Jewellery',
      couponCode: 'PFINTANISHQ20',
      expiryDays: 25,
      channel: 'All Tanishq Showrooms',
      redemptionSteps: [
        'Visit any authorized Tanishq showroom.',
        'Show coupon SMS or voucher PFINTANISHQ20 at checkout.',
        'Get 20% discount on making charges.'
      ],
      tnc: 'Valid on minimum purchase of ₹35,000.'
    },
    {
      id: 'offer-6',
      brand: 'Swiggy Gourmet',
      logoBg: 'bg-[#FC8019]/10',
      logoText: 'text-[#FC8019]',
      logoIcon: 'utensils',
      title: 'Flat ₹200 OFF on Festive Sweets & Dining',
      shortDesc: 'Delicious festive treats delivered right to your doorstep.',
      discount: '₹200 OFF',
      category: 'Dining',
      couponCode: 'PFINSWIGGY200',
      expiryDays: 10,
      channel: 'Swiggy App',
      redemptionSteps: [
        'Order food or sweets on Swiggy App.',
        'Apply coupon code PFINSWIGGY200 before making payment.',
        'Enjoy instant ₹200 savings on min order of ₹599.'
      ],
      tnc: 'Valid on online payments.'
    }
  ],

  // Exciting Vouchers Rail
  excitingVouchers: [
    {
      id: 'vouch-1',
      brand: 'Myntra',
      discount: 'Flat ₹300 OFF',
      code: 'PFINMYN300',
      category: 'Fashion',
      bgGradient: 'from-pink-500 to-rose-600',
      desc: 'On minimum spend of ₹1,499 on festive wear.'
    },
    {
      id: 'vouch-2',
      brand: 'Zomato',
      discount: '50% OFF up to ₹150',
      code: 'PFINZOMATO50',
      category: 'Dining',
      bgGradient: 'from-red-500 to-red-700',
      desc: 'Festive feasts with family and friends.'
    },
    {
      id: 'vouch-3',
      brand: 'Uber',
      discount: '25% OFF 3 Rides',
      code: 'PFINUBER25',
      category: 'Travel',
      bgGradient: 'from-slate-800 to-black',
      desc: 'Seamless festive visits across the city.'
    },
    {
      id: 'vouch-4',
      brand: 'BookMyShow',
      discount: 'Buy 1 Get 1 Free',
      code: 'PFINBMSBOGO',
      category: 'Entertainment',
      bgGradient: 'from-indigo-600 to-purple-800',
      desc: 'Catch blockbuster festive movie releases.'
    }
  ],

  // Popular Poonawalla Fincorp Financial Services
  popularServices: [
    {
      id: 'serv-instant-loan',
      title: 'Instant Personal Loan',
      rate: 'From 9.99% p.a.',
      maxAmount: 'Up to ₹30 Lakh',
      desc: '100% Paperless, Instant Approval & 24-hour disbursal to fuel festive dreams.',
      badge: 'Zero Processing Fee',
      icon: 'zap',
      cta: 'Apply Instant Loan'
    },
    {
      id: 'serv-business-loan',
      title: 'Business Loan',
      rate: 'From 11.49% p.a.',
      maxAmount: 'Up to ₹50 Lakh',
      desc: 'Collateral-free business capital to expand inventory for the festive surge.',
      badge: 'Collateral Free',
      icon: 'briefcase',
      cta: 'Grow Business'
    },
    {
      id: 'serv-personal-loan',
      title: 'Personal Loan',
      rate: 'From 10.49% p.a.',
      maxAmount: 'Up to ₹30 Lakh',
      desc: 'Flexible EMIs up to 60 months with zero hidden charges and fast disbursal.',
      badge: 'Flexible EMI',
      icon: 'user-check',
      cta: 'Explore Personal Loan'
    },
    {
      id: 'serv-gold-loan',
      title: 'Gold Loan',
      rate: 'From 0.79% per month',
      maxAmount: 'Highest Per Gram Rate',
      desc: 'Unlock quick cash against gold jewellery with safe vault storage.',
      badge: 'Instant Cash in 30 Mins',
      icon: 'coins',
      cta: 'Get Gold Loan'
    },
    {
      id: 'serv-lap',
      title: 'Loan Against Property',
      rate: 'From 9.25% p.a.',
      maxAmount: 'Up to ₹5 Crore',
      desc: 'Leverage property value for big festive investments with high loan tenure.',
      badge: 'High Value Loan',
      icon: 'home',
      cta: 'Check LAP Rates'
    },
    {
      id: 'serv-preapproved',
      title: 'Pre-Approved Festive Loan',
      rate: 'Special 10.99% Rate',
      maxAmount: 'Up to ₹15 Lakh',
      desc: 'Specially pre-sanctioned offer with zero documentation for select customers.',
      badge: 'Exclusive Pre-approved',
      icon: 'gift',
      cta: 'Claim Pre-approved'
    }
  ],

  // Play & Win Games Config & Rewards
  gameRewards: {
    spinWheel: [
      { id: 'spin-1', title: 'Flat ₹500 Amazon Pay Voucher', code: 'SPINAMZ500', brand: 'Amazon Pay', desc: 'Instant credit to Amazon wallet.' },
      { id: 'spin-2', title: '0.50% Interest Rate Discount', code: 'SPINRATE050', brand: 'Poonawalla Fincorp', desc: 'Applied on Personal Loan rate.' },
      { id: 'spin-3', title: 'Flat ₹1,000 Cash Voucher', code: 'SPINCASH1K', brand: 'Festive Cash', desc: 'Redeemable on loan processing.' },
      { id: 'spin-4', title: '100% Processing Fee Waiver', code: 'SPINZEROFEES', brand: 'Poonawalla Fincorp', desc: 'Save up to ₹7,500 on fees.' },
      { id: 'spin-5', title: 'Flat ₹750 Myntra Gift Card', code: 'SPINMYN750', brand: 'Myntra', desc: 'Valid on festive apparel.' },
      { id: 'spin-6', title: 'Flat ₹1,500 MakeMyTrip Voucher', code: 'SPINMMT1500', brand: 'MakeMyTrip', desc: 'Valid on festive flight tickets.' }
    ],
    scratchCard: [
      { id: 'scratch-1', title: '🎉 ₹1,000 Cashback on PFIN Card', code: 'SCRATCHPFIN1K', brand: 'PFIN Card', desc: 'Credited on 1st digital card transaction.' },
      { id: 'scratch-2', title: '✨ Flat ₹500 Flipkart Gift Card', code: 'SCRATCHFLIP500', brand: 'Flipkart', desc: 'Valid on Big Billion Days.' },
      { id: 'scratch-3', title: '🎁 Zero EMI Processing Fee Coupon', code: 'SCRATCHNOFEE', brand: 'Poonawalla Fincorp', desc: 'Waiver on consumer loan.' }
    ],
    shuffleCard: [
      { id: 'shuffle-1', title: '🌟 Flat ₹2,000 Gold Loan Discount', code: 'SHUFFLEGOLD2K', brand: 'Gold Loan', desc: 'Discount on interest payable.' },
      { id: 'shuffle-2', title: '🔥 0.25% Extra Rate Cut on Personal Loan', code: 'SHUFFLECUT25', brand: 'Poonawalla Fincorp', desc: 'Special festive rate cut.' },
      { id: 'shuffle-3', title: '🛍️ Flat ₹750 Croma Electronics Voucher', code: 'SHUFFLECROMA750', brand: 'Croma', desc: 'Valid on festive gadgets.' }
    ]
  }
};
