import React, { Component } from "react";
import {
  Card, Button
} from 'react-bootstrap';
import logo from '../logo.svg'

class NavBar extends Component{
  render(){
    const boxStyle = {
      width: '50rem',
      border: '1px solid grey',
      borderRadius: '10px',
      padding: '20px'
    };
    const imgStyle = {
      width: '100px'
    };
    const flexCol = {
      
      flexDirection: 'column'
    };

    return (
      <Card style={boxStyle}>
        <Card.Body className="d-flex flex-row">
          <div>
            <img src={logo} style={imgStyle} alt="Logo" />
          </div>
          <div>
            <Card.Title>Article Name</Card.Title>
            <Card.Text>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas lobortis pharetra mauris, eget luctus dui mollis vitae. Donec malesuada ut magna vulputate molestie. Nunc dignissim condimentum libero. In ac nibh ullamcorper, pharetra augue ut, tempus mauris. Praesent ultricies felis diam, eget vestibulum neque ornare et.
            </Card.Text>
            <Card.Text>
              Some quick example text to build on the card title and make up the bulk of
              the card's content.
            </Card.Text>
            <Button variant="primary">Contact</Button>
          </div>

        </Card.Body>
      </Card>
    )
  }
}

export default NavBar;
