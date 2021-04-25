import React from "react";
import {
  Box,
  Icon as ChakraIcon,
  HStack,
  Button,
  Image,
  Flex,
  Text,
  Textarea,
} from "@chakra-ui/react";
const PeopleCard = () => (
  <Box boxShadow="lg" w={400} m={1} backgroundColor="white" mb={10}>
    <Box boxShadow="md" p={5}>
      <HStack>
        <Image
          borderRadius="full"
          boxSize={75}
          src="https://ath2.unileverservices.com/wp-content/uploads/sites/4/2020/02/IG-annvmariv-1024x1016.jpg"
        ></Image>
        <Text>
          Hi! I’m Emily. I love makeup and hair! Feel free to reach out to me
          for tampons or pads!
        </Text>
      </HStack>
      <Text>Has: Pads, Tampons</Text>
      <Text>Feet Away: 100 feet </Text>
    </Box>
    <Box boxShadow="md" p={5}>
      <HStack>
        <Image
          borderRadius="full"
          boxSize={75}
          src="https://ath2.unileverservices.com/wp-content/uploads/sites/4/2020/02/IG-annvmariv-1024x1016.jpg"
        ></Image>
        <Text>
          Hi! I’m Emily. I love makeup and hair! Feel free to reach out to me
          for tampons or pads!
        </Text>
      </HStack>
      <Text>Has: Pads, Tampons</Text>
      <Text>Feet Away: 100 feet </Text>
    </Box>
    <Box boxShadow="md" p={5}>
      <HStack>
        <Image
          borderRadius="full"
          boxSize={75}
          src="https://ath2.unileverservices.com/wp-content/uploads/sites/4/2020/02/IG-annvmariv-1024x1016.jpg"
        ></Image>
        <Text>
          Hi! I’m Emily. I love makeup and hair! Feel free to reach out to me
          for tampons or pads!
        </Text>
      </HStack>
      <Text>Has: Pads, Tampons</Text>
      <Text>Feet Away: 100 feet </Text>
    </Box>
    <Box boxShadow="md" p={5}>
      <HStack>
        <Image
          borderRadius="full"
          boxSize={75}
          src="https://ath2.unileverservices.com/wp-content/uploads/sites/4/2020/02/IG-annvmariv-1024x1016.jpg"
        ></Image>
        <Text>
          Hi! I’m Emily. I love makeup and hair! Feel free to reach out to me
          for tampons or pads!
        </Text>
      </HStack>
      <Text>Has: Pads, Tampons</Text>
      <Text>Feet Away: 100 feet </Text>
    </Box>
  </Box>
);

export default PeopleCard;
