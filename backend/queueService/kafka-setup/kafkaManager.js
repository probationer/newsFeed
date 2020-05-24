const { getClient } = require('./kafkaClient');
const config = require('./config');

module.exports = class KafkaManager {
    constructor(host = config.kafka_server_1) {
        this.client = getClient(host)
    }
}