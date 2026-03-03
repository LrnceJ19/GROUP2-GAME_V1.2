import * as accnt from "./account.js"

const BTN = {
  login: document.getElementById("login-btn")
};

BTN.login.addEventListener("click", () => {
  login();
});

function login() {
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;
  const regex = /^[A-Za-z\d]{6,12}$/;
  
  accnt.verifyAccount(username, password);
}