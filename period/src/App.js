import index from "./index.css";
// import "@fontsource/be-vietnam";
import logo from "./logo.svg";
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
      <ResourcesPage />
      
    </ChakraProvider>
  );
}

export default App;
