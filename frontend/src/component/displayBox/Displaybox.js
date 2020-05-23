import React, { Component } from 'react';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import './_Displaybox.css'


export default class Displaybox extends Component {


    render() {
        const number = 10;
        return (
            <Container className="displayBox" maxWidth="xs">
                <Paper elevation={0} id="header" >
                    Average Frequency: {number}
                </Paper>
                <Typography component="div" style={{ backgroundColor: 'white', height: '50vh' }} >
                </Typography>
            </Container>
        )
    }
}