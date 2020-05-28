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

    async getLiveFeed(topic, newsLimit) {
        let articles = [];
        try {
            const newsApiManager = await this.newApiManager.getNews(topic, newsLimit);
            articles = newsApiManager.articles.map(article => {
                article.keywords = [];
                article.keywords.push(topic);
                return article;
            });
            await this.pushNewsMessageInKafka(articles);
            const data = JSON.stringify({ keyword: topic, type: 'news' });
            producer.pushMessageInKafkaStatics([data]);
        } catch (err) {
            console.log("Error :", err);
        }
        return articles;
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