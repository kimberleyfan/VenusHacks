import React, { Component } from "react";
import {
  Card, Button
} from 'react-bootstrap';

class ArticleCard3 extends Component{
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
        <Card.Img variant="top" src='https://miro.medium.com/max/7626/1*b9J08PLEm4g9E71bkWt87g.jpeg' />
        <Card.Body>
          <Card.Text style={typeText}>
            Video
          </Card.Text>
          <Card.Title style={title} >Girl Talk: First Period (EP 1)</Card.Title>
          <Card.Text style={dateText}>
            April 24, 2021
          </Card.Text>
          <a style={textStyle}>Read More</a>
        </Card.Body>
      </Card>

    )
  }
}

export default ArticleCard3;
