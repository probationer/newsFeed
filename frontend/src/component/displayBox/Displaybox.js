import React, { Component } from 'react';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import FeedCard from '../card/FeedCard';
import './_Displaybox.css'

const feedData = [
    {
        "source": {
            "id": null,
            "name": "Lifehacker.com"
        },
        "author": "Emily Price",
        "title": "What to Watch Tonight, May 20, 2020",
        "description": "Looking for something to watch tonight? We’ve got a few suggestions!Read more...",
        "url": "https://lifehacker.com/what-to-watch-tonight-may-20-2020-1843552552",
        "urlToImage": "https://i.kinja-img.com/gawker-media/image/upload/c_fill,f_auto,fl_progressive,g_center,h_675,pg_1,q_80,w_1200/s6kwvtg9q6p49noh9e6u.jpg",
        "publishedAt": "2020-05-20T19:00:00Z",
        "content": "Experience Feinsteins/54 Belows staff show\r\nNYC supper club Feinsteins/54 Below is streaming a staff showfrom 2018 tonight that includes performances by the clubs workers, including its servers and c… [+423 chars]"
    }, {
        "source": {
            "id": "engadget",
            "name": "Engadget"
        },
        "author": "Mat Smith",
        "title": "Myzone's virtual fitness classes can tell if you’re slacking",
        "description": "In a lot of gyms and boutique fitness studios, there are classes that use chest straps with biometric sensors to track your heart rate and effort. Most of the time, these bands, apps and smart TV readouts are powered by Myzone, which makes both the hardware a…",
        "url": "https://www.engadget.com/myzone-mz-remote-app-virtual-fitness-classes-160022286.html",
        "urlToImage": "https://o.aolcdn.com/images/dims?resize=1200%2C630&crop=1200%2C630%2C0%2C0&quality=80&image_uri=https%3A%2F%2Fs.yimg.com%2Fos%2Fcreatr-uploaded-images%2F2020-05%2F44501160-9b6d-11ea-aff3-5718e116c38c&client=amp-blogside-v2&signature=a0c2d11e22efd48962c59ba3ddfb74a68fd29745",
        "publishedAt": "2020-05-21T16:00:22Z",
        "content": "I was equipped with Myzone’s MZ-3 chest tracker ($150) which, according to the company, has 99.4% percent accuracy at measuring your heart-rate. The app, available on iOS and Android, connects to the… [+3497 chars]"
    }];
export default class Displaybox extends Component {


    getFeed = () => {
        const feedCard = feedData.map(data => {
            console.log("data", data);
            return (
                <FeedCard feed={data} />
            )
        })
        return (
            <div>
                {feedCard}
            </div>
        )
    }

    render() {
        const number = 10;
        const { header } = this.props;
        return (
            <Container className="displayBox" maxWidth="xs">
                <Paper elevation={0} id="header" >
                    <h3>{header}</h3>
                </Paper>
                <Paper elevation={0} id="header" >
                    Average Frequency: {number}
                </Paper>
                {/* <Typography component="div" style={{ backgroundColor: 'white', height: '50vh' }} >
                </Typography> */}
                {this.getFeed()}
            </Container>
        )
    }
}