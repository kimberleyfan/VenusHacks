import React from "react";
import {
  Box,
  Icon as ChakraIcon,
  HStack,
  Button,
  UnorderedList,
  ListItem,
  Image,
  Grid,
  GridItem,
  Flex,
  Text,
  Textarea,
} from "@chakra-ui/react";
import Map from "../components/Map";

const MapPage = () => (
  <Box color="red.400">
    <Text
      align="left"
      fontWeight="bold"
      pl={20}
      fontSize={40}
      backgroundColor="red.100"
    >
      Find Your Helper
    </Text>
    <Map />
    <Grid h="1" gap={1}>
      <GridItem rowSpan={1} bg="tomato" />
    </Grid>
    <Text mx={40} mt={10} align="left" fontWeight="semibold">
      <Text fontSize="3xl"> Need Help? </Text>
      How does requesting work?
      <UnorderedList>
        <ListItem>
          As you can see, you will be given a map with nearby women that will be
          able to assist you. From there, you can have a selection of volunteers
          to choose from. Once you have started a request, the helper will be
          alerted. During this time between requesting and receiving the
          menstrual product, you can contact the helper any time you want.
        </ListItem>
      </UnorderedList>
      How do I know that my selection of helpers are real?
      <UnorderedList>
        <ListItem>
          As you can see, you will be given a map with nearby women that will be
          able to assist you. From there, you can have a selection of volunteers
          to choose from. Once you have started a request, the helper will be
          alerted. During this time between requesting and receiving the
          menstrual product, you can contact the helper any time you want.
        </ListItem>
        How do I know that my selection of helpers are real?
      </UnorderedList>
      <UnorderedList>
        <ListItem>
          Before becoming a helper, helpers are suppose to complete background
          checks and confirm their identities. They also choose when and where
          they want to help assist other women in giving menstrual products.{" "}
        </ListItem>
      </UnorderedList>
      If I contact someone, will my phone number be exposed?
      <UnorderedList>
        <ListItem>
          No, do not worry about your phone number being exposed to the helper.
          Both you and your helper have service that keeps both numbers
          concealed. I’ve requested for a while now, what is wrong? I am sorry
          your request is taking slow to process. Consider reaching out to your
          helper by contacing them. If that still does not work, you can
          unrequest and choose another volunteer to help you out!
        </ListItem>
      </UnorderedList>
    </Text>
  </Box>
);

export default MapPage;
