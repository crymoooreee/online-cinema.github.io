const schemeSvg = document.querySelector('.scheme-svg');
const totalPriceTag = document.querySelector('.price-total');
const menuButton = document.querySelector('.m-menu');
const menu = document.querySelector('.menu');
let cost = 800;
let totalPrice = 0;

schemeSvg.addEventListener('click', (event) => {
    if (!event.target.classList.contains('booked') && event.target.tagName === 'path') {
        event.target.classList.toggle('active');
        let totalSeats = schemeSvg.querySelectorAll('.active').length;
        totalPrice = totalSeats * cost;
        totalPriceTag.textContent = totalPrice;
    }
});

menuButton.addEventListener('click', () => {
    console.log('Кликнули по меню');
    menu.classList.toggle('is-open');
});

document.addEventListener('DOMContentLoaded', function() {
  document.getElementById('open-video').addEventListener('click', function(e) {
    e.preventDefault();
    const container = document.getElementById('video-container');
    container.innerHTML = '<iframe width="560" height="315" src="https://rutube.ru/play/embed/73d4606d8ce3449d693346ba0abeabde" frameborder="0" allowfullscreen></iframe>';
  });
});