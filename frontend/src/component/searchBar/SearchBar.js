import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
// import { makeStyles } from '@material-ui/core/styles';
import './_SearchBar.css'


class SearchBar extends Component {


    render() {
        return (
            <form className="searchBar" noValidate autoComplete="off">
                <TextField id="standard-basic" label="Enter text and press enter" />
            </form>
        )
    }
}

export default SearchBar;