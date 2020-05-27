const NewsAPI = require('newsapi');

const { NEW_API_KEY } = require('../config/constant');
const { models } = require('../config/dbConnection');

const newsapi = new NewsAPI(NEW_API_KEY);
const NewsModel = models.NewsModel;

module.exports = class NewApiManager {

    constructor() {

    }

    async getNews(query) {
        return newsapi.v2.everything({
            q: query,
            domains: 'indianexpress.com, hindustantimes.com, ndtv.com, thehindu.com, timesofindia.indiatimes.com',
            from: '2020-05-01',
            to: '2020-05-12',
            pageSize: 40,
            language: 'en',
            sortBy: 'published',
            page: 1
        }).then(response => {
            return response;
        });
    }

    async createOrUpdate(articles) {
        const udpatedRes = await NewsModel.updateOne({ url: articles.url }, { $set: { ...articles } }, { upsert: true });
        return 'UPDATED';
    }

}