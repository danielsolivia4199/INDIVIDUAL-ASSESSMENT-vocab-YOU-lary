import {
  getCSS, getCards, getHTML, getJavaScript
} from '../api/cardData';
import { showCards } from '../pages/cards';
import { signOut } from '../utils/auth';

const navigationEvents = (user) => {
  // logout button
  document.querySelector('#logout-button')
    .addEventListener('click', signOut);

  // all cards
  document.querySelector('#all-cards').addEventListener('click', () => {
    getCards(user.uid).then(showCards);
  });
  // JS cards
  document.querySelector('#javascript-cards').addEventListener('click', () => {
    getJavaScript(user.uid).then(showCards);
  });
  // HTML cards
  document.querySelector('#HTML-cards').addEventListener('click', () => {
    getHTML(user.uid).then(showCards);
  });
  // CSS cards
  document.querySelector('#CSS-cards').addEventListener('click', () => {
    getCSS(user.uid).then(showCards);
  });
};

export default navigationEvents;
