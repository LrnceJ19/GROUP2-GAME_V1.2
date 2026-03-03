import * as accnt from "./account.js"

const BTN = {
  register: document.getElementById("register-btn")
};

BTN.register.addEventListener("click", () => {
  validateRegister();
});

function validateRegister(){
      const username = document.getElementById("username").value;
      const email = document.getElementById("email").value;
      const password = document.getElementById('password').value;
      const confirmPassword = document.getElementById('confirm-password').value;
      
      accnt.signupAccount(username, email, password, confirmPassword);
      
      return;
    }