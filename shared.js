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
  }// console.log(planButtons);

  // -> css 페이지에서 backdrop에 해당하는 것을 꾸며놓고 display : none;을 해서 안보이게 했던 것을 javascript에서 display='block' 해주면 javascipt가 css를 조종해서 css에서 꾸몄던대로 다시 브라우저에 나타남. css에서 display를 건드리지 않았을 때 원래 설정되어 있는 기본값이 display : block;임