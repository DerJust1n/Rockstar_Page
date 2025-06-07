const burger = document.getElementById('burger');
const menu = document.getElementById('menu');

burger.addEventListener('click', () => {
  menu.classList.toggle('open');
  burger.classList.toggle('open');
  document.body.classList.toggle('menu-open');
});

VANTA.FOG({
  el: "#background",
  mouseControls: true,
  touchControls: true,
  gyroControls: false,
  minHeight: 200.00,
  minWidth: 200.00,
  highlightColor: 0xff0e00,
  midtoneColor: 0xff8600,
  lowlightColor: 0x0,
  baseColor: 0x0,
  blurFactor: 0.40,
  speed: 0.10,
  zoom: 0.10
});

// Beim Klick auf Menü-Links speichern, dass das Menü offen war
document.querySelectorAll('.menu-overlay a').forEach(link => {
  link.addEventListener('click', () => {
    sessionStorage.setItem('menuOpen', 'true');
  });
});

window.addEventListener('DOMContentLoaded', () => {
  if (sessionStorage.getItem('menuOpen') === 'true') {
    // Transition für Menü und Burger-Icon-Striche deaktivieren
    menu.style.transition = 'none';
    burger.style.transition = 'none';
    burger.querySelectorAll('div').forEach(line => {
      line.style.transition = 'none';
    });

    // Menü und Icon sofort öffnen
    menu.classList.add('open');
    burger.classList.add('open');
    document.body.classList.add('menu-open');

    // Force Reflow (damit Browser’s Layout cycle läuft)
    void menu.offsetWidth;

    // Transition wieder aktivieren
    menu.style.transition = '';
    burger.style.transition = '';
    burger.querySelectorAll('div').forEach(line => {
      line.style.transition = '';
    });

    // Zustand entfernen
    sessionStorage.removeItem('menuOpen');
  }
});

// Service Worker Registrierung
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/sw.js')
      .then(reg => console.log('Service Worker registered:', reg))
      .catch(err => console.error('Service Worker registration failed:', err));
  });
}