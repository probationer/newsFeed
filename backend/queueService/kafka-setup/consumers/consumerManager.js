const kafka = require('kafka-node');
const KafkaManager = require('../kafkaManager');

const config = require('../config');

module.exports = class Consumer extends KafkaManager {

    constructor(host = config.kafka_server_1) {
        super(host);
    }

    async consumerMessage(topic, callback) {
        var recivedMsg = null;
        const consumer = new kafka.Consumer(
            this.client,
            [{ topic: topic, partition: 0 }],
            {
                autoCommit: true,
                fetchMaxWaitMs: 100,
                fetchMaxBytes: 1024 * 1024,
                encoding: 'utf8',
                // fromOffset: 'latest'
            }
        );
        try {

            consumer.on('error', (err) => {
                console.log('error', err);
            });

            consumer.on('message', callback)
            return recivedMsg;
        }

        catch (e) {
            console.log(e);
        }
    }
}