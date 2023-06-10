import { signIn } from '../utils/auth';

// GOOGLE LOGIN BUTTON
const loginButton = () => {
  const domString = `
    <button id="google-auth-login" class="btn btn-dark">GOOGLE LOGIN</button>
    <h5 style="margin-top: 20px;">UNLOCK YOUR KNOWLEDGE</h5>
    <img id="codelock" src="https://s.wsj.net/public/resources/images/OG-BV085_201810_SOC_20181003105910.gif">
  `;
  document.querySelector('#app').innerHTML = domString;
  document.querySelector('#google-auth-login').addEventListener('click', signIn);
};

export default loginButton;
