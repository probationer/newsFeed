const { Schema, model } = require('mongoose');

const statsSchema = new Schema({
    keyword: String,
    newsFrequencyPerSecond: Number,
    totalNewsCount: Number,
    tweetFrequencyPerSecond: Number,
    totalTweetsCount: Number
}, { timestamps: true })

module.exports = model('statistics', statsSchema);