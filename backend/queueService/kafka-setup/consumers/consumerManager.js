const kafka = require('kafka-node');
const KafkaManager = require('../kafkaManager');

const config = require('../config');

module.exports = class Consumer extends KafkaManager {

    constructor(partition, host = config.kafka_server_1, topic = config.kafka_topic) {
        super(host);
        const Consumer = kafka.Consumer;
        this.consumer = new Consumer(
            this.client,
            [{ topic: topic, partition }],
            {
                autoCommit: true,
                fetchMaxWaitMs: 100,
                fetchMaxBytes: 1024 * 1024,
                encoding: 'utf8',
                // fromOffset: 1,
            }
        );
    }

    async consumerMessage() {
        try {
            this.consumer.on('message', async (message) => {
                console.log('kafka-> ', message.value);
            })
            this.consumer.on('error', (err) => {
                console.log('error', err);
            });
        }
        catch (e) {
            console.log(e);
        }
    }


}