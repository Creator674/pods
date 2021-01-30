window.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('.modal__form');
  const button = document.querySelector('.modal-order__btn-send');
  const status = document.querySelector('.form-status');
  const phoneNumber = document.querySelector('.textarea--number');

  function phoneValidation(phone) {
    const p = /^\+375(17|29|33|44)[0-9]{7}/;
    return p.test(`${phone}`);
  }

  function success() {
    form.reset();
    button.style.display = 'none';
    status.textContent = 'Спасибо за заказ!';
    status.classList.add('green');
    status.classList.remove('red');
    phoneNumber.classList.remove('wrong');
  }

  function error() {
    status.textContent = 'Проверьте данные!';
    status.classList.remove('green');
    status.classList.add('red');
  }

  function ajax(method, url, data) {
    const xhr = new XMLHttpRequest();
    xhr.open(method, url);
    xhr.setRequestHeader('Accept', 'application/json');
    xhr.onreadystatechange = () => {
      if (xhr.readyState !== XMLHttpRequest.DONE) return;
      if (xhr.status === 200) {
        success(xhr.response, xhr.responseType);
      } else {
        error(xhr.status, xhr.response, xhr.responseType);
      }
    };
    xhr.send(data);
  }

  form.addEventListener('submit', (ev) => {
    ev.preventDefault();
    const data = new FormData(form);
    if (phoneValidation(phoneNumber.value)) {
      ajax(form.method, form.action, data, success, error);
    } else {
      phoneNumber.classList.add('wrong');
      error();
    }
  });
});
