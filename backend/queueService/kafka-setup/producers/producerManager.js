const kafka = require('kafka-node');
const KafkaManager = require('../kafkaManager');
const config = require('../config');
const Producer = kafka.Producer;
module.exports = class Producers extends KafkaManager {

  constructor() {
    super(`${config.kafka_server_1},${config.kafka_server_2},${config.kafka_server_3}`);
    this.producer = new Producer(this.client, { requireAcks: 1 });
  }

  async closeProducerClient(producerClient) {
    new Promise(resolve => producerClient.close(resolve))
  }

  async sendMsg(payloads) {
    this.producer.send(payloads, async (err, data) => {
      if (err) {
        console.log("Err while publish msg :", err);
      } else {
        console.log("Msg pusblished Success :", data);
      }
    });
  }

  async pushMessage(messages, kafkaTopic = config.kafka_topic) {
    try {
      const payloads = messages.map(msg => {
        return {
          topic: kafkaTopic,
          messages: msg
        }
      });

      if (this.producer.ready) {
        this.sendMsg(payloads);
      }

      this.producer.on('ready', async () => {
        this.sendMsg(payloads);
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

  async pushMessageInKafkaNewsFeed(msgs) {
    await this.pushMessage(msgs);
  }

  async pushMessageInKafkaStatics(msg){
    await this.pushMessage(msg, config.kafka_static_topic);
  }

}