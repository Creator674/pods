import MicroModal from 'micromodal';

const complecationListBtn = document.querySelector('.complectation-heading--btn');
const complecationList = document.querySelector('.complectation-list');

const featuresListBtn = document.querySelector('.features-heading--btn');
const featuresList = document.querySelector('.features-list');

MicroModal.init({
  openTrigger: 'data-custom-open', // [3]
  closeTrigger: 'data-custom-close', // [4]
  openClass: 'is-open', // [5]
  disableScroll: true, // [6]
  disableFocus: false, // [7]
  awaitOpenAnimation: false, // [8]
  awaitCloseAnimation: false, // [9]
  debugMode: true, // [10]
});

complecationListBtn.addEventListener('click', () => {
  complecationList.classList.toggle('list--opened');
  complecationListBtn.classList.toggle('btn--pressed');
});

featuresListBtn.addEventListener('click', () => {
  featuresList.classList.toggle('list--opened');
  featuresListBtn.classList.toggle('btn--pressed');
});
