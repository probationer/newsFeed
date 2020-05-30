import React, { Component } from 'react';
import moment from 'moment';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import './_FeedCard.css';


import CardHeader from '@material-ui/core/CardHeader';


export default class FeedCard extends Component {
    render() {
        const { title, url, urlToImage, description, publishedAt } = this.props.feed;
        return (
            <Card className="feedCard animate" >
                <CardHeader
                    title={title}
                    subheader={moment(publishedAt).format("YYYY-MM-DD hh:mm:ss")}
                />
                <img className="cardImg" src={urlToImage} alt={title} ></img>
                <CardContent>
                    <Typography variant="body2" color="textSecondary" component="p">
                        {description}
                    </Typography>
                    <p><a href={url}>Read more</a></p>
                </CardContent>
            </Card>
        );
    }
}
