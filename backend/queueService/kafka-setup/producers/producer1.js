const kafka = require('kafka-node');
const config = require('../config');
const { getClient } = require('../kafkaClient');

const client = getClient();
try {
  const Producer = kafka.Producer;
  const producer = new Producer(client);
  const kafka_topic = config.kafka_topic;
  const payloads = [
    {
      topic: kafka_topic,
      messages: "hey got new 5"
    }
  ];

  producer.on('ready', async function () {
    const push_status = producer.send(payloads, (err, data) => {
      if (err) {
        console.log('[kafka-producer -> ' + kafka_topic + ']: broker update failed');
      } else {
        console.log('[kafka-producer -> ' + kafka_topic + ']: broker update success');
      }
    });
  });

  producer.on('error', function (err) {
    console.log(err);
    console.log('[kafka-producer -> ' + kafka_topic + ']: connection errored');
    throw err;
  });
}
catch (e) {
  console.log("ERROR ", e);
}