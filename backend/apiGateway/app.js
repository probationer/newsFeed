const express = require('express');
const cors = require('cors')
const app = express();
const GetLiveFeed = require('./api/getFeed');
const port = 3001;

app.use(cors());

app.get('/', (req, res) => res.send('Hello World!'))
app.get('/feed', async (req, res) => {
    const keyword = req.query.keyword;
    const response = await new GetLiveFeed().getLiveFeed(keyword);
    res.send(response);
})
app.get('/', (req, res) => res.send('Hello World!'))

app.listen(port, () => console.log(`app listening at http://localhost:${port}`))