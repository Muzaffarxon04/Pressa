

document.querySelector('.filter__form').addEventListener('submit', evt => {
  evt.preventDefault()
})

const elBtns = document.querySelectorAll('.tip__btn')

let Eldata = document.getElementById('date')
let Elurl = document.querySelector('.filter__input')
let Ellabel = document.querySelector('.label-time')
let searchInput = document.querySelector('.nav__input')
let magnifer = document.querySelector('.search-icon')

Eldata.addEventListener('change', (e) => {
  if (e.target.value) {
    Ellabel.classList.add('label-time-active')
  }
})


searchInput.addEventListener('keyup', (e) => {
  if (e.target.value) {
    magnifer.style.display = "none";
  }else{
    magnifer.style.display = "block";
  }
})

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

