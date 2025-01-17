'use strict';

const gallery = document.querySelector('.gallery');
const mainImage = document.querySelector('.gallery__large-img ');

gallery.addEventListener('click', function (e) {
  if (e.target.tagName === 'IMG' && event.target !== mainImage) {
    const newImageSrc = event.target.src.replace('thumb', 'image');

    mainImage.src = newImageSrc;
  }
});
