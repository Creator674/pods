import MicroModal from 'micromodal';
import Splide from '@splidejs/splide';

const Slider = new Splide('#splide', {
  type: 'loop',
  perPage: 2,
  gap: 10,
});
Slider.mount();

const complectationListBtn = document.querySelector('.complectation-heading--btn');
const complectationList = document.querySelector('.complectation-list');
const splideList = document.querySelector('.splide__list');

const featuresListBtn = document.querySelector('.features-heading--btn');
const featuresList = document.querySelector('.features-list');

const PodsName = document.querySelector('.pods-pro__name');
const PodsPricePrevious = document.querySelector('.price--previous');
const PodsPriceCurrent = document.querySelector('.price--current');

const PodsProWhiteBtn = document.querySelector('.pods-pro--btn--white');
const PodsProBlackBtn = document.querySelector('.pods-pro--btn--black');
const Pods2WhiteBtn = document.querySelector('.pods-2--btn--white');
const Pods2BlackBtn = document.querySelector('.pods-2--btn--black');

const WhiteInfoPro = {
  name: 'AirPods Pro',
  prevPrice: '119,9',
  currPrice: '67,9',
  model: 'pro',
  imagesAmount: 6,
  color: 'white',
};

const WhiteInfo2 = {
  name: 'AirPods 2',
  prevPrice: '109,9',
  currPrice: '56,9',
  model: '2',
  imagesAmount: 6,
  color: 'white',
};

const BlackInfoPro = {
  name: 'AirPods Pro',
  prevPrice: '124,9',
  currPrice: '74,9',
  model: 'pro',
  imagesAmount: 5,
  color: 'black',
};

const BlackInfo2 = {
  name: 'AirPods 2',
  prevPrice: '114,9',
  currPrice: '62,9',
  model: '2',
  imagesAmount: 6,
  color: 'black',
};

const Complectation2 = ['Наушники AirPods 2', 'Зарядный кейс', 'Кабель для зарядки кейса(Lightning)', 'Инструкция по использованию'];
const ComplectationPro = ['Наушники AirPods Pro', 'Зарядный кейс', 'Две пары сменных амбушюр', 'Кабель для зарядки кейса(USB Type-C)', 'Инструкция по использованию'];

const Features2 = ['Наушники ПРОБИВАЮТСЯ на оффициальном сайте эпл', 'Анимация при подключении', 'Все гравировки под крышкой кейса и на самих наушниках', 'Работают как с IPhone, так и с Android', 'Сенсорное управление', 'Новейший чип NODE', 'Гравировки на кейсе и наушниках', 'До 4,5 часов автономной работы', 'Не мигают во время работы', 'Микрофон в каждом наушнике', 'Беспроводная зарядка', 'Более глубокий и насыщенный звук в нижних частотах', 'Надёжная защита от пота и воды', 'Мгновенное подключение к телефону', 'Возможность менять имя и настраивать управление'];
const FeaturesPro = ['Наушники ПРОБИВАЮТСЯ на оффициальном сайте эпл', 'Отображение в ОСНОВНЫХ НАСТРОЙКАХ', 'Анимация при подключении', 'Все гравировки под крышкой кейса и на самих наушниках', 'Работают как с IPhone, так и с Android', 'Самый передовой чип NODE', 'Сенсорное управление', 'До 4 часов автономной работы', 'До 1 часа работы при 5-минутной зарядки в кейсе', 'Не мигают во время работы', 'Микрофон в каждом наушнике', 'Поиск наушников по GPS', 'Беспроводная зарядка', 'Более глубокий и насыщенный звук в нижних частотах', 'Чистый звук на максимальной громкости', 'Надёжная защита от пота и воды', 'Мгновенное подключение к телефону'];

function createComplectation(type) {
  window.dispatchEvent(new Event('resize'));
  complectationList.innerHTML = '';
  if (type === '2') {
    Complectation2.forEach((e) => {
      const li = document.createElement('li');
      li.classList.add('complectation-list--item');
      li.textContent = e;
      complectationList.appendChild(li);
    });
  } else {
    ComplectationPro.forEach((e) => {
      const p = document.createElement('li');
      p.classList.add('complectation-list--item');
      p.textContent = e;
      complectationList.appendChild(p);
    });
  }
}

function createFeatures(type) {
  featuresList.innerHTML = '';
  if (type === '2') {
    Features2.forEach((e) => {
      const li = document.createElement('li');
      li.classList.add('features-list--item');
      li.textContent = e;
      featuresList.appendChild(li);
    });
  } else {
    FeaturesPro.forEach((e) => {
      const li = document.createElement('li');
      li.classList.add('features-list--item');
      li.textContent = e;
      featuresList.appendChild(li);
    });
  }
}

function createGallery(imagesAmount, model, color) {
  splideList.innerHTML = '';
  for (let i = 0; i < imagesAmount; i += 1) {
    const slide = document.createElement('img');
    slide.classList.add('splide__slide');
    slide.src = `./assets/pods-${model}-${color}--${i + 1}.jpg`;
    slide.alt = 'airpods';
    splideList.appendChild(slide);
  }
  Slider.refresh();
}

function changeModalInfo() {
  PodsName.textContent = this.name;
  PodsPricePrevious.innerHTML = `${this.prevPrice} <span class="gray">BYN</span>`;
  PodsPriceCurrent.innerHTML = `${this.currPrice} <span class="gray">BYN</span>`;
  createComplectation(this.model);
  createFeatures(this.model);
  createGallery(this.imagesAmount, this.model, this.color);
}

PodsProWhiteBtn.addEventListener('click', changeModalInfo.bind(WhiteInfoPro));
PodsProBlackBtn.addEventListener('click', changeModalInfo.bind(BlackInfoPro));

Pods2BlackBtn.addEventListener('click', changeModalInfo.bind(BlackInfo2));
Pods2WhiteBtn.addEventListener('click', changeModalInfo.bind(WhiteInfo2));

MicroModal.init({
  onClose: () => {
    complectationList.classList.remove('list--opened');
    complectationListBtn.classList.remove('btn--pressed');
    featuresList.classList.remove('list--opened');
    featuresListBtn.classList.remove('btn--pressed');
  },
  openTrigger: 'data-custom-open',
  closeTrigger: 'data-custom-close',
  openClass: 'is-open',
  disableScroll: true,
  disableFocus: true,
  awaitOpenAnimation: true,
  awaitCloseAnimation: true,
});

complectationListBtn.addEventListener('click', () => {
  complectationList.classList.toggle('list--opened');
  complectationListBtn.classList.toggle('btn--pressed');
});

featuresListBtn.addEventListener('click', () => {
  featuresList.classList.toggle('list--opened');
  featuresListBtn.classList.toggle('btn--pressed');
});
