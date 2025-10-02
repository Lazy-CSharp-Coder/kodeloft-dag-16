/*
ID-navn :
inputEmail
inputPassword
inputShowPassword
inputRemeberUser
loginButton
displayResult
*/

// start logInButton

const logInButton = document.querySelector("#logInButton");

function logInForm(event)
{
  event.preventDefault();  // Ordet event er utgått men det funker
  console.log("Button clicked");

  // hent
  const inputEmail = document.querySelector("#inputEMail").value;
  console.log(inputEmail);
  const inputPassword = document.querySelector("#inputPassword").value;
  console.log(inputPassword);  

  // lag
  const displayInputEmail = document.createElement("p");
  const displayInputPassword = document.createElement("p");
  // modifiser

  // modifiser
  displayInputEmail.textContent = inputEmail;
  displayInputPassword.textContent = inputPassword;

  displayResult.appendChild(displayInputEmail);
  displayResult.appendChild(displayInputPassword);
  
  // Send

  const displayResult = document.querySelector("#displayResult");
  console.log(displayResult);

  


   
}

logInButton.addEventListener("click", logInForm);

// end button

// start
