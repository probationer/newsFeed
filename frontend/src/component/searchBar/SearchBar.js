import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
// import { makeStyles } from '@material-ui/core/styles';
import './_SearchBar.css'


class SearchBar extends Component {

    constructor(props) {
        super(props);
        this.state = {
            textEntery: ''
        }
    }

    getText = (event) => {
        console.log("Text", event);
    }
    render() {
        const { onEnterSearch } = this.props;
        return (
            // <form className="searchBar" noValidate autoComplete="off">
            <div className="searchBar">
                <TextField id="standard-basic" label="Enter text and press enter" />
                <Button variant="contained" color="primary" onClick={onEnterSearch} > Search </Button>
            </div>
            // </form>
        )
    }
}

export default SearchBar;