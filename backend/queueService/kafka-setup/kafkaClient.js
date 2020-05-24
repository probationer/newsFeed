const kafka = require('kafka-node');
const config = require('./config');

let KAFKA_CLIENT = null;

exports.getClient = (host) => {
    if (!KAFKA_CLIENT) {
        KAFKA_CLIENT = new kafka.KafkaClient({
            autoConnect: true,
            kafkaHost: host
        });
    }
    return KAFKA_CLIENT;
}
