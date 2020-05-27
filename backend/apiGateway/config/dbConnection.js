const mongoose = require('mongoose');
const { DATABASE_URL, DB_NAME } = require('./constant');

const NewsModel = require('../models/newsModel');

const connectDb = () => {
    console.log("Connection db.. ")
    return mongoose.connect(DATABASE_URL, { useUnifiedTopology: true, useNewUrlParser: true });
};

const models = { NewsModel }
module.exports = { connectDb, models };