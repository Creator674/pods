const loader = document.querySelector('.loader');

window.addEventListener('load', () => {
  setTimeout(() => {
    loader.style.visibility = 'hidden';
    loader.style.opacity = '0';
  }, 1000);
});
