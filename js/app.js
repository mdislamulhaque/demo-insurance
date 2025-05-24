// Prevent double-tap zoom
document.addEventListener('dblclick', function(e) {
  e.preventDefault();
}, { passive: false });

// Prevent pinch zoom
document.addEventListener('touchmove', function(e) {
  if (e.scale !== 1) { e.preventDefault(); }
}, { passive: false });