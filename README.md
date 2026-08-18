# Poonawalla Fincorp - Festive Rewards & Offers Hub

A modern, mobile-first, fully responsive **Festive Engagement Microsite** for **Poonawalla Fincorp**, built with a clean Wireframe UI prototype architecture.

![Poonawalla Fincorp Festive Rewards Hub](https://img.shields.io/badge/Poonawalla_Fincorp-Festive_Rewards-18181B?style=for-the-badge)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![JavaScript ES6+](https://img.shields.io/badge/JavaScript-ES6+-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)

---

## 🌟 Features Overview

### 1. Master Hero Section & 24/7 Loan Desk
- **USP Highlight**: `24/7 Instant Sanction` dedicated loan department branding.
- **Interactive Quick EMI Calculator**: Real-time sliders for Loan Amount, Interest Rate (`8.5% - 18.0%`), and Tenure with monthly EMI & total payable breakdown.
- **Inline Application Swap**: Swaps form content *in-place* to display a filled summary, mobile number entry, and 4-digit OTP verification right inside the card (no intrusive modal popups).
- **Shubh Diwali & Festive Offers Ticker**: Aligned at the base of the Hero section with flickering Diya candle animations.

### 2. Top Navigation & User Session Management
- **Single-Line Responsive Bar**: Features `POONAWALLA FINCORP / Festive Rewards` branding.
- **Play & Win Dropdown Menu**: Direct shortcuts to `Spin & Win`, `Scratch Card`, and `Shuffle Card`.
- **Session Verification & Account Logout**: Verified state displays `+91 XXXXX XXXXX` with a dedicated **Logout / Remove Account** button.

### 3. Interactive Festive Playground (Play & Win)
- **Spin & Win**: Canvas/SVG wheel of fortune with physics rotation and guaranteed prize sector landing.
- **Scratch Card**: HTML5 Canvas touch/mouse drag scratch card with metallic foil reveal physics.
- **Shuffle Card**: 3-card Monte festive shuffle mini-game with card flips.
- **Visual Celebration**: **"YOU WON! 🎉"** modal popup with `canvas-confetti` explosions, promo codes, copy button, and redemption steps.

### 4. PFIN Digital Credit Card Showcase
- **3D Card Artwork**: Floating metallic digital card showcase with tilt and benefit highlights.
- **Inner Product Page**: Dedicated `#pfin-card-detail` view featuring `View Detail` and `Apply for PFIN Card` (prompts **ONLY for Mobile Number**).

### 5. Festive Offers & Partner Vouchers
- **Top Partner Offers**: Amazon, MakeMyTrip, Flipkart, Croma, Tanishq, Swiggy Gourmet.
- **Exciting Vouchers**: Myntra, Zomato, Uber, BookMyShow.
- **Inner Detail Tracking Pages**: Hash-based page router (`js/router.js`) rendering dedicated detail pages (`#offer-detail/:id`, `#voucher-detail/:id`, `#service-detail/:id`) for user event tracking.

### 6. Do More & Explore Self-Service Suite
- Direct redirects to official Poonawalla Fincorp website tools for `Get Doc Online`, `EMI Calculator`, and `Free CIBIL Score Check`.
- Shareable `Refer & Earn` dashboard link generator.

---

## 📁 Directory Structure

```text
├── index.html                  # HTML5 Entry Point & Tailwind Configuration
├── README.md                   # Project Documentation
├── css/
│   └── styles.css              # Custom Animations, Canvas Foil & Scrollbars
└── js/
    ├── app.js                  # Main Application Entry & Page Mount
    ├── router.js               # Hash-based Inner Page Router
    ├── state.js                # Centralized Reactive State Store
    ├── mockData.js             # Partner Offers, Vouchers & Game Rewards Data
    ├── pages/
    │   ├── PfinCardDetailPage.js # Dedicated PFIN Card Detail Page
    │   ├── SpinGamePage.js     # Spin & Win Inner Game Page
    │   ├── ScratchGamePage.js  # Scratch Card Inner Game Page
    │   ├── ShuffleGamePage.js  # Shuffle Card Inner Game Page
    │   ├── OfferDetailPage.js  # Offer Inner Detail Page
    │   ├── VoucherDetailPage.js# Voucher Inner Detail Page
    │   └── ServiceDetailPage.js# Service Inner Detail Page
    ├── components/
    │   ├── Header.js           # Single-Line Nav & Mobile Drawer
    │   ├── HeroSection.js      # Master Hero, EMI Calculator & Ticker
    │   ├── PreApprovedLoan.js  # ₹15 Lakh Pre-Approved Loan Card
    │   ├── PlayAndWinSection.js# Game Launcher Cards
    │   ├── PfinCardShowcase.js # PFIN Credit Card Banner
    │   ├── OffersRail.js       # Top Partner Offers Carousel
    │   ├── ExcitingVouchers.js # Voucher Cards Grid
    │   ├── PopularServices.js  # Financial Products Grid
    │   ├── DoMoreExplore.js    # Utility Tools & External Redirects
    │   ├── Footer.js           # RBI Compliance & Quick Links
    │   ├── Toast.js            # Feedback Notification System
    │   └── Modals/             # OtpModal, RewardRevealModal, MyOffersDrawer, etc.
    └── utils/
        └── confetti.js         # Canvas Confetti Helper
```

---

## 🛠️ Tech Stack

- **Frontend**: Vanilla JavaScript (ES6 Modules), HTML5, Tailwind CSS.
- **Icons**: Lucide Icons.
- **Animations & Effects**: Canvas Confetti, HTML5 Canvas API, CSS Keyframes.
- **State & Routing**: Reactive Pub/Sub Store & Hash Router.

---

## 🚀 Running Locally

Serve the project using Python's built-in HTTP server:

```bash
cd "/Users/rakeshmayekar/Documents/Rakesh Mayekar Data/Antigravity/Project 1/Kwebmaker/02-Poonawala Fincop"
python3 -m http.server 8000
```

Open [http://localhost:8000](http://localhost:8000) in your web browser.

---

## 📄 License & Compliance

Registered trademark of Poonawalla Fincorp Limited. RBI Regulated NBFC-ND-SI.
