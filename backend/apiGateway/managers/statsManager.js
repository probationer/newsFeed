const NewsAPI = require('newsapi');

const { NEW_API_KEY } = require('../config/constant');
const { models } = require('../config/dbConnection');


const StatsModel = models.StatsModel;

module.exports = class StatsManager {


    async createOrUpdate(updateObj) {
        const udpatedRes = await StatsModel.updateOne({ keyword: updateObj.keyword }, { $set: { ...updateObj } }, { upsert: true });
        return 'UPDATED';
    }

    getStatsByKeyword(keyword){
        return StatsModel.findOne({keyword: { $regex: keyword, $options: 'i'}})
    }

}