// Main Application Module with Page Router Integration
import { store } from './state.js';
import { initRouter } from './router.js';
import { renderHeader, bindHeaderEvents } from './components/Header.js';
import { renderHeroSection, bindHeroEvents } from './components/HeroSection.js';
import { renderPreApprovedLoan, bindPreApprovedEvents } from './components/PreApprovedLoan.js';
import { renderPlayAndWinSection, bindPlayAndWinEvents } from './components/PlayAndWinSection.js';
import { renderPfinCardShowcase, bindPfinCardEvents } from './components/PfinCardShowcase.js';
import { renderOffersRail, bindOffersEvents } from './components/OffersRail.js';
import { renderExcitingVouchers, bindExcitingVouchersEvents } from './components/ExcitingVouchers.js';
import { renderPopularServices, bindPopularServicesEvents } from './components/PopularServices.js';
import { renderDoMoreExplore, bindDoMoreExploreEvents } from './components/DoMoreExplore.js';
import { renderFooter } from './components/Footer.js';
import { renderToast } from './components/Toast.js';

// Inner Detail Pages
import { renderPfinCardDetailPage, bindPfinCardDetailPageEvents } from './pages/PfinCardDetailPage.js';
import { renderSpinGamePage, bindSpinGamePageEvents } from './pages/SpinGamePage.js';
import { renderScratchGamePage, bindScratchGamePageEvents } from './pages/ScratchGamePage.js';
import { renderShuffleGamePage, bindShuffleGamePageEvents } from './pages/ShuffleGamePage.js';
import { renderOfferDetailPage, bindOfferDetailPageEvents } from './pages/OfferDetailPage.js';
import { renderVoucherDetailPage, bindVoucherDetailPageEvents } from './pages/VoucherDetailPage.js';
import { renderServiceDetailPage, bindServiceDetailPageEvents } from './pages/ServiceDetailPage.js';

// Modals
import { renderOtpModal, bindOtpModalEvents } from './components/Modals/OtpModal.js';
import { renderRewardRevealModal, bindRewardRevealEvents } from './components/Modals/RewardRevealModal.js';
import { renderMyOffersDrawer, bindMyOffersDrawerEvents } from './components/Modals/MyOffersDrawer.js';
import { renderSpinWheelModal, bindSpinWheelEvents } from './components/Modals/SpinWheelModal.js';
import { renderScratchCardModal, bindScratchCardEvents } from './components/Modals/ScratchCardModal.js';
import { renderShuffleCardModal, bindShuffleCardEvents } from './components/Modals/ShuffleCardModal.js';
import { renderDocOnlineModal, bindDocOnlineEvents } from './components/Modals/DocOnlineModal.js';
import { renderReferEarnModal, bindReferEarnEvents } from './components/Modals/ReferEarnModal.js';
import { renderEmiCalculatorModal, bindEmiCalculatorEvents } from './components/Modals/EmiCalculatorModal.js';
import { renderCibilCheckModal, bindCibilCheckEvents } from './components/Modals/CibilCheckModal.js';
import { renderLoanApplyModal, bindLoanApplyEvents } from './components/Modals/LoanApplyModal.js';
import { renderPfinCardApplyModal, bindPfinCardApplyEvents } from './components/Modals/PfinCardApplyModal.js';

