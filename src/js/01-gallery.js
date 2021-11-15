
import SimpleLightbox from "simplelightbox";
import { galleryItems } from './gallery-items';
import 'simplelightbox/dist/simple-lightbox.min.css';
// Change code below this line

const galleryEl = document.querySelector('.gallery');

function createHTMLMarkup(elem) {
  galleryEl.insertAdjacentHTML(
    'beforeend',
    `
      <a class="gallery__item" href="${elem.original}">
        <img class="gallery__image" src="${elem.preview}" alt="${elem.description}" />
      </a>
    `,
  );
}

const genGalleryItem = galleryItems => {
  galleryItems.map(elem => createHTMLMarkup(elem));
};
genGalleryItem(galleryItems);

let lightbox = new SimpleLightbox('.gallery a', {
  captions: true,
  captionsData: 'alt',
  captionDelay: 250,
  overlay: true,
  preloading: true,
  alertErrorMessage: 'Изображение не найдено, будет загружено следующее изображение',
});
