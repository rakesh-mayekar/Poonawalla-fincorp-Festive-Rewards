// Simple Hash-Based Router for Inner Detail Pages & Tracking
import { store } from './state.js';

export function initRouter() {
  function handleRoute() {
    const hash = window.location.hash || '#home';
    const [routePath, paramId] = hash.slice(1).split('/');
    
    store.setRoute(routePath || 'home', paramId || null);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  window.addEventListener('hashchange', handleRoute);
  handleRoute();
}

export function navigateTo(path, paramId = null) {
  if (paramId) {
    window.location.hash = `#${path}/${paramId}`;
  } else {
    window.location.hash = `#${path}`;
  }
}
