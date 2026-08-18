// Toast Notification Component - Wireframe Theme
import { store } from '../state.js';

export function renderToast() {
  const toast = store.getState().toast;
  if (!toast) return '';

  return `
    <div class="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 animate-bounce-gentle">
      <div class="px-5 py-3 rounded-2xl bg-wf-dark text-white border border-zinc-700 shadow-xl backdrop-blur-md flex items-center gap-2.5 text-xs font-semibold">
        <div class="w-6 h-6 rounded-full bg-white text-wf-dark flex items-center justify-center font-bold">
          ✓
        </div>
        <span class="text-white">${toast.message}</span>
      </div>
    </div>
  `;
}
