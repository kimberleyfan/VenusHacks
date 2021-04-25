import React, { Component } from "react";
import {
  Card, Button
} from 'react-bootstrap';
import pic from './Icons/PeriodPodcast.jpeg'

class ArticleCard2 extends Component{
  render(){
    const boxStyle = {
      width: '500px',
      // border: '1px solid grey',
      borderRadius: '10px',
      padding: '20px',
      boxShadow: "3px 3px 3px #9E9E9E",
      backgroundColor: 'white',
      margin: '10px'
    };
    const imgStyle = {
      width: '100px'
    };
    const title = {
      fontSize: '25px',
      fontWeight: 'bold',
      padding:'5px',
      color: 'red'
    };
    const typeText = {
      fontWeight:'bold',
      fontSize: '14px',
      padding: '5px',
      color: 'red'
    };
    const dateText = {
      padding: '2px',
      color: 'red',
      fontSize: '12px'
    };
    const textStyle = {
      textDecorationLine: 'underline'

    }

    return (
      <Card style={boxStyle}>
        <Card.Img variant="top" src='https://images.squarespace-cdn.com/content/v1/5b7d89053917ee10a55d8211/1572972897874-YQM0R7RTL31L60WRDQRI/ke17ZwdGBToddI8pDm48kFWxnDtCdRm2WA9rXcwtIYR7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z5QPOohDIaIeljMHgDF5CVlOqpeNLcJ80NK65_fV7S1UcTSrQkGwCGRqSxozz07hWZrYGYYH8sg4qn8Lpf9k1pYMHPsat2_S1jaQY3SwdyaXg/S2_EP20.jpg?format=1500w' />
        <Card.Body>
          <Card.Text style={typeText}>
            Podcast
          </Card.Text>
          <Card.Title style={title} >Real Talk on Periods, Tune into the Podcast!</Card.Title>
          <Card.Text style={dateText}>
            April 24, 2021
          </Card.Text>
          <a style={textStyle}>Read More</a>
        </Card.Body>
      </Card>

    )
  }
}

export default ArticleCard2;
