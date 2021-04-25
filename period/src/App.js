import index from "./index.css";
// import "@fontsource/be-vietnam";
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
import ArticleCard from './components/ArticleCard'

import MapPage from "./pages/MapPage.js";
import ResourcesPage from "./pages/ResourcesPage"
function App() {
  return (
    <ChakraProvider>
      <div className="App">
        <ResourcesPage />
      </div>
    </ChakraProvider>
  );
}

export default App;
