const baseUrl = 'https://pixabay.com/api/';
const API_KEY = '4183861-f12117fb478e4048342d80c94';
export default {
  page: 1,
  query: '',
  fetchGallery() {
    const key = `?key=${API_KEY}`;
    const requestParam = `&q=${this.query}&page=${this.page}&per_page=12&`;
    const defaultParam = '?image_type=photo&orientation=horizontal&';
    return fetch(baseUrl + key + requestParam + defaultParam)
      .then((response) => {
        this.incrementPage();
        return response.json();
      });
  },
  get searchQuery() {
    return this.query;
  },

  set searchQuery(string) {
    this.query = string;
  },


  incrementPage() {
    this.page += 1;
  },
  resetPage() {
    this.page = 1;
  },

};


// https://pixabay.com/api/?image_type=photo&orientation=horizontal&q=что_искать&page=номер_страницы&per_page=12&key=твой_ключ
