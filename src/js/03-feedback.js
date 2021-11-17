const throttle = require('lodash.throttle');

const formEl = document.querySelector('.feedback-form');
const inputEmail = formEl.querySelector('[name=email]');
const inputPassword = formEl.querySelector('[name=message]');

formEl.addEventListener('input', throttle(onInputForm, 500));
formEl.addEventListener('submit', onSubmitForm);

const setData = {};
const getData = localStorage.getItem("feedback-form-state");

(() => {
  if (localStorage.getItem("feedback-form-state") !== null) {
    inputEmail.value = JSON.parse(getData).email;
    inputPassword.value = JSON.parse(getData).password;
  }
})();

function onInputForm(e) {
  if (e.target.nodeName === 'INPUT') {
    setData.email = e.target.value
  }
  if (e.target.nodeName === 'TEXTAREA') {
    setData.password = e.target.value;
  }

  localStorage.setItem("feedback-form-state", JSON.stringify(setData))
};

function onSubmitForm(e) {
  e.preventDefault()
  console.log(JSON.parse(getData));
  e.currentTarget.reset()
  localStorage.removeItem("feedback-form-state")
};

console.log(inputEmail.value);
console.log(inputPassword.value);