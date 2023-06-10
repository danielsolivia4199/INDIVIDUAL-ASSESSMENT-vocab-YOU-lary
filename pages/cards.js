import clearDOM from '../utils/clearDOM';
import renderToDOM from '../utils/renderToDOM';

const emptyCards = () => {
  const domString = '<h1>No Cards</h1>';
  renderToDOM('#store', domString);
};

const showCards = (array) => {
  clearDOM();
  const addBtnString = '<button class="btn btn-outline-success btn-lg mb-4" id="add-card-btn">Add A Vocabulary Card</button>';
  renderToDOM('#add-button', addBtnString);

  let domString = '';
  array.forEach((card) => {
    domString += `
      <div class="card" id="cards" style="width: 25rem;">
        <div class="card-body">
          <h5 class="card-term">${card.term}</h5>
          <p class="card-definition">${card.definition}</p>
          <h6 class="card-language mb-2 text-muted">${card.language}</h6>
        </div>
        <h6 title="timeStamp">Created: ${card.time}</h6>
        <button id="edit-card-btn--${card.firebaseKey}" class="btn btn-dark">Edit</button>
        <button id="delete-card-btn--${card.firebaseKey}" class="btn btn-success">Delete</button>
      </div>`;
  });
  renderToDOM('#store', domString);
};

export { showCards, emptyCards };
