const NewsApiManager = require('../managers/newsFeedManager');
const kafkaProducerManager = require('../../queueService/kafka-setup/producers/producerManager');

const producer = new kafkaProducerManager();
const { models } = require('../config/dbConnection');
const NewsModel = models.NewsModel;

module.exports = class Feed {

    constructor() {
        this.newApiManager = new NewsApiManager();
    }

    async pushNewsMessageInKafka(articles) {
        if (articles.length) {
            const stringMessage = articles.map(article => {
                article.pushTimeStamp = Date.now();
                return JSON.stringify(article)
            });
            await producer.pushMessageInKafkaNewsFeed(stringMessage);
        }
    }

    async getLiveFeed(topic, newsLimit, page) {
        let data = {
            newsFeed: [],
            tweets: []
        };
        try {
            const newsApiManager = await this.newApiManager.getNews(topic, newsLimit, page);
            data.newsFeed = newsApiManager.articles.map(article => {
                article.keywords = [];
                article.keywords.push(topic);
                return article;
            });
            await this.pushNewsMessageInKafka(data.newsFeed);
            const response = JSON.stringify({ keyword: topic, type: 'news' });
            producer.pushMessageInKafkaStatics([response]);
        } catch (err) {
            console.log("Error :", err);
        }
        return data;
    }

    async createOrUpdate(body) {
        console.log("body received .. ")
        const article = body.article;
        const keywords = article.keywords;
        delete article.keywords;
        await NewsModel.updateOne({ url: article.url }, { $set: { ...article }, $addToSet: { keywords: { $each: keywords } } }, { upsert: true });
        return 'UPDATED';
    }

}