import { deleteCard, getCards, getSingleCard } from '../api/cardData';
import addCardForm from '../forms/addCardForm';
import { showCards } from '../pages/cards';

const domEvents = (user) => {
  document.querySelector('#main-container').addEventListener('click', (e) => {
    // click event for deleting cards
    if (e.target.id.includes('delete-card')) {
      // eslint-disable-next-line no-alert
      if (window.confirm('Want to delete?')) {
        console.warn('CLICKED DELETE CARD', e.target.id);
        const [, firebaseKey] = e.target.id.split('--');
        deleteCard(firebaseKey).then(() => {
          getCards(user.uid).then(showCards);
        });
      }
    }

    // click event for adding card
    if (e.target.id.includes('add-card-btn')) {
      addCardForm({}, user);
    }

    if (e.target.id.includes('edit-card-btn')) {
      const [, firebaseKey] = e.target.id.split('--');

      getSingleCard(firebaseKey).then((cardObj) => addCardForm(cardObj, user));
    }
  });
};

export default domEvents;
