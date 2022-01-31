const elBtns = document.querySelectorAll('.tip__btn')
let Elurl = document.querySelector('.filter__input')



Elurl.addEventListener('keyup', (e) => {
  if (!e.target.value) {
    Elurl.style.backgroundImage = "url('../img/location.svg')";
  } else {
    Elurl.style.backgroundImage = "url('./location.svg')";
  }
})

elBtns.forEach(btn => {
  btn.addEventListener('click', evt => {
    elBtns[0].classList.remove('tip__btn--active')
    elBtns[1].classList.remove('tip__btn--active')

    btn.classList.toggle('tip__btn--active')
  })
})

