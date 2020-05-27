const ConsumerManager = require('./consumerManager');
const { queryAsync } = require('../queryAsync');

class NewsFeedConsumer extends ConsumerManager {

    constructor() {
        super();
        this.consumerManager = new ConsumerManager();
    }

    /**Get latest new feed */
    async getAndUpdateNewsFeedFromQueue() {
        await this.consumerManager.consumerMessage(this.insertNewsFeedInMongod);
    }

    async insertNewsFeedInMongod(message) {
        let recivedMsg = null;
        try {
            recivedMsg = JSON.parse((message.value).toString('utf8'));
        } catch (err) {
            console.log("String Msg");
            recivedMsg = message.value;
        }
        const body = { article: recivedMsg };
        await queryAsync('feed', 'POST', body);
    }
}

const consumer = new NewsFeedConsumer().getAndUpdateNewsFeedFromQueue();
