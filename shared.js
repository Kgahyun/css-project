const backdrop = document.querySelector(".backdrop");
// backdrop.style.display='block'
const modal = document.querySelector(".modal");
// modal.style.display='block'
const planButtons = document.querySelectorAll(".button");
// console.log(planButtons);

const noButton = document.querySelector(".modal__action--negative");
const sideNav = document.querySelector(".mobile-nav");
const toggleButton = document.querySelector(".toggle-button");

for (let i = 0; i < planButtons.length; i++) {
  planButtons[i].addEventListener("click", function () {
    modal.style.display = "block";
    backdrop.style.display = "block";
  });
} // console.log(planButtons);

noButton.addEventListener("click", function () {
  modal.style.display = "none";
  backdrop.style.display = "none";
});

backdrop.addEventListener("click", function () {
  modal.style.display = "none";
  backdrop.style.display = "none";
  sideNav.style.display = "none";
});

toggleButton.addEventListener("click", function () {
  sideNav.style.display = "block";
  backdrop.style.display = "block";
});
