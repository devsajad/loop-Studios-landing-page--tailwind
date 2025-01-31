const hamburgerBtn = document.querySelector("#hamburger-btn");
const heroSection = document.querySelector("#hero-section");

console.log(heroSection);

hamburgerBtn.addEventListener("click", function () {
  heroSection.classList.toggle("open");
});
