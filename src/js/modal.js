import MicroModal from 'micromodal';

const complectationListBtn = document.querySelector('.complectation-heading--btn');
const complectationList = document.querySelector('.complectation-list');

const featuresListBtn = document.querySelector('.features-heading--btn');
const featuresList = document.querySelector('.features-list');

const PodsName = document.querySelector('.pods-pro__name');
const PodsImage = document.querySelector('.pods-pro__image');
const PodsPricePrevious = document.querySelector('.price--previous');
const PodsPriceCurrent = document.querySelector('.price--current');

const PodsProSharedBtn = document.querySelector('.btn-buy-pro');
const Pods2SharedBtn = document.querySelector('.btn-buy-2');
const PodsProWhiteBtn = document.querySelector('.pods-pro--btn--white');
const PodsProBlackBtn = document.querySelector('.pods-pro--btn--black');
const Pods2WhiteBtn = document.querySelector('.pods-2--btn--white');
const Pods2BlackBtn = document.querySelector('.pods-2--btn--black');

const WhiteInfoPro = {
  name: 'AirPods Pro',
  image: '../assets/pods-pro-white.png',
  prevPrice: '119,9',
  currPrice: '68,9',
  model: 'pro',
};

const WhiteInfo2 = {
  name: 'AirPods 2',
  image: '../assets/pod-2-white.png',
  prevPrice: '109,9',
  currPrice: '58,9',
  model: '2',
};

const BlackInfoPro = {
  name: 'AirPods Pro',
  image: '../assets/pods-pro-black.png',
  prevPrice: '124,9',
  currPrice: '74,9',
  model: 'pro',
};

const BlackInfo2 = {
  name: 'AirPods 2',
  image: '../assets/pods-2-black.png',
  prevPrice: '114,9',
  currPrice: '62,9',
  model: '2',
};

const Complectation2 = ['Наушники AirPods 2', 'Зарядный кейс', 'Кабель для зарядки кейса(Lightning)', 'Инструкция по использованию'];
const ComplectationPro = ['Наушники AirPods Pro', 'Зарядный кейс', 'Две пары сменных амбушюр', 'Кабель для зарядки кейса(USB Type-C)', 'Инструкция по использованию'];

const Features2 = ['Наушники ПРОБИВАЮТСЯ на оффициальном сайте эпл', 'Анимация при подключении', 'Все гравировки под крышкой кейса и на самих наушниках', 'Работают как с IPhone, так и с Android', 'Сенсорное управление', 'Новейший чип NODE', 'Гравировки на кейсе и наушниках', 'До 4,5 часов автономной работы', 'Не мигают во время работы', 'Микрофон в каждом наушнике', 'Беспроводная зарядка', 'Более глубокий и насыщенный звук в нижних частотах', 'Надёжная защита от пота и воды', 'Мгновенное подключение к телефону', 'Возможность менять имя и настраивать управление'];
const FeaturesPro = ['Наушники ПРОБИВАЮТСЯ на оффициальном сайте эпл', 'Отображение в ОСНОВНЫХ НАСТРОЙКАХ', 'Анимация при подключении', 'Все гравировки под крышкой кейса и на самих наушниках', 'Работают как с IPhone, так и с Android', 'Самый передовой чип NODE', 'Сенсорное управление', 'До 4 часов автономной работы', 'До 1 часа работы при 5-минутной зарядки в кейсе', 'Не мигают во время работы', 'Микрофон в каждом наушнике', 'Поиск наушников по GPS', 'Беспроводная зарядка', 'Более глубокий и насыщенный звук в нижних частотах', 'Чистый звук на максимальной громкости', 'Надёжная защита от пота и воды', 'Мгновенное подключение к телефону'];

function changeModalInfo() {
  PodsName.textContent = this.name || 'AirPods';
  PodsImage.src = this.image;
  PodsPricePrevious.innerHTML = `${this.prevPrice} <span class="gray">BYN</span>`;
  PodsPriceCurrent.innerHTML = `${this.currPrice} <span class="gray">BYN</span>`;
  complectationList.innerHTML = '';
  featuresList.innerHTML = '';
  if (this.model === '2') {
    Complectation2.forEach((e) => {
      const li = document.createElement('li');
      li.classList.add('complectation-list--item');
      li.textContent = e;
      complectationList.appendChild(li);
    });

    Features2.forEach((e) => {
      const li = document.createElement('li');
      li.classList.add('features-list--item');
      li.textContent = e;
      featuresList.appendChild(li);
    });
  } else {
    ComplectationPro.forEach((e) => {
      const p = document.createElement('li');
      p.classList.add('complectation-list--item');
      p.textContent = e;
      complectationList.appendChild(p);
    });

    FeaturesPro.forEach((e) => {
      const li = document.createElement('li');
      li.classList.add('features-list--item');
      li.textContent = e;
      featuresList.appendChild(li);
    });
  }
}

PodsProSharedBtn.addEventListener('click', changeModalInfo.bind(WhiteInfoPro));
Pods2SharedBtn.addEventListener('click', changeModalInfo.bind(WhiteInfo2));

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
  debugMode: true,
});

complectationListBtn.addEventListener('click', () => {
  complectationList.classList.toggle('list--opened');
  complectationListBtn.classList.toggle('btn--pressed');
});

featuresListBtn.addEventListener('click', () => {
  featuresList.classList.toggle('list--opened');
  featuresListBtn.classList.toggle('btn--pressed');
});
