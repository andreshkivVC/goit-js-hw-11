import axios from 'axios';

export default class PixabayAPIService {
  constructor() {
    this.baseUrl =
      'https://pixabay.com/api/?image_type=photo&orientation=horizontal&safesearch=true';
    this.key = '32365366-ca89aa165da463851a22782ca';
    this.query = '';
    this.page = 1;
    this.perPage = 40;
    this.lengthArrayPhotos;
  }

  async onFetchPhotos() {
    const url = `${this.baseUrl}&page=${this.page}&per_page=${this.perPage}&key=${this.key}&q=${this.query}`;
    const res = await axios.get(url);
    this.lengthArrayPhotos = res.data.hits.length;
    return res;
  }

  incrementPages() {
    this.page += 1;
  }

  resetPage() {
    this.page = 1;
  }

  get getCurrentQuery() {
    return this.query;
  }

  set setNewQuery(newQuery) {
    this.query = newQuery;
  }
}
