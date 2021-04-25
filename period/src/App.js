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

import MapPage from "./pages/MapPage.js";
function App() {
  return (
    <ChakraProvider>
      <div className="App">
        <MapPage />
      </div>
    </ChakraProvider>
  );
}

export default App;