// Initialisation de l’effet "poussière"
document.addEventListener('DOMContentLoaded', function () {
  particlesJS('dust', {
    particles: {
      number: { value: 600, density: { enable: true, value_area: 800 } },
      color: { value: '#ffffff' },
      shape: { type: 'circle' },
      opacity: {
        value: 0.3,
        random: true,
        anim: { enable: false }
      },
      size: {
        value: 3,
        random: true,
        anim: { enable: false }
      },
      move: {
        enable: true,
        speed: 0.4,               // vitesse lente pour un effet discret
        direction: 'none',
        random: true,
        straight: false,
        bounce: false
      }
    },
    retina_detect: true
  });
});