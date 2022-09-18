const burger = document.querySelector('.js-burger');
const headerOverlay = document.querySelector('.js-overlay');
const body = document.querySelector('.js-body');

burger.addEventListener('click', () => {
  burger.classList.toggle('_active');
  headerOverlay.classList.toggle('_active');
  body.classList.toggle('lock');
});

const dropdownButtons = document.querySelectorAll('.dropdown__button');
const dropdowns = document.querySelectorAll('.js-dropdown');

for (let i = 0; i < dropdownButtons.length; i++) {
  dropdownButtons[i].addEventListener('click', () => {
    dropdowns[i].classList.toggle('_active');
  })
};

const dropdownButtonSecond = document.querySelector('.dropdown__button--js-second');
console.log(dropdownButtonSecond.textContent);
const dropdownLinksSecond = document.querySelectorAll('.dropdown__link--js-second');
console.log(dropdownLinksSecond);
const popUps = document.querySelectorAll('.location__popup');

for (let i = 0; i < dropdownLinksSecond.length; i++) {
  dropdownLinksSecond[i].addEventListener('click', () => {
    dropdownLinksSecond[i].classList.toggle('_active');
    if (dropdownLinksSecond[i].classList.contains('_active')) {
      // console.log(dropdownLinks[i].textContent);
      // console.log(dropdownButtonSecond.textContent);
      dropdownButtonSecond.textContent = dropdownLinksSecond[i].textContent;
      popUps[i].classList.toggle('_active');
    }
  });
};

const faqButtons = document.querySelectorAll('.faq__button');
const faqDropdownTexts = document.querySelectorAll('.faq__dropdown-text');
const faqItems = document.querySelectorAll('.faq__item');

for (let i = 0; i < faqButtons.length; i++) {
  faqButtons[i].addEventListener('click', () => {
    faqButtons[i].classList.toggle('_active');
    faqItems[i].classList.toggle('_active');
    faqDropdownTexts[i].classList.toggle('_active');
  })
};