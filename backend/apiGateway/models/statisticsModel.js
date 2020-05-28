const { Schema, model } = require('mongoose');

const statsSchema = new Schema({
    keyword: String,
    newsFrequencyPerSecond: Schema.Types.Decimal,
    totalNewsCount: Number,
    tweetFrequencyPerSecond: Schema.Types.Decimal,
    totalTweetsCount: Number
}, { timestamps: true })

module.exports = model('statistics', statsSchema);