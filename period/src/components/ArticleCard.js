import React, { Component } from "react";
import {
  Card, Button
} from 'react-bootstrap';
import logo from '../logo.svg'

class ArticleCard extends Component{
  render(){
    const boxStyle = {
      width: '500px',
      // border: '1px solid grey',
      borderRadius: '10px',
      padding: '20px',
      boxShadow: "3px 3px 3px #9E9E9E",
      backgroundColor: 'white'
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
      padding: '5px',
      color: 'red',
      fontSize: '12px'
    };

    return (
      <Card style={boxStyle}>
        <Card.Img variant="top" src="https://source.unsplash.com/user/erondu/600x400" />
        <Card.Body>
          <Card.Text style={typeText}>
            Podcast
          </Card.Text>
          <Card.Title style={title} >Card Title</Card.Title>
          <Card.Text style={dateText}>
            April 24, 2021
          </Card.Text>
          <Button variant="primary">Read More</Button>
        </Card.Body>
      </Card>

    )
  }
}

export default ArticleCard;
