const kafka = require('kafka-node');
const consumerManager = require('./consumerManager');

const consumer = new consumerManager(0).consumerMessage();