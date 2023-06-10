import { signOut } from '../utils/auth';

const logoutButton = () => {
  const domString = '<button id="google-auth-logout" class="btn btn-danger">SIGNOUT</button>';
  document.querySelector('#logout-button').innerHTML = (domString);
  document.querySelector('#google-auth-logout').addEventListener('click', signOut);
};

export default logoutButton;
