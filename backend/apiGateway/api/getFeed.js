const NewsApiManager = require('../managers/newApiManager');

module.exports = class GetLiveFeed {

    constructor() {

    }

    async getLiveFeed(topic) {
        console.log({ topic });
        const newsApiManager = await new NewsApiManager().getNews(topic);
        return newsApiManager;
    }

}