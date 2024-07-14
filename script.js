window.addEventListener('load', () => {
  document.body.classList.remove('before-load');
});
document.querySelector('.loadinger').addEventListener('transitionend', (e) => {
  document.body.removeChild(e.currentTarget);
});

// Select the .grid element as the container
    const container = document.querySelector('.body');
    const itemsWrapper = document.querySelector('.grid');

    // Preload images
    const preloadImages = () => {
        return new Promise((resolve, reject) => {
            imagesLoaded(document.querySelectorAll('img'), resolve);
        });
    };

    // And then..
    preloadImages().then(() => {
        // Remove the loader
        document.body.classList.remove('loading');
        const effect = new RGBShiftEffect(container, itemsWrapper, { strength: 0.25 });
    });    
