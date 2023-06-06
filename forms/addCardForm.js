import clearDOM from '../utils/clearDOM';
import renderToDOM from '../utils/renderToDOM';

const addCardForm = (obj = {}) => {
  clearDOM();
  const domString = `
    <form id="${obj.firebaseKey ? `update-card--${obj.firebaseKey}` : 'submit-card'}" class="mb-4">
      <div class="form-group">
        <label for="term">Vocabulary Term</label>
        <input type="text" class="form-control" id="term" placeholder="Enter Vocabulary Term" value="${obj.term || ''}" required>
      </div>
      <div class="form-group">
        <label for="definition">Definition of Vocabulary Term</label>
        <input type="text" class="form-control" id="definition" placeholder="Enter Definition" value="${obj.definition || ''}" required>
      </div>
      <div class="form-group">
        <select class="custom-select" required>
          <option value="">Open this select menu</option>
          <option value="1">One</option>
          <option value="2">Two</option>
          <option value="3">Three</option>
        </select>
        <div class="invalid-feedback">Example invalid custom select feedback</div>
      </div>
      <button type="submit" class="btn btn-primary">Submit Vocabulary Card
      </button>
    </form>`;

  renderToDOM('#form-container', domString);
};

export default addCardForm;
