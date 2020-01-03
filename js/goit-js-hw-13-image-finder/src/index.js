import { refs } from './utils/refs';
import galleryService from './api/api-service';
import templates from './templates/gallery.handlebars';

refs.searchForm.addEventListener('submit', formHandler);
refs.loadMore.addEventListener('click', loadMoreHandler);

function formHandler(e) {
  e.preventDefault();
  clearItems();
  galleryService.resetPage();
  const input = e.currentTarget.elements.query.value;
  galleryService.searchQuery = input;


  galleryService.fetchGallery().then((data) => {
    const markup = buildGalleryItems(data.hits);
    insertItemsHtml(markup);
  });
}
function loadMoreHandler() {
  galleryService.fetchGallery().then((data) => {
    const markup = buildGalleryItems(data.hits);
    insertItemsHtml(markup);
    window.scrollBy({
      top: 969,
      left: 0,
      behavior: 'smooth',
    });
  });
}

function buildGalleryItems(items) {
  return templates(items);
}

function insertItemsHtml(items) {
  refs.galleryList.insertAdjacentHTML('beforeend', items);
}

function clearItems() {
  refs.galleryList.innerHTML = '';
}
