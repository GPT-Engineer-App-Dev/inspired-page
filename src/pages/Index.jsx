import { Box, Container, Flex, HStack, Link, Spacer, Text, VStack, Image } from "@chakra-ui/react";

const Index = () => {
  const items = [
    { title: "Item 1", points: 100, author: "Author1", time: "1 hour ago", comments: 50 },
    { title: "Item 2", points: 200, author: "Author2", time: "2 hours ago", comments: 30 },
    { title: "Item 3", points: 300, author: "Author3", time: "3 hours ago", comments: 20 },
    // Add more items as needed
  ];

  return (
    <Box
      bgImage="url('/images/stopwatch-background.jpg')"
      bgSize="cover"
      bgPosition="center"
      minH="100vh"
      color="white"
    >
      <Box bg="rgba(0, 0, 0, 0.5)" w="100%" p={4}>
        <Flex maxW="container.lg" mx="auto" align="center">
          <HStack spacing={4}>
            <Link href="#">new</Link>
            <Link href="#">past</Link>
            <Link href="#">comments</Link>
            <Link href="#">ask</Link>
            <Link href="#">show</Link>
            <Link href="#">jobs</Link>
            <Link href="#">submit</Link>
          </HStack>
          <Spacer />
          <Link href="#">login</Link>
        </Flex>
      </Box>
      <Container maxW="container.lg" mt={4}>
        <VStack spacing={4} align="stretch">
          {items.map((item, index) => (
            <Box key={index} p={4} borderWidth="1px" borderRadius="md" bg="rgba(255, 255, 255, 0.8)" color="black">
              <Text fontSize="xl" fontWeight="bold">{item.title}</Text>
              <Text>{item.points} points by {item.author} {item.time} | {item.comments} comments</Text>
            </Box>
          ))}
        </VStack>
      </Container>
    </Box>
  );
};

export default Index;