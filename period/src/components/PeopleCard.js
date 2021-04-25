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
        <Box
          shadow="md"
          borderRadius={5}
          p={8}
          w={400}
          color="white"
          backgroundColor="red.400"
        >
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
              colorScheme="white"
              onClick={() => styling(toast)}
            >
              Request
            </Button>
            <Button variant="outline" colorScheme="white" ml="9">
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
              src="https://i.pinimg.com/originals/c5/ab/41/c5ab41e3f9766798af79b40d535f45e0.jpg"
            ></Image>
            <Text>
              Hi! I’m Sharon. Feel free to reach out to me for tampons or pads!
            </Text>
          </HStack>
          <Text my={3}>
            <b>Has:</b> Pads, Tampons
          </Text>
          <Text mb={4}>
            <b>Feet Away:</b> 800 feet{" "}
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
              src="https://images.unsplash.com/photo-1522602724102-7b966b111376?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8YXNpYW4lMjB3b21hbnxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80"
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
              src="https://files.globalgiving.org/pfil/2524/pict_large.png?m=1229966746000"
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
              src="https://ca-times.brightspotcdn.com/dims4/default/30ef4c6/2147483647/strip/true/crop/5302x3608+0+0/resize/840x572!/quality/90/?url=https%3A%2F%2Fcalifornia-times-brightspot.s3.amazonaws.com%2F26%2Fae%2F0b42f7914920a706e1f0e72dc94f%2Fana-de-almeida-amaral-gold-award-girl-scout.jpg"
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
