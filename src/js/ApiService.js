import axios from 'axios';

const API_KEY = `30717427-cd59e794f5222b55b8dec493e` ;
const URL = 'https://pixabay.com/api/';

export default class ApiService {
    constructor() {
        this.searchQuery = '';
        this.page = 1;
        this.hits = 0;
        this.totalHits = 0;
    }

    async fetchImage() {
        try {
            const options = {
                params: {
                    key: API_KEY,
                    q: this.searchQuery,
                    image_type: 'photo',
                    orientation: 'horizontal',
                    safesearch: true,
                    page: this.page,
                    per_page: 40,
                },
            };
            const url = `${URL}`;
            const response = await axios.get(url, options);
            const data = await response.data;

            this.page += 1;
            this.totalHits = response.data.totalHits;

            return data;
        } catch (error) {
            console.log('~ error', error);
        }
    }

    set query(newQuery) {
        this.searchQuery = newQuery;
    }
}

