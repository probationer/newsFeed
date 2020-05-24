const kafka = require('kafka-node');
const config = require('./config');

let KAFKA_CLIENT = null;

exports.getClient = () => {
    if (!KAFKA_CLIENT) {
        KAFKA_CLIENT = new kafka.KafkaClient({
            autoConnect: true,
            kafkaHost: `${config.kafka_server_1},${config.kafka_server_2},${config.kafka_server_3}`
        });
    }
    return KAFKA_CLIENT;
}
