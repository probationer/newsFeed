const kafka = require('kafka-node');
const KafkaManager = require('../kafkaManager');
const config = require('../config');

module.exports = class Producers extends KafkaManager {

  constructor() {
    super(`${config.kafka_server_1},${config.kafka_server_2},${config.kafka_server_3}`);
    const Producer = kafka.Producer;
    this.producer = new Producer(this.client);
  }

  async pushMessage(messages, kafkaTopic = config.kafka_topic) {
    try {
      const payloads = messages.map(msg => {
        return {
          topic: kafkaTopic,
          messages: msg
        }
      });

      this.producer.on('ready', async () => {
        await this.producer.send(payloads, (err, data) => {
          if (err) {
            console.log('[kafka-producer -> ' + kafkaTopic + ']: broker update failed');
          } else {
            console.log('[kafka-producer -> ' + kafkaTopic + ']: broker update success');
          }
        });
      });

      this.producer.on('error', function (err) {
        console.log('[kafka-producer -> ' + kafkaTopic + ']: connection errored');
        throw err;
      });
    }
    catch (e) {
      console.log("ERROR ", e);
    }
  }

  async pushMessageInKafkaAndMongo() {
    const msgs = ['msg', '2'];
    await this.pushMessage(msgs);
  }

}