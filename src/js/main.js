const form = document.getElementById("main-form");
const firstName = document.getElementById("f-name");
const lastName = document.getElementById("l-name");
const email = document.getElementById("email");
const pNumber = document.getElementById("p-number");
const pwd = document.getElementById("pwd");
const cnfrmPwd = document.getElementById("c-pwd");
const submitBtn = document.getElementById("submit-btn");

const setErrorFor = (input, msg) => {
  const formControl = input.parentElement; 
  const small = formControl.querySelector("small");
  
  small.innerText = msg;
  input.className = "error";
};

const checkInputs = () => {
  const firstNameValue = firstName.value.trim();
  let msg = null;

  if (!firstNameValue) {
    msg = "First Name";
  }
  
  firstNameValue ? setSuccessFor(firstName) : setErrorFor(firstName, `${msg} cannot be blank!`);
};

form.addEventListener("submit", e => {
  e.preventDefault();
  checkInputs();
});

submitBtn.addEventListener("click", checkInputs);
