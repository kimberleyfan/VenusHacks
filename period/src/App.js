import "./App.css";
import * as React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import HomePage from "./pages/HomePage.js";
import MapPage from "./pages/MapPage.js";
import ResourcesPage from "./pages/ResourcesPage";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

function App() {
  return (
    <ChakraProvider>
      <Router>
        <Switch>
          <Route path="/about">
            <HomePage />
          </Route>
          <Route path="/resources">
            <ResourcesPage />
          </Route>
          <Route path="/">
            <MapPage />
          </Route>
        </Switch>
      </Router>
    </ChakraProvider>
  );
}

export default App;
