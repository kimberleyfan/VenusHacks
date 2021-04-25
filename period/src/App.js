<<<<<<< HEAD
import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar'
=======
import home from './pages/home.html'
import index from './index.css'
import "@fontsource/be-vietnam"
import logo from "./logo.svg";
import "./App.css";
import * as React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import {
  Box,
  Icon as ChakraIcon,
  HStack,
  Button,
  Image,
  Flex,
  Textarea,
} from "@chakra-ui/react";
>>>>>>> 4f89d5b8cd4bc8713e09cb0d8f9b14f28fbdec57

import MapPage from "./pages/MapPage.js";
function App() {
  return (
<<<<<<< HEAD
    <div>
      <NavBar />
    </div>
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
=======
    <ChakraProvider>
      <div className="App">
        <MapPage />
      </div>
    </ChakraProvider>
>>>>>>> 4f89d5b8cd4bc8713e09cb0d8f9b14f28fbdec57
  );
}

export default App;