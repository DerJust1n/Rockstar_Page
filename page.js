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