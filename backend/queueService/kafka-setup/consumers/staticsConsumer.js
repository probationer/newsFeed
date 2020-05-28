const ConsumerManager = require('./consumerManager');
const { queryAsync } = require('../queryAsync');

const config = require('../config');

class StatsConsumer extends ConsumerManager {

    constructor() {
        super();
        this.consumerManager = new ConsumerManager();
    }

    /**Get latest new feed */
    async getAndUpdateNewsFeedFromQueue() {
        await this.consumerManager.consumerMessage(config.kafka_static_topic ,this.insertNewsFeedInMongod);
    }

    async insertNewsFeedInMongod(message) {
        let recivedMsg = null;
        try {
            recivedMsg = JSON.parse((message.value).toString('utf8'));
            await queryAsync('stats', 'POST', recivedMsg);
        } catch (err) {
            console.log("String Msg");
            recivedMsg = message.value;
        }
    }
}

const consumer = new StatsConsumer().getAndUpdateNewsFeedFromQueue();
