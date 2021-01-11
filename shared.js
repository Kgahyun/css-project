const backdrop = document.querySelector('.backdrop')
// backdrop.style.display='block'
const modal = document.querySelector('.modal')
// modal.style.display='block'
const planButtons = document.querySelectorAll('button')
// console.log(planButtons);
for (let i = 0; i < planButtons.length; i++) {
    planButtons[i].addEventListener("click", function () {
      modal.style.display = "block";
      backdrop.style.display = "block";
    });
  }