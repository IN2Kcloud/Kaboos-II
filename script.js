window.addEventListener('load', () => {
  document.body.classList.remove('before-load');
});
document.querySelector('.loadinger').addEventListener('transitionend', (e) => {
  document.body.removeChild(e.currentTarget);
});
