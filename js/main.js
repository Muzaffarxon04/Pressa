const elBtns = document.querySelectorAll('.tip__btn')

let Elurl = document.getElementById('url')
let onlinebtn = document.getElementById('online')
let oflineBtn = document.getElementById('ofline')
let typeBtn = document.getElementById('type-btn')
document.querySelector('.filter__form').addEventListener('submit', evt => {
  evt.preventDefault()
})

document.querySelector('body').addEventListener('click', evt => {

  if (evt.target.classList.contains('category__select-btn')) {
    document.querySelector('.category').classList.toggle('category--active')
  }

  if(evt.target.classList.contains('category__btn')) {
    document.querySelector('.filter__category-box').classList.toggle('subcategory--active')
  }
  
  if(evt.target.classList.contains('nav__menu-btn')) {
    console.log('123');
    document.querySelector('.nav').classList.toggle('nav__menu--active')
  }

  if(evt.target.classList.contains('subcategory__back')) {
    document.querySelector('.filter__category-box').classList.remove('subcategory--active')
    document.querySelector('.category').classList.add('category--active')
  }

  if (!document.querySelector('.category--active')) {
    document.querySelector('.filter__category-box').classList.remove('subcategory--active')
  }
})


Elurl.addEventListener('keyup', (e) => {
  if (!e.target.value) {
    Elurl.style.backgroundImage = "url('../img/location.svg')";
  } else {
    Elurl.style.backgroundImage = "none";
  }
})

elBtns.forEach(btn => {
  btn.addEventListener('click', evt => {
    elBtns[0].classList.remove('tip__btn--active')
    elBtns[1].classList.remove('tip__btn--active')

    btn.classList.add('tip__btn--active')

    if (evt.target.id == 'online') {
      Elurl.style.backgroundImage = "url('../img/icon-internet.svg')";
      typeBtn.textContent = "Online manzilni kiriting";
    }else{
      Elurl.style.backgroundImage = "url('../img/location.svg')";
      typeBtn.textContent = "Manzilni kiriting";
    }
  })
})