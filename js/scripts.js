const schemeSvg = document.querySelector(".scheme-svg");
const totalPriceTag = document.querySelector(".price-total");
const menuButton = document.querySelector(".m-menu");
const menu = document.querySelector(".menu");

const cost = 800;

schemeSvg.addEventListener("click", (event) => {
  const target = event.target;
  if (target.tagName === "path" && !target.classList.contains("booked")) {
    target.classList.toggle("active");
    const totalSeats = schemeSvg.querySelectorAll("path.active").length;
    totalPriceTag.textContent = totalSeats * cost;
  }
});

if (menuButton && menu) {
  menuButton.addEventListener("click", () => {
    menu.classList.toggle("is-open");
  });
}

document.addEventListener("DOMContentLoaded", () => {
  const btn = document.getElementById("open-video");
  if (btn) {
    btn.addEventListener("click", (e) => {
      e.preventDefault();
      const container = document.getElementById("video-container");
      if (container) {
        container.innerHTML = `
          <iframe 
            width="100" 
            height="100" 
            src="https://rutube.ru/play/embed/73d4606d8ce3449d693346ba0abeabde" 
            frameborder="0" 
            allowfullscreen
          ></iframe>
        `;
      }
    });
  }
});
