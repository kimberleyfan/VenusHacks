import React from "react";
import {
  Box,
  Icon as ChakraIcon,
  HStack,
  Button,
  Image,
  Text,
  AspectRatio,
  Flex,
  Center,
  Textarea,
} from "@chakra-ui/react";
import Marker from "./Icons/marker.svg";
import PeopleCard from "./PeopleCard";

const Map = () => (
  <Box backgroundColor="red.100">
    <Center backgroundColor="red.100">
      <Box boxShadow="lg" w={1000}>
        <div id="map"></div>
        <Image
          pos="absolute"
          w={20}
          zIndex={1}
          top="400"
          left="400"
          src="https://cdn0.iconfinder.com/data/icons/small-n-flat/24/678111-map-marker-512.png"
        />
        <Image
          pos="absolute"
          w={20}
          zIndex={1}
          top="200"
          left="800"
          src="https://cdn0.iconfinder.com/data/icons/small-n-flat/24/678111-map-marker-512.png"
        />
        <Image
          pos="absolute"
          w={20}
          zIndex={1}
          top="150"
          left="980"
          src="https://cdn0.iconfinder.com/data/icons/small-n-flat/24/678111-map-marker-512.png"
        />
        <Image
          pos="absolute"
          w={20}
          zIndex={1}
          top="450"
          left="1000"
          src="https://cdn0.iconfinder.com/data/icons/small-n-flat/24/678111-map-marker-512.png"
        />
        <Image
          pos="absolute"
          w={20}
          zIndex={1}
          top="300"
          left="600"
          src="https://cdn0.iconfinder.com/data/icons/small-n-flat/24/678111-map-marker-512.png"
        />
        <Image
          pos="absolute"
          w={20}
          zIndex={1}
          top="170"
          left="400"
          src="https://cdn0.iconfinder.com/data/icons/small-n-flat/24/678111-map-marker-512.png"
        />

        <AspectRatio ratio={16 / 9}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3963.952912260219!2d3.375295414770757!3d6.5276316452784755!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b8b2ae68280c1%3A0xdc9e87a367c3d9cb!2sLagos!5e0!3m2!1sen!2sng!4v1567723392506!5m2!1sen!2sng"
            alt="demo"
            id="map"
          />
        </AspectRatio>
      </Box>
    </Center>

    <PeopleCard />
    <Text color="red" fontSize="3xl" pb={10}>
      All women above have been confirmed as real and want to help out!
    </Text>
  </Box>
);

export default Map;
