import { Box, Container, Flex, Heading, Image, Text, VStack } from "@chakra-ui/react";
import { FaPhone, FaMapMarkerAlt, FaEnvelope } from "react-icons/fa";

const Index = () => {
  return (
    <Container maxW="container.xl" p={0}>
      <Flex direction="column" align="center" w="full" minH="100vh">
        <Box bg="pink.100" w="full" p={8} textAlign="center">
          <Heading as="h1" size="2xl" color="pink.800">Delicious Gelato</Heading>
          <Text fontSize="xl" color="pink.700">Taste the variety of flavors!</Text>
        </Box>
        <VStack spacing={8} my={10} align="stretch">
          <Box as="section" p={5} shadow="md" borderWidth="1px">
            <Heading as="h2" size="lg" mb={2}>About Us</Heading>
            <Text fontSize="md">We are passionate about bringing you the freshest and most flavorful gelato made with the finest ingredients.</Text>
          </Box>
          <Box as="section" p={5} shadow="md" borderWidth="1px">
            <Heading as="h2" size="lg" mb={2}>Menu</Heading>
            <Text fontSize="md">Explore our wide range of gelato flavors, from classic vanilla to exotic tropical fruits.</Text>
          </Box>
          <Box as="section" p={5} shadow="md" borderWidth="1px">
            <Heading as="h2" size="lg" mb={2}>Location</Heading>
            <Flex align="center" mb={1}>
              <FaMapMarkerAlt />
              <Text ml={2}>123 Gelato Street, Flavor Town</Text>
            </Flex>
          </Box>
          <Box as="section" p={5} shadow="md" borderWidth="1px">
            <Heading as="h2" size="lg" mb={2}>Contact Information</Heading>
            <Flex align="center" mb={1}>
              <FaPhone />
              <Text ml={2}>+123 456 7890</Text>
            </Flex>
            <Flex align="center">
              <FaEnvelope />
              <Text ml={2}>info@gelatodelicious.com</Text>
            </Flex>
          </Box>
        </VStack>
        <Image src="gelato-display.jpg" alt="Display of various gelato flavors" objectFit="cover" w="full" h="400px" />
      </Flex>
    </Container>
  );
};

export default Index;