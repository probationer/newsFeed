import React, { Component } from 'react';
import SearchBar from '../searchBar/SearchBar';
import Displaybox from '../displayBox/Displaybox';
import Grid from '@material-ui/core/Grid';
import queryAsync from '../../api/queryAsync';
import './_App.css';
const { FEED_API_PATH, STATS_API_PATH } = require('../../constants');


class App extends Component {

    constructor() {
        super();
        this.state = {
            data: null,
            keywordQuery: null,
            limit: 15,
            page: 1,
            date: new Date(),
            statsData: {
                keyword: null,
                totalNewsFeed: 0,
                newsFeedPerDay: 0
            }
        };
    }

    getFeedData() {
        const { keywordQuery, limit, page } = this.state;
        if (keywordQuery) {
            queryAsync(FEED_API_PATH, `?keyword=${keywordQuery}&limit=${limit}&page=${page}`).then(data => {
                console.log("data from query", data);
                this.setState({ data });
            });
        }
    }

    getStatsData() {
        const { keywordQuery } = this.state;
        if (keywordQuery) {
            queryAsync(STATS_API_PATH, `?keyword=${keywordQuery}`).then(statsData => {
                console.log("stats from query", statsData);
                this.setState({ statsData });
            });
        }
    }

    onEnterSearch = (event) => {
        const keyword = document.getElementById('standard-basic').value
        if (keyword) {
            this.setState({
                keywordQuery: keyword,
                page: 1,
                statsData: {
                    keyword: null,
                    totalNewsFeed: 0,
                    newsFeedPerDay: 0
                }
            });
            this.getFeedData();
        }
    }

    getNewsFeed = () => {
        const data = this.state.data;
        let newsFeed = []
        if (data && data.newsFeed && data.newsFeed.length) {
            newsFeed = data.newsFeed;
        }
        return newsFeed;
    }

    componentDidMount() {
        this.timerID = setInterval(
            () => this.callApiData(),
            5000
        );
    }

    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    callApiData() {
        this.getFeedData();
        const { page, keywordQuery, data } = this.state;
        if (page > 2) {
            this.getStatsData()
        }
        if (keywordQuery) {
            this.setState({ date: new Date(), page: page + 1 });
        }
        if (data && data.newsFeed.length === 0 && keywordQuery) {
            this.setState({ page: 1 })
        }
    }


    render() {
        let newsFeed = this.state.data ? this.getNewsFeed() : [];
        const date = this.state.date.toLocaleTimeString();
        const { newsFeedPerDay, totalNewsFeed } = this.state.statsData;
        return (
            <div className="app">
                <Grid container spacing={0}>
                    <Grid item xs={12}>
                        <SearchBar onEnterSearch={this.onEnterSearch} date={date} keyword={this.state.keywordQuery} />
                    </Grid>
                </Grid>
                <Grid container spacing={0}>
                    {/* <Grid item xs={6}>
                        <Displaybox header="Tweets" data={newsFeed} frequency={newsFeedPerDay} aggregateCount={totalNewsFeed} />
                    </Grid> */}
                    <Grid item xs={12}>
                        <Displaybox header="News Feed" data={newsFeed} frequency={newsFeedPerDay} aggregateCount={totalNewsFeed} />
                    </Grid>
                </Grid>
                {/* <Grid container spacing={0} className="chartBox">
                    <Grid item xs={6}>
                        <Chart />
                    </Grid>
                </Grid> */}
            </div>
        )
    }

}

export default App;
