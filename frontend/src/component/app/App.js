import React, { Component } from 'react';
import SearchBar from '../searchBar/SearchBar';
import Displaybox from '../displayBox/Displaybox';
import Chart from '../chart/Chart';
import Grid from '@material-ui/core/Grid';
import './_App.css';

class App extends Component {

    render() {
        return (
            <div className="app">
                <Grid container spacing={0}>
                    <Grid item xs={12}>
                        <SearchBar />
                    </Grid>
                </Grid>
                <Grid container spacing={0}>
                    <Grid item xs={6}>
                        <Displaybox />
                    </Grid>
                    <Grid item xs={6}>
                        <Displaybox />
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
