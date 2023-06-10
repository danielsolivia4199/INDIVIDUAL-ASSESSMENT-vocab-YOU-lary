import clearDOM from '../utils/clearDOM';
import renderToDOM from '../utils/renderToDOM';

const addCardForm = (obj = {}) => {
  clearDOM();
  const domString = `
    <form id="${obj.firebaseKey ? `update-card--${obj.firebaseKey}` : 'submit-card'}" class="mb-4">
    <div class="form-group">
      <div class="form-group">
        <label for="term">Vocabulary Term</label>
        <input type="text" class="form-control" id="term" style="width: 500px;align-content:center;"placeholder="Enter Vocabulary Term" value="${obj.term || ''}" required>
      </div>

      <div class="form-group">
        <label for="definition">Definition of Vocabulary Term</label>
        <input type="text" class="form-control" id="definition" placeholder="Enter Definition" value="${obj.definition || ''}" required>
      </div>

      <div class="form-group">
        <label for="language">Programming Language</label>
        <select id="languageFilter" name="language" value="${obj.language || ''}" required>
          <option value="JavaScript" ${obj.language === 'JavaScript' ? 'selected' : ''} >JavaScript</option>
          <option value="HTML" ${obj.language === 'HTML' ? 'selected' : ''}>HTML</option>
          <option value="CSS" ${obj.language === 'CSS' ? 'selected' : ''}>CSS</option>
        </select>
      </div>
      <button type="submit" class="btn btn-dark" id="submitbtn">Submit Vocabulary Card
      </button>

    </form>`;

  renderToDOM('#form-container', domString);
};

export default addCardForm;
