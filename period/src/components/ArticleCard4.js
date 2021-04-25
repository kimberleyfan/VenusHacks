import React, { Component } from "react";
import {
  Card, Button
} from 'react-bootstrap';
import pic from './Icons/WhySchoolsNeedEdu.jpeg'

class ArticleCard4 extends Component{
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
      width: '1000px',
      height: '500px'
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
        <Card.Img variant="top" src='data:image/jpeg;base64,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' />
        <Card.Body>
          <Card.Text style={typeText}>
            Book
          </Card.Text>
          <Card.Title style={title} >Period Power: Harness Your Hormones</Card.Title>
          <Card.Text style={dateText}>
            April 24, 2021
          </Card.Text>
          <a style={textStyle}>Read More</a>
        </Card.Body>
      </Card>

    )
  }
}

export default ArticleCard4;