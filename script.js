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
  const inputEmail = document.querySelector("#inputEmail").value;
  console.log(inputEmail);
  const inputPassword = document.querySelector("#inputPassword").value;
  console.log(inputPassword);  
  const inputShowPassword = document.querySelector("#inputShowPassword").clicked;
  console.log(inputShowPassword);

  const displayResult = document.querySelector("#displayResult");

  // lag
  const displayInputEmail = document.createElement("p");
  const displayInputPassword = document.createElement("p");
  const successfulLogIn = document.createElement("p");
  const failedLogIn = document.createElement("p");
  // modifiser

  // modifiser
  displayInputEmail.textContent = inputEmail;
  displayInputPassword.textContent = inputPassword;
  successfulLogIn.textContent = "Du har logget deg inn riktig" + inputEmail;
  failedLogIn.textContent = "Epost eller passord er feil.";
  if(inputEmail.length > 0 && inputPassword.length > 0)
  {
    displayResult.appendChild(successfulLogIn);
  }
  else
  {
    displayResult.appendChild(failedLogIn);
  }

 
  
  // Send

  
  console.log(displayResult);

  


   
}

logInButton.addEventListener("click", logInForm);

// end button

// start