function renderApp() {
  const appContainer = document.getElementById('app');
  if (!appContainer) return;

  const state = store.getState();
  const currentRoute = state.currentRoute;
  const activeModal = state.activeModal;
  const modalData = state.modalData;

  // Determine Main Body Content based on route
  let bodyHtml = '';
  let bindPageEventsFn = null;

  if (currentRoute === 'pfin-card-detail') {
    bodyHtml = renderPfinCardDetailPage();
    bindPageEventsFn = bindPfinCardDetailPageEvents;
  } else if (currentRoute === 'game-spin') {
    bodyHtml = renderSpinGamePage();
    bindPageEventsFn = bindSpinGamePageEvents;
  } else if (currentRoute === 'game-scratch') {
    bodyHtml = renderScratchGamePage();
    bindPageEventsFn = bindScratchGamePageEvents;
  } else if (currentRoute === 'game-shuffle') {
    bodyHtml = renderShuffleGamePage();
    bindPageEventsFn = bindShuffleGamePageEvents;
  } else if (currentRoute === 'offer-detail') {
    bodyHtml = renderOfferDetailPage();
    bindPageEventsFn = bindOfferDetailPageEvents;
  } else if (currentRoute === 'voucher-detail') {
    bodyHtml = renderVoucherDetailPage();
    bindPageEventsFn = bindVoucherDetailPageEvents;
  } else if (currentRoute === 'service-detail') {
    bodyHtml = renderServiceDetailPage();
    bindPageEventsFn = bindServiceDetailPageEvents;
  } else {
    // Default Home Page View
    bodyHtml = `
      ${renderHeroSection()}
      ${renderPreApprovedLoan()}
      ${renderPlayAndWinSection()}
      ${renderPfinCardShowcase()}
      ${renderOffersRail()}
      ${renderExcitingVouchers()}
      ${renderPopularServices()}
      ${renderDoMoreExplore()}
    `;
  }

  // Determine Modal HTML
  let modalHtml = '';
  if (activeModal === 'otp') modalHtml = renderOtpModal(modalData);
  else if (activeModal === 'reward') modalHtml = renderRewardRevealModal(modalData);
  else if (activeModal === 'my-offers') modalHtml = renderMyOffersDrawer();
  else if (activeModal === 'spin') modalHtml = renderSpinWheelModal();
  else if (activeModal === 'scratch') modalHtml = renderScratchCardModal();
  else if (activeModal === 'shuffle') modalHtml = renderShuffleCardModal();
  else if (activeModal === 'doc-online') modalHtml = renderDocOnlineModal();
  else if (activeModal === 'refer-earn') modalHtml = renderReferEarnModal();
  else if (activeModal === 'emi-calc') modalHtml = renderEmiCalculatorModal();
  else if (activeModal === 'cibil') modalHtml = renderCibilCheckModal();
  else if (activeModal === 'loan-apply') modalHtml = renderLoanApplyModal(modalData);
  else if (activeModal === 'pfin-apply') modalHtml = renderPfinCardApplyModal();

  appContainer.innerHTML = `
    ${renderHeader()}
    <main class="flex-1">
      ${bodyHtml}
    </main>
    ${renderFooter()}
    ${renderToast()}
    <div id="modal-root">${modalHtml}</div>
  `;

  // Bind Header & Global Events
  bindHeaderEvents();

  if (currentRoute === 'home') {
    bindHeroEvents();
    bindPreApprovedEvents();
    bindPlayAndWinEvents();
    bindPfinCardEvents();
    bindOffersEvents();
    bindExcitingVouchersEvents();
    bindPopularServicesEvents();
    bindDoMoreExploreEvents();
  } else if (bindPageEventsFn) {
    bindPageEventsFn();
  }

  // Bind Active Modal Events
  if (activeModal === 'otp') bindOtpModalEvents();
  else if (activeModal === 'reward') bindRewardRevealEvents();
  else if (activeModal === 'my-offers') bindMyOffersDrawerEvents();
  else if (activeModal === 'spin') bindSpinWheelEvents();
  else if (activeModal === 'scratch') bindScratchCardEvents();
  else if (activeModal === 'shuffle') bindShuffleCardEvents();
  else if (activeModal === 'doc-online') bindDocOnlineEvents();
  else if (activeModal === 'refer-earn') bindReferEarnEvents();
  else if (activeModal === 'emi-calc') bindEmiCalculatorEvents();
  else if (activeModal === 'cibil') bindCibilCheckEvents();
  else if (activeModal === 'loan-apply') bindLoanApplyEvents();
  else if (activeModal === 'pfin-apply') bindPfinCardApplyEvents();

  // Initialize Lucide Icons
  if (window.lucide && typeof window.lucide.createIcons === 'function') {
    window.lucide.createIcons();
  }
}

document.addEventListener('DOMContentLoaded', () => {
  renderApp();
  store.subscribe(() => {
    renderApp();
  });
  initRouter();
});
