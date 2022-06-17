import { testFunction } from './scripts/test';
testFunction();

const burger = document.querySelector('.js-burger');
const headerOverlay = document.querySelector('.js-overlay');
const body = document.querySelector('.js-body');

burger.addEventListener('click', () => {
  burger.classList.toggle('_active');
  headerOverlay.classList.toggle('_active');
  body.classList.toggle('lock');
});

const tabButtons = document.querySelectorAll('.js-tab-button');
const tabcontentLists = document.querySelectorAll('.js-tabcontent-list');
const tabcontentLinks = document.querySelectorAll('.tabcontent__link');

// tabButtons.forEach((item, index) => {
//   tabButtons[index].addEventListener('click', () => {
//     tabButtons[index].className = tabButtons[index].className.replace(' _active', '');
//   });
// });

// tabButtons.forEach((item, index) => {
//   tabButtons[index].addEventListener('click', () => {
//     if(tabButtons[index].contains.classList('_active')) {
//       tabButtons[index].remove.classList('_active');
//     } else {
//       tabButtons[index].classList.add('_active');
//     };
    // tabButtons[index].classList.toggle('_active');

    // tabcontentLists.forEach((item, index) => {
    //   tabcontentLists[index].classList.toggle('_active');
    // });
    // tabcontentLinks.forEach((item, index) => {
    //   tabcontentLinks[index].addEventListener('click', () => {
    //     tabcontentLinks[index].classList.toggle('_active');
    //   })
    // });
//   })
// });