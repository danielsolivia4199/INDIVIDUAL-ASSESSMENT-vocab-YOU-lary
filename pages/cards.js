import clearDOM from '../utils/clearDOM';
import renderToDOM from '../utils/renderToDOM';

const emptyCards = () => {
  const domString = '<h1>No Cards</h1>';
  renderToDOM('#store', domString);
};

const showCards = (array) => {
  clearDOM();
  const btnString = '<button class="btn btn-success btn-lg mb-4" id="add-card-btn">Add A Vocabulary Card</button>';
  renderToDOM('#add-button', btnString);

  let domString = '';
  array.forEach((card) => {
    domString += `
      <div class="card" style="width: 18rem;">
        <div class="card-body">
          <h5 class="card-term">${card.term}</h5>
          <h6 class="card-category mb-2 text-muted">Category: ${card.category}</h6>
          <p class="card-definition">${card.definition}</p>
        </div>
        <i id="edit-card-btn--${card.firebaseKey}" class="fas fa-edit btn btn-info"></i>
        <i id="delete-card-btn--${card.firebaseKey}" class="btn btn-danger fas fa-trash-alt"></i>
      </div>`;
  });
  renderToDOM('#store', domString);
};

export { showCards, emptyCards };
