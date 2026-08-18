// Poonawalla Fincorp Reactive State Manager with Routing & Hero Inline Step Flow

class StateManager {
  constructor() {
    const savedSession = localStorage.getItem('pfin_festive_session');
    const savedOffers = localStorage.getItem('pfin_claimed_offers');
    const savedGameStates = localStorage.getItem('pfin_game_states');

    this.state = {
      userSession: savedSession ? JSON.parse(savedSession) : {
        isAuthenticated: false,
        mobileNumber: '',
        userName: 'Festive Guest'
      },
      claimedOffers: savedOffers ? JSON.parse(savedOffers) : [],
      gameStates: savedGameStates ? JSON.parse(savedGameStates) : {
        spinPlayed: false,
        scratchPlayed: false,
        shufflePlayed: false
      },
      currentRoute: 'home', // 'home', 'pfin-card-detail', 'game-spin', 'game-scratch', 'game-shuffle', 'offer-detail', 'voucher-detail', 'service-detail'
      routeParam: null,
      heroStep: 1, // 1: Sliders form, 2: Inline Summary + Mobile + OTP Verification
      heroCalculatedData: {
        amount: 500000,
        rate: 9.99,
        tenure: 36,
        emi: 16132,
        totalPayable: 580752
      },
      activeModal: null,
      modalData: null,
      toast: null,
      pendingActionAfterOtp: null
    };

    this.listeners = [];
  }

  subscribe(listener) {
    this.listeners.push(listener);
    return () => {
      this.listeners = this.listeners.filter(l => l !== listener);
    };
  }

  notify() {
    this.listeners.forEach(listener => listener(this.state));
  }

  getState() {
    return this.state;
  }

  setRoute(route, paramId = null) {
    this.state.currentRoute = route;
    this.state.routeParam = paramId;
    this.notify();
  }

  setHeroStep(step, data = null) {
    this.state.heroStep = step;
    if (data) {
      this.state.heroCalculatedData = { ...this.state.heroCalculatedData, ...data };
    }
    this.notify();
  }

  loginUser(mobileNumber, name = 'Valued Customer') {
    this.state.userSession = {
      isAuthenticated: true,
      mobileNumber: mobileNumber,
      userName: name
    };
    localStorage.setItem('pfin_festive_session', JSON.stringify(this.state.userSession));
    this.showToast(`Verified session for +91 ${mobileNumber}`);

    const pendingAction = this.state.pendingActionAfterOtp;
    this.state.pendingActionAfterOtp = null;
    
    if (pendingAction) {
      pendingAction();
    } else {
      this.closeModal();
    }
    this.notify();
  }

  logoutUser() {
    this.state.userSession = {
      isAuthenticated: false,
      mobileNumber: '',
      userName: 'Festive Guest'
    };
    localStorage.removeItem('pfin_festive_session');
    this.showToast('Account session removed');
    this.notify();
  }

  claimReward(rewardItem) {
    const existing = this.state.claimedOffers.find(o => o.id === rewardItem.id || o.code === rewardItem.code);
    if (!existing) {
      const claimedWithMeta = {
        ...rewardItem,
        claimedAt: new Date().toISOString(),
        expiresAt: new Date(Date.now() + (rewardItem.expiryDays || 15) * 86400000).toISOString()
      };
      this.state.claimedOffers = [claimedWithMeta, ...this.state.claimedOffers];
      localStorage.setItem('pfin_claimed_offers', JSON.stringify(this.state.claimedOffers));
    }

    this.openModal('reward', rewardItem);
    this.notify();
  }

  setGamePlayed(gameType) {
    if (gameType === 'spin') this.state.gameStates.spinPlayed = true;
    if (gameType === 'scratch') this.state.gameStates.scratchPlayed = true;
    if (gameType === 'shuffle') this.state.gameStates.shufflePlayed = true;

    localStorage.setItem('pfin_game_states', JSON.stringify(this.state.gameStates));
    this.notify();
  }

  openModal(modalName, modalData = null) {
    this.state.activeModal = modalName;
    this.state.modalData = modalData;
    document.body.style.overflow = 'hidden';
    this.notify();
  }

  closeModal() {
    this.state.activeModal = null;
    this.state.modalData = null;
    document.body.style.overflow = '';
    this.notify();
  }

  requireAuth(actionCallback) {
    if (this.state.userSession.isAuthenticated) {
      actionCallback();
    } else {
      this.state.pendingActionAfterOtp = actionCallback;
      this.openModal('otp', { reason: 'Please complete quick mobile verification to claim rewards & explore offers.' });
    }
  }

  showToast(message, type = 'success') {
    this.state.toast = { message, type };
    this.notify();

    setTimeout(() => {
      if (this.state.toast?.message === message) {
        this.state.toast = null;
        this.notify();
      }
    }, 3500);
  }
}

export const store = new StateManager();
