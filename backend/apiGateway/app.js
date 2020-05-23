const express = require('express');
const app = express();
const GetLiveFeed = require('./api/getFeed');
const port = 3000;

app.get('/', (req, res) => res.send('Hello World!'))
app.get('/feed', async (req, res) => {
    const keyword = req.query.keyword;
    const response = await new GetLiveFeed().getLiveFeed(keyword);
    res.send(response);
})
app.get('/', (req, res) => res.send('Hello World!'))

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))