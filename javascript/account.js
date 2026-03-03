let accntNum = 0;
let userList, passList, emailList;

getAccountList();

let savedUsernames = userList;
let savedPasswords = passList;
let savedEmails = emailList;

if (savedUsernames.length == 0 && savedPasswords.length == 0) {
  savedUsernames.push("admin");
  savedPasswords.push("root");
  savedEmails.push("admin@gmail.com");
}

getData();

/* ========== modify database ========== */
function getAccountList() {
  userList = JSON.parse(localStorage.getItem("username")) || [];
  passList = JSON.parse(localStorage.getItem("password")) || [];
  emailList = JSON.parse(localStorage.getItem("email")) || [];
}

function getData() {
  localStorage.setItem("username", JSON.stringify(savedUsernames));
  localStorage.setItem("password", JSON.stringify(savedPasswords));
  localStorage.setItem("email", JSON.stringify(savedEmails));
}

function resetAccntNum() {
  accntNum = 0;
}

/* ========== sign in ========== */
export function verifyAccount(usernameInput, passwordInput){
  accntNum = 0;
  
  for(let list of savedUsernames){
    if(usernameInput == list){
      verifyPassword(passwordInput);
      return;
    }
    
    accntNum++;
  }
  
  alert("Username does not exist");
  resetAccntNum();
}

function verifyPassword(passwordInput){
  if(savedPasswords[accntNum] == passwordInput){
    alert("Login successfully!");
    window.location.href = "html/sample.html";
    return;
  }
  
  alert("Incorrect password");
  resetAccntNum();
  return;
}

/* ========== sign up ========== */
export function signupAccount(usernameInput, emailInput, passwordInput, confirmPassInput){
  if(checkUsernameRule(usernameInput)){
    if(checkEmail(emailInput)){
      checkPassword(usernameInput, emailInput, passwordInput, confirmPassInput);
    };
  }
}

function checkUsernameRule(usernameInput){
  for(let list of savedUsernames){
    if(usernameInput == list){
      alert("Username already exists");
      return false;
    }
  }
  
  if(usernameInput.length < 6){
    alert("Username minimum: 6 characters");
    return false;
  }

  if (usernameInput.length > 12) {
    alert("Username maximum: 12 characters");
    return false;
  }
  
  for(let char of specialChar){
    if(usernameInput.includes(char)){
      alert("Username cannot have special characters");
      return false;
    }
  }
  
  return true;
}

function checkEmail(emailInput){
  if(emailInput.includes("@")){
    return true;
  }
  
  alert("Not a valid email address")
  return false;
}

function checkPassword(usernameInput, emailInput, passwordInput, confirmPassInput){
  if(passwordInput.length < 6){
    alert("Password minimum: 6 characters");
    return;
  }
  
  if(passwordInput.length > 16){
    alert("Password maximum: 16 characters");
    return;
  }
  
  let hasCapital = false;
  for(let list of capitalLetters){
    if(passwordInput.includes(list)){
      hasCapital = true;
      break;
    }
  }
  
  if(!hasCapital){
    alert("Password must atleast contain 1 capital letter");
    return;
  }
  
  let hasSmall = false;
  for (let list of smallLetters) {
    if (passwordInput.includes(list)) {
      hasSmall = true;
      break;
    }
  }
  
  if(!hasSmall){
    alert("Password must atleast contain 1 small letter");
    return;
  }
  
  let hasNum = false;
  for (let list of numbers) {
    if (passwordInput.includes(list)) {
      hasNum = true;
      break;
    }
  }
  
  if(!hasNum){
    alert("Password must atleast contain 1 number");
    return;
  }
  
  for (let list of specialChar) {
    if(passwordInput.includes(list)) {
      alert("Password cannot contain special characters");
      return;
    }
  }
  
  if(passwordInput != confirmPassInput){
    console.log(passwordInput + " " + confirm)
    alert("Password and Confirm password don't match");
    return;
  }
  
  let signup = confirm("Sign up Account?");
  if(signup){
    registerAccount(usernameInput, emailInput, passwordInput);
    
    alert("Successfully registered account!");
    window.location.href = "../index.html";
    return;
  }
}

function registerAccount(user, email, pass){
  savedUsernames.push(user);
  savedEmails.push(email);
  savedPasswords.push(pass);
  
  getData();
  getAccountList();
}


/* ========== special chars and others ========== */
const capitalLetters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

const smallLetters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

const numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

const specialChar = [
  "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "_", "=",
  "+", "[", "]", "{", "}", "|", ":", ";", "\"", "'", "<", ">",
  ",", ".", "?", "/", "`", "~", "£", "€", "¥", "¢", "°", "√", "π",
  "•", "§", "∆"
];