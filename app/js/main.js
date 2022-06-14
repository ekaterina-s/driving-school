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