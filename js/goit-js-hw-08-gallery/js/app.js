import gallery from './gallery-items.js';

let current = 0;

const refs = {
  gallery: document.querySelector('ul[class = "gallery js-gallery"]'),
  modal: document.querySelector('div[class="lightbox js-lightbox"]'),
  lightbox: document.querySelector('img[class="lightbox__image"]'),
  close: document.querySelector('button[data-action="close-lightbox"]'),
  overlay: document.querySelector('div[class="lightbox__content"]'),
};

function createGallery(arr) {
  return arr.map((e) => createGalleryItem(e));
}

function createGalleryItem({ original, preview, description }) {
  const list = document.createElement('li');
  const link = document.createElement('a');
  const img = document.createElement('img');
  const span = document.createElement('span');
  const icon = document.createElement('i');

  list.classList.add('gallery__item');
  link.classList.add('gallery__link');
  img.classList.add('gallery__image');
  span.classList.add('gallery__icon');
  icon.classList.add('material-icons');
  icon.textContent = 'zoom_out_map';

  link.setAttribute('href', original);
  img.setAttribute('src', preview);
  img.setAttribute('data-source', original);
  img.setAttribute('alt', description);

  list.append(link, img, span);
  link.appendChild(img);
  span.appendChild(icon);
  console.log(list);
  return list;
}

function openModal(e) {
  e.preventDefault();

  if (e.target === e.currentTarget) return;
  refs.modal.classList.add('is-open');
  window.addEventListener('keydown', keypressHandler);

  refs.lightbox.src = e.target.dataset.source;

  // Checking and assigning current index for slider image

  gallery.map((elem) => {
    if (elem.original === e.target.dataset.source) {
      current = gallery.indexOf(elem);

      return current;
    }
  });
}

function closeModal(e) {
  refs.modal.classList.remove('is-open');
  refs.lightbox.src = '';
  window.removeEventListener('keydown', keypressHandler);
}

function overlayHandler(e) {

  if (e.target !== e.currentTarget) {
    return;
  }
  console.log('clicked on overlay');
  closeModal();
}


function keypressHandler(e) {
  if (e.key === 'Escape') {
    closeModal();
  }

  if (e.key === 'ArrowRight') {
    refs.lightbox.src = gallery[current + 1].original;
    current += 1;

    if (current === gallery.length - 1) {
      current = -1;
    }
  }

  if (e.key === 'ArrowLeft') {
    refs.lightbox.src = gallery[current - 1].original;
    current -= 1;

    if (current === 0) {
      current = gallery.length - 1;
    }
  }
}

const collection = createGallery(gallery);

refs.gallery.append(...collection);
refs.gallery.addEventListener('click', openModal);
refs.close.addEventListener('click', closeModal);
refs.overlay.addEventListener('click', overlayHandler);
