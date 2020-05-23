const NewsAPI = require('newsapi');

const { NEW_API_KEY } = require('../config/constant');
const newsapi = new NewsAPI(NEW_API_KEY);




module.exports = class NewApiManager {

    constructor() {

    }

    async getNews(query) {
        return newsapi.v2.everything({
            q: query,
            domains: 'indianexpress.com, hindustantimes.com, ndtv.com, thehindu.com, timesofindia.indiatimes.com',
            from: '2020-05-01',
            to: '2020-05-12',
            language: 'en',
            sortBy: 'published',
            page: 2
        }).then(response => {
            return response;
        });
    }

}