import { getCards, createCard, updateCard } from '../api/cardData';
import { showCards } from '../pages/cards';
import timeStamp from '../utils/timeStamp';

const formEvents = (user) => {
  document.querySelector('#main-container').addEventListener('submit', (e) => {
    e.preventDefault();
    // Click event for submiting form to add card
    if (e.target.id.includes('submit-card')) {
      const payload = {
        term: document.querySelector('#term').value,
        definition: document.querySelector('#definition').value,
        language: document.querySelector('#languageFilter').value,
        time: timeStamp,
        uid: user.uid
      };

      createCard(payload).then(({ name }) => {
        const patchPayload = { firebaseKey: name };

        updateCard(patchPayload).then(() => {
          getCards(user.uid).then(showCards);
        });
      });
    }

    // Click event for editting card
    if (e.target.id.includes('update-card')) {
      const [, firebaseKey] = e.target.id.split('--');
      const payload = {
        term: document.querySelector('#term').value,
        definition: document.querySelector('#definition').value,
        language: document.querySelector('#languageFilter').value,
        time: timeStamp,
        uid: user.uid,
        firebaseKey,
      };

      updateCard(payload).then(() => {
        getCards(user.uid).then(showCards);
      });
    }
  });
};
export default formEvents;
