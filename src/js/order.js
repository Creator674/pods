window.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('.modal__form');
  const button = document.querySelector('.modal-order__btn-send');
  const status = document.querySelector('.form-status');
  const phoneNumber = document.querySelector('.textarea--number');
  const orderBtn = document.querySelector('.modal-order-btn');
  const orderImg = document.querySelector('.product--image');
  const colorSelect = document.querySelector('.select--color');
  const modelSelect = document.querySelector('.select--model');
  const price = document.querySelector('.product-price--value');

  const state = {
    model: 'airpods-pro',
    color: 'white',
  };

  const imgSrc = [
    ['./assets/pods-pro-white.png', './assets/pods-pro-black.png'],
    ['./assets/pod-2-white.png', './assets/pods-2-black.png'],
  ];

  const prices = [
    ['68,9', '74,9'],
    ['58,9', '62,9'],
  ];

  function handleSelectChange() {
    let row = 0;
    let column = 0;

    if (state.model === 'airpods-pro') {
      row = 0;
    } else {
      row = 1;
    }

    if (state.color === 'white') {
      column = 0;
    } else {
      column = 1;
    }

    price.textContent = prices[row][column];
    orderImg.src = imgSrc[row][column];
  }

  modelSelect.addEventListener('change', () => {
    state.model = modelSelect.value;
    handleSelectChange();
  });
  colorSelect.addEventListener('change', () => {
    state.color = colorSelect.value;
    handleSelectChange();
  });

  orderBtn.addEventListener('click', () => {
    status.textContent = '';
    button.style.display = 'block';
  });

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
