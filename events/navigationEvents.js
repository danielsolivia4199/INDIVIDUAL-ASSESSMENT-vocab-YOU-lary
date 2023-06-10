import {
  getCSS, getCards, getHTML, getJavaScript, sortAZ
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

  // STRETCH Search bar
  const search = (event) => {
    const listener = event.target.value.toLowerCase().trim();
    getCards(user.uid).then((data) => {
      const result = Object.values(data).filter((obj) => obj.term.toLowerCase().includes(listener.trim()));
      return result;
    })
      .then(showCards);
  };
  document.querySelector('#search').addEventListener('keyup', search);

  // Sort A to Z
  document.querySelector('#alphabet').addEventListener('click', () => {
    sortAZ(user.uid).then(showCards);
  });
};

export default navigationEvents;
