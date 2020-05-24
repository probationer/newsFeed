import React, { Component } from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import './_FeedCard.css';


export default class FeedCard extends Component {
    render() {
        const { title, urlToImage, description } = this.props.feed;
        return (
            <Card className="feedCard">
                <img className="cardImg" src={urlToImage} style={{ width: "80px", height: "80px", textAlign:"center" }}></img>
                <div className="feedTextSection">
                    <CardContent className="cardContent">
                        <Typography component="p" variant="h6">
                            {title}
                        </Typography>
                        <Typography variant="subtitle1" color="textSecondary">
                            {description}
                        </Typography>
                    </CardContent>
                </div>
            </Card>
        );
    }
}
