const imgs = document.images;
const loader = document.querySelector('.loader');

const len = imgs.length;
let counter = 0;

function incrementCounter() {
  counter += 1;
  if (counter === len) {
    loader.style.visibility = 'hidden';
    loader.style.opacity = '0';
    loader.style.zIndex = '-100';
  }
}

[].forEach.call(imgs, (img) => {
  img.addEventListener('load', incrementCounter, false);
});
