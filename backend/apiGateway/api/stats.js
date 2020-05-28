const moment = require('moment')

const NewsApiManager = require('../managers/newsFeedManager');
const kafkaProducerManager = require('../../queueService/kafka-setup/producers/producerManager');

const StatsManager = require('../managers/statsManager');
const NewsFeedManager = require('../managers/newsFeedManager');


module.exports = class Stats {

    constructor() {
        this.statsManager = new StatsManager();
    }

    async updateNewsStats(keyword) {

        const getSortedListOfNews = await new NewsFeedManager().getNewsListByKeyword(keyword);
        const totalNews = getSortedListOfNews.length;
        if (totalNews) {
            const lastDate = moment(getSortedListOfNews[0].publishedAt).format();
            const firstDate = moment(getSortedListOfNews[getSortedListOfNews.length - 1].publishedAt).format();

            /** To get bigger values Calculating Per Day Frequency instead of seconds */
            const totalDays = moment(lastDate).diff(firstDate, 'days');
            const newsPerDay = parseFloat(totalNews / totalDays);
            
            console.log({ keyword, totalDays, totalNews, newsPerDay });
            await this.statsManager.createOrUpdate({ keyword, newsFrequencyPerSecond: newsPerDay.toFixed(4), totalNewsCount: totalNews })
        }
    }

    async calculateAndUpateStats(body) {
        console.log("body type received .. ", body.type);
        const type = body.type;
        switch (type) {
            case 'news':
                await this.updateNewsStats(body.keyword);
                break;
            default:
                console.log("Wrong Topic", type);
        }
        return 'UPDATED';
    }

}