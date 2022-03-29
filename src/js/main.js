const form = document.getElementById("main-form");
const submitBtn = document.getElementById("submit-btn");
const formControls = document.querySelectorAll(".form-control");

const formControlsArr = Array.from(formControls);

const setValidFor = input => {
  const formControl = input.parentElement; 
  const small = formControl.querySelector("small");
  
  small.textContent = null;
  input.classList.remove("error");
  input.classList.add("valid");
};

const setErrorFor = (input, msg) => {
  const formControl = input.parentElement; 
  const small = formControl.querySelector("small");
  
  small.textContent = msg;
  input.classList.remove("valid");
  input.classList.add("error");
};

const checkPasswords = () => {
  const pwd = document.getElementById("pwd");
  const cnfrmPwd = document.getElementById("c-pwd");

  const pwdValue = pwd.value.trim();
  const cnfrmPwdValue = cnfrmPwd.value.trim();
  if (pwdValue !== cnfrmPwdValue) {
    setErrorFor(pwd, "Passwords do not match!");
    cnfrmPwd.classList.add("error");
  }
};

const checkEmail = () => {
  const email = document.getElementById("email");
  const emailValue = email.value.trim();
  console.log(emailValue);

  if (emailValue && !emailValue.includes("@")) {
    setErrorFor(email, "Email must be valid!");
  }
};

const checkInputs = e => e.target.value.trim() ? setValidFor(e.target) : setErrorFor(e.target, `This cannot be blank!`);

const validateForm = () => {
  formControlsArr.map(input => input.value.trim() ? setValidFor(input) : setErrorFor(input, `This cannot be blank!`));
  checkEmail();
  checkPasswords();
};

form.addEventListener("submit", e => e.preventDefault());
submitBtn.addEventListener("click", validateForm);
formControlsArr.forEach(control => control.addEventListener("input", checkInputs));
window.addEventListener("load", () => formControlsArr.forEach(control => control.value = null))