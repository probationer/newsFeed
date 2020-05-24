import React, { Component } from 'react';
import SearchBar from '../searchBar/SearchBar';
import Displaybox from '../displayBox/Displaybox';
import Chart from '../chart/Chart';
import Grid from '@material-ui/core/Grid';
import queryAsync from '../../api/queryAsync';
import './_App.css';
const { FEED_API_PATH } = require('../../constants');
// import FEED_API_PATH from '../../constants';


class App extends Component {

    constructor() {
        super();
        this.state = {
            data: null,
            query: null
        };
    }

    getApiData(query) {
        const keyword = query;
        return queryAsync(FEED_API_PATH, `?keyword=${keyword}`);
        // this.setState({ data });
    }

    onEnterSearch = (event) => {
        const textData = document.getElementById('standard-basic').value
        this.setState({ query: textData })
    }

    render() {
        // const { query } = this.state;
        // if (query) {
        //     const data = this.getApiData(query);
        //     console.log("data", data);
        // }
        return (
            <div className="app">
                <Grid container spacing={0}>
                    <Grid item xs={12}>
                        <SearchBar onEnterSearch={this.onEnterSearch} />
                    </Grid>
                </Grid>
                <Grid container spacing={0}>
                    <Grid item xs={6}>
                        <Displaybox header="Tweets" />
                    </Grid>
                    <Grid item xs={6}>
                        <Displaybox header="News Feed" />
                    </Grid>
                </Grid>
                <Grid container spacing={0} className="chartBox">
                    <Grid item xs={6}>
                        <Chart />
                    </Grid>
                </Grid>
            </div>
        )
    }

}

export default App;
