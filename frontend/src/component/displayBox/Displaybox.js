import React, { Component } from 'react';
import Paper from '@material-ui/core/Paper';
import Container from '@material-ui/core/Container';
import FeedCard from '../card/FeedCard';
import './_Displaybox.css'


export default class Displaybox extends Component {


    getFeed = (feedData) => {
        const feedCard = feedData.map((data, index) => {
            return (
                <FeedCard feed={data} key={index} />
            )
        })
        if (feedCard.length) {
            return (
                <div>
                    {feedCard}
                </div>
            )
        } else {
            return (
                <div style={{ textAlign: "center" }}>
                    No Data
                </div>
            )
        }
    }

    render() {
        const { data, header, frequency, aggregateCount } = this.props;
        return (
            <Container className="displayBox" maxWidth="xs">
                <Paper elevation={0} id="header" >
                    <h3>{header}</h3>
                </Paper>
                <Paper elevation={0} id="header" >
                    <span>
                        Average Frequency: {frequency}
                    </span>
                    <span>
                        Total News: {aggregateCount}
                    </span>

                </Paper>
                <div className="cardBox" > {/*className="animate" style={{animationDelay: `${1/ 3 + 0.5}s`}}  >*/}
                    {this.getFeed(data)}
                </div>
            </Container>
        )
    }
}