const Producers = require('./producerManager');
const prod = new Producers().pushMessageInKafkaAndMongo();