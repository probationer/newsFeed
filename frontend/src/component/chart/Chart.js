import React, { Component } from 'react';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import './_Chart.css'


export default class Chart extends Component {


    render() {
        const number = 10;
        return (
            <Container className="chart" maxWidth="xs">
                <Paper elevation={2}>
                    <p>
                        Twitter Frequency: {number}
                    </p>
                    <p>
                        Google news Frequency: {number}
                    </p>
                </Paper>
            </Container>
        )
    }
}