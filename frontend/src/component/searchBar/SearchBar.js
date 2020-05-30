import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
// import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import './_SearchBar.css'


class SearchBar extends Component {

    render() {
        const { onEnterSearch, keyword, date } = this.props;
        return (
            <div>
                <div className="searchBar">
                    <TextField id="standard-basic" label="Enter text and press enter" />
                    <Button variant="contained" color="primary" onClick={onEnterSearch} > Search </Button>
                </div>
                <div className="statsBar">
                    <Typography component="h3" >
                        Search Keyword: {keyword}
                    </Typography>
                    <Typography component="h3" >
                        Time: {date}
                    </Typography>
                    <br></br>
                    <Typography component="h5" >
                        <b>Note</b>:
                        <br />
                        > I have integrated <i>newsApi.org</i> Api to fetch news feed.
                        <br />
                        > Twitter api is not verified till now. So i have removed the twitter section.
                        <br />
                        > Also <a href="https://newsapi.org/">newsApi.org </a> has limit of 250 Request for 12hrs
                        <br />
                        > I m Calulating frequecy of news topic per day. Only to larger values.
                    </Typography>
                </div>
            </div >


        )
    }
}

export default SearchBar;