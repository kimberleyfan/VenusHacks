import React from "react";
import {
  Box,
  useToast,
  Icon as ChakraIcon,
  HStack,
  Button,
  Image,
  Spacer,
  Flex,
  Center,
  Text,
  Textarea,
} from "@chakra-ui/react";
const styling = (toast) => {
  toast({
    title: "Done!",
    description: "Request sent.",
    status: "success",
    duration: 9000,
    isClosable: true,
  });
};
const PeopleCard = () => {
  const toast = useToast();
  return (
    <Box display="flexWrap" boxShadow="lg" m={1} my={10} mx={90}>
      <HStack>
        <Box shadow="md" borderRadius={5} p={8} w={400} backgroundColor="white">
          <HStack>
            <Image
              borderRadius="full"
              boxSize={75}
              mr={3}
              src="https://ath2.unileverservices.com/wp-content/uploads/sites/4/2020/02/IG-annvmariv-1024x1016.jpg"
            ></Image>
            <Text>
              Hi! I’m Emily. I love makeup and hair! Feel free to reach out to
              me for tampons or pads!
            </Text>
          </HStack>
          <Text my={3}>
            <b>Has:</b> Pads, Tampons
          </Text>
          <Text mb={4}>
            <b>Feet Away:</b> 100 feet{" "}
          </Text>
          <Center>
            <Button
              variant="outline"
              colorScheme="red"
              onClick={() => styling(toast)}
            >
              Request
            </Button>
            <Button variant="outline" colorScheme="red" ml="9">
              Contact
            </Button>
          </Center>
        </Box>
        <Box shadow="md" borderRadius={5} p={8} w={400} backgroundColor="white">
          <HStack>
            <Image
              borderRadius="full"
              boxSize={75}
              mr={3}
              src="https://ath2.unileverservices.com/wp-content/uploads/sites/4/2020/02/IG-annvmariv-1024x1016.jpg"
            ></Image>
            <Text>
              Hi! I’m Emily. I love makeup and hair! Feel free to reach out to
              me for tampons or pads!
            </Text>
          </HStack>
          <Text my={3}>
            <b>Has:</b> Pads, Tampons
          </Text>
          <Text mb={4}>
            <b>Feet Away:</b> 100 feet{" "}
          </Text>
          <Center>
            <Button
              variant="outline"
              colorScheme="red"
              onClick={() => styling(toast)}
            >
              Request
            </Button>
            <Button variant="outline" colorScheme="red" ml="9">
              Contact
            </Button>
          </Center>
        </Box>
        <Box shadow="md" borderRadius={5} p={8} w={400} backgroundColor="white">
          <HStack>
            <Image
              borderRadius="full"
              boxSize={75}
              mr={3}
              src="https://ath2.unileverservices.com/wp-content/uploads/sites/4/2020/02/IG-annvmariv-1024x1016.jpg"
            ></Image>
            <Text>
              Hi! I’m Emily. I love makeup and hair! Feel free to reach out to
              me for tampons or pads!
            </Text>
          </HStack>
          <Text my={3}>
            <b>Has:</b> Pads, Tampons
          </Text>
          <Text mb={4}>
            <b>Feet Away:</b> 100 feet{" "}
          </Text>
          <Center>
            <Button
              variant="outline"
              colorScheme="red"
              onClick={() => styling(toast)}
            >
              Request
            </Button>
            <Button variant="outline" colorScheme="red" ml="9">
              Contact
            </Button>
          </Center>
        </Box>
        <Box shadow="md" borderRadius={5} p={8} w={400} backgroundColor="white">
          <HStack>
            <Image
              borderRadius="full"
              boxSize={75}
              mr={3}
              src="https://ath2.unileverservices.com/wp-content/uploads/sites/4/2020/02/IG-annvmariv-1024x1016.jpg"
            ></Image>
            <Text>
              Hi! I’m Emily. I love makeup and hair! Feel free to reach out to
              me for tampons or pads!
            </Text>
          </HStack>
          <Text my={3}>
            <b>Has:</b> Pads, Tampons
          </Text>
          <Text mb={4}>
            <b>Feet Away:</b> 100 feet{" "}
          </Text>
          <Center>
            <Button
              variant="outline"
              colorScheme="red"
              onClick={() => styling(toast)}
            >
              Request
            </Button>
            <Button variant="outline" colorScheme="red" ml="9">
              Contact
            </Button>
          </Center>
        </Box>
      </HStack>

      <HStack mt={2}>
        <Box shadow="md" borderRadius={5} p={8} w={400} backgroundColor="white">
          <HStack>
            <Image
              borderRadius="full"
              boxSize={75}
              mr={3}
              src="https://ath2.unileverservices.com/wp-content/uploads/sites/4/2020/02/IG-annvmariv-1024x1016.jpg"
            ></Image>
            <Text>
              Hi! I’m Emily. I love makeup and hair! Feel free to reach out to
              me for tampons or pads!
            </Text>
          </HStack>
          <Text my={3}>
            <b>Has:</b> Pads, Tampons
          </Text>
          <Text mb={4}>
            <b>Feet Away:</b> 100 feet{" "}
          </Text>
          <Center>
            <Button
              variant="outline"
              colorScheme="red"
              onClick={() => styling(toast)}
            >
              Request
            </Button>
            <Button variant="outline" colorScheme="red" ml="9">
              Contact
            </Button>
          </Center>
        </Box>
        <Box shadow="md" borderRadius={5} p={8} w={400} backgroundColor="white">
          <HStack>
            <Image
              borderRadius="full"
              boxSize={75}
              mr={3}
              src="https://ath2.unileverservices.com/wp-content/uploads/sites/4/2020/02/IG-annvmariv-1024x1016.jpg"
            ></Image>
            <Text>
              Hi! I’m Emily. I love makeup and hair! Feel free to reach out to
              me for tampons or pads!
            </Text>
          </HStack>
          <Text my={3}>
            <b>Has:</b> Pads, Tampons
          </Text>
          <Text mb={4}>
            <b>Feet Away:</b> 100 feet{" "}
          </Text>
          <Center>
            <Button
              variant="outline"
              colorScheme="red"
              onClick={() => styling(toast)}
            >
              Request
            </Button>
            <Button variant="outline" colorScheme="red" ml="9">
              Contact
            </Button>
          </Center>
        </Box>
        <Box shadow="md" borderRadius={5} p={8} w={400} backgroundColor="white">
          <HStack>
            <Image
              borderRadius="full"
              boxSize={75}
              mr={3}
              src="https://ath2.unileverservices.com/wp-content/uploads/sites/4/2020/02/IG-annvmariv-1024x1016.jpg"
            ></Image>
            <Text>
              Hi! I’m Emily. I love makeup and hair! Feel free to reach out to
              me for tampons or pads!
            </Text>
          </HStack>
          <Text my={3}>
            <b>Has:</b> Pads, Tampons
          </Text>
          <Text mb={4}>
            <b>Feet Away:</b> 100 feet{" "}
          </Text>
          <Center>
            <Button
              variant="outline"
              colorScheme="red"
              onClick={() => styling(toast)}
            >
              Request
            </Button>
            <Button variant="outline" colorScheme="red" ml="9">
              Contact
            </Button>
          </Center>
        </Box>
        <Box shadow="md" borderRadius={5} p={8} w={400} backgroundColor="white">
          <HStack>
            <Image
              borderRadius="full"
              boxSize={75}
              mr={3}
              src="https://ath2.unileverservices.com/wp-content/uploads/sites/4/2020/02/IG-annvmariv-1024x1016.jpg"
            ></Image>
            <Text>
              Hi! I’m Emily. I love makeup and hair! Feel free to reach out to
              me for tampons or pads!
            </Text>
          </HStack>
          <Text my={3}>
            <b>Has:</b> Pads, Tampons
          </Text>
          <Text mb={4}>
            <b>Feet Away:</b> 100 feet{" "}
          </Text>
          <Center>
            <Button
              variant="outline"
              colorScheme="red"
              onClick={() => styling(toast)}
            >
              Request
            </Button>
            <Button variant="outline" colorScheme="red" ml="9">
              Contact
            </Button>
          </Center>
        </Box>
      </HStack>
    </Box>
  );
};

export default PeopleCard;
