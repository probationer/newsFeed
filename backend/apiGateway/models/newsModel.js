const { Schema, model } = require('mongoose');

const newSchema = new Schema({
    newsTitle: String,
    source: Object,
    author: String,
    description: String,
    url: String, //index
    urlToImage: String,
    publishedAt: Date,
    content: String,
    keywords: Array,
    dump: String
}, { timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' } })

module.exports = model('news', newSchema);