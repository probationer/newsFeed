const kafka = require('kafka-node');
const config = require('../config');
const { getClient } = require('../kafkaClient');

const client = getClient();

try {
  const Consumer = kafka.Consumer;
  const consumer = new Consumer(
    client,
    [{ topic: config.kafka_topic, partition: 0 }],
    {
      autoCommit: false,
      fetchMaxWaitMs: 100,
      fetchMaxBytes: 1024 * 1024,
      encoding: 'utf8',
      fromOffset: false
    }
  );
  consumer.on('message', async function (message) {
    console.log('kafka-> ', message.value);
  })
  consumer.on('error', function (err) {
    console.log('error', err);
  });
}
catch (e) {
  console.log(e);
}