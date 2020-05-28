const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const { connectDb } = require('./config/dbConnection');


const app = express();
const Feed = require('./api/feed');
const Stats = require('./api/stats');
const port = 3001;


connectDb().then(() => {
    app.use(bodyParser.urlencoded({ extended: true }));
    app.use(bodyParser.json());
    app.use(cors());
    app.get('/feed', async (req, res) => {
        const keyword = req.query.keyword;
        const newsLimit = req.query.limit;
        const response = await new Feed().getLiveFeed(keyword,newsLimit);
        res.send(response);
    });
    app.post('/feed', async (req, res) => {
        const body = req.body;
        const response = await new Feed().createOrUpdate(body);
        res.send({ msg: response });
    });
    app.post('/stats', async (req, res) => {
        const body = req.body;
        const response = await new Stats().calculateAndUpateStats(body);
        res.send({ msg: response });
    });
    app.listen(port, () => console.log(`app listening at http://localhost:${port}`));
})
