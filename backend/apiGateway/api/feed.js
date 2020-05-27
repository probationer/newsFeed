const NewsApiManager = require('../managers/newsFeedManager');
const kafkaProducerManager = require('../../queueService/kafka-setup/producers/producerManager');

const { models } = require('../config/dbConnection');
const NewsModel = models.NewsModel;

module.exports = class Feed {

    constructor() {
        this.newApiManager = new NewsApiManager();
    }

    async pushNewsMessageInKafka(articles) {
        if (articles.length) {
            const producer = new kafkaProducerManager();
            const stringMessage = articles.map(article => JSON.stringify(article));
            await producer.pushMessageInKafka(stringMessage);
        }
    }

    async getLiveFeed(topic) {
        let newsApiManager = [];
        try {
            newsApiManager = await this.newApiManager.getNews(topic);
            await this.pushNewsMessageInKafka(newsApiManager.articles);
            return newsApiManager;
        } catch (err) {
            console.log("Error :", err);
        }
        return newsApiManager;
    }

    async createOrUpdate(body) {
        console.log("BODY RECEVED ", JSON.stringify(body.article));
        const article = body.article;
        // for (const article in articles) {
        const data = await NewsModel.updateOne({ url: article.url }, { $set: { ...article } }, { upsert: true });
        console.log("Udpated data", data);
        // }
        return 'UPDATED';
    }

}