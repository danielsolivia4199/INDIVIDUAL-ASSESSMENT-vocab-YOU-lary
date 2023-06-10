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
  // event listener funcion triggered on keyup event in the input field
  const search = (event) => {
    // retrieves the current value of the input field, converts to lower case, and removes leading/trailing whitespace
    const listener = event.target.value.toLowerCase().trim();
    // retrieves the card data for the user and performs filtering based on the search term
    getCards(user.uid).then((data) => {
      // converts the object values to an array and filters based on the search term
      const result = Object.values(data).filter((obj) => obj.term.toLowerCase().includes(listener.trim()));
      return result; // returns the filtered result
    })
      .then(showCards);
  };
  // adds event listener tothe input field with the id "search"
  document.querySelector('#search').addEventListener('keyup', search);

  // Sort A to Z
  document.querySelector('#alphabet').addEventListener('click', () => {
    // calls the sortAZ function and passes the users uid through a promise that resolves a sorted result. once resolved, the showCards function is called and passed to display the sorted cards on the DOM
    sortAZ(user.uid).then(showCards);
  });
};

export default navigationEvents;
