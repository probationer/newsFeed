const NewsAPI = require('newsapi');
const moment = require('moment');

const { NEW_API_KEY } = require('../config/constant');
const { models } = require('../config/dbConnection');

const newsapi = new NewsAPI(NEW_API_KEY);
const NewsModel = models.NewsModel;

module.exports = class NewApiManager {

    constructor() {

    }

    async getNews(query, newsLimit) {
        return newsapi.v2.everything({
            q: query,
            domains: 'indianexpress.com, hindustantimes.com, ndtv.com, thehindu.com, timesofindia.indiatimes.com',
            from: moment().subtract(28, 'days').format('YYYY-MM-DD'),
            to: moment().format('YYYY-MM-DD'),
            pageSize: newsLimit,
            language: 'en',
            sortBy: 'published',
            page: 1
        }).then(response => {
            return response;
        }).catch(err => {
            console.log("ERROR IN GET NEWS ", err);
        })
    }

    async createOrUpdate(articles) {
        const udpatedRes = await NewsModel.updateOne({ url: articles.url }, { $set: { ...articles } }, { upsert: true });
        return 'UPDATED';
    }

    getNewsListByKeyword(keyword) {
        return NewsModel.aggregate()
            .match({ keywords: keyword })
            .project({ keywords: 1, publishedAt: 1 })
            .sort({ publishedAt: -1 });
    }

}