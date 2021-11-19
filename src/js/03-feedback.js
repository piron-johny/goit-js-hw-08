const throttle = require('lodash.throttle');

const formEl = document.querySelector('.feedback-form');
const inputEmail = formEl.querySelector('[name=email]');
const inputPassword = formEl.querySelector('[name=message]');

formEl.addEventListener('input', throttle(onInputForm, 500));
formEl.addEventListener('submit', onSubmitForm);

const LOCAL_STORAGE_KEY = "feedback-form-state";
const data = {
  email: '',
  password: '',
};

let getData = localStorage.getItem(LOCAL_STORAGE_KEY);

(() => {
  if (localStorage.getItem(LOCAL_STORAGE_KEY)) {
    inputEmail.value = JSON.parse(getData).email;
    inputPassword.value = JSON.parse(getData).password;
  }
})();

function onInputForm(e) {
  if (e.target.nodeName === 'INPUT') {
    data.email = e.target.value
  }
  if (e.target.nodeName === 'TEXTAREA') {
    data.password = e.target.value;
  }
  localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(data))
};

function onSubmitForm(e) {
  e.preventDefault()

  if (JSON.parse(getData)) {
    console.log(JSON.parse(getData));
  } else {
    console.log(data);
  }

  data.email = '';
  data.password = '';
  e.currentTarget.reset()
  localStorage.removeItem(LOCAL_STORAGE_KEY)

  getData = localStorage.getItem(LOCAL_STORAGE_KEY);

};



