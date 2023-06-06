import logoutButton from '../components/logoutButton';
import domBuilder from '../shared/domBuilder';
import navBar from '../shared/navBar';
import { showCards } from '../pages/showCards';

const startApp = () => {
  domBuilder();
  logoutButton();
  navBar();
  showCards();
};

export default startApp;
