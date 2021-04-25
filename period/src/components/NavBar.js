import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useParams,
} from "react-router-dom";
import {
  Navbar,
  Nav,
  NavDropdown,
  Form,
  FormControl,
  Button,
} from "react-bootstrap";
import HomePage from "../pages/HomePage";
import MapPage from "../pages/MapPage";
import ResourcesPage from "../pages/ResourcesPage";

class NavBar extends React.Component {
  render() {
    const textColor = {
      color: "red",
    };
    return (
      <div>
        <div className="row">
          <div className="col-md-12">
            <Router>
              <Navbar
                style={{ backgroundColor: "white" }}
                expand="lg"
                sticky="top"
              >
                <Navbar.Brand
                  style={{ color: "red", fontWeight: "bold" }}
                  href="#home"
                >
                  Period
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                  <Nav className="mr-auto">
                    <Nav.Link style={textColor} href="/">
                      Map
                    </Nav.Link>
                    <Nav.Link style={textColor} href="/about">
                      About
                    </Nav.Link>
                    <Nav.Link style={textColor} href="/resources">
                      Educational Resources
                    </Nav.Link>
                  </Nav>
                </Navbar.Collapse>
              </Navbar>
              <br />
              <Switch>
                <Route exact path="/HomPage">
                  <HomePage />
                </Route>
                <Route path="/MapPage">
                  <MapPage />
                </Route>
                <Route path="/ResourcesPage">
                  <ResourcesPage />
                </Route>
              </Switch>
            </Router>
          </div>
        </div>
      </div>
    );
  }
}

export default NavBar;
