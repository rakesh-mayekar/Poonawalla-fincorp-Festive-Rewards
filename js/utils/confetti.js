// Confetti Burst Trigger Helper using canvas-confetti

export function triggerConfetti() {
  if (typeof window.confetti === 'function') {
    // 1st burst from left
    window.confetti({
      particleCount: 75,
      spread: 70,
      origin: { x: 0.2, y: 0.5 },
      colors: ['#D4AF37', '#7A0C2E', '#F59E0B', '#9E1B32', '#FEF3C7']
    });

    // 2nd burst from right
    window.confetti({
      particleCount: 75,
      spread: 70,
      origin: { x: 0.8, y: 0.5 },
      colors: ['#D4AF37', '#7A0C2E', '#F59E0B', '#9E1B32', '#FEF3C7']
    });
  }
}
