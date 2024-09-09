"use client"
import { Box, Flex, Heading, Image, Text } from "@chakra-ui/react";

export default function Home() {
  return (
    <Box
      mt={"-20px"}
      backgroundImage="url('/bg1.jpg')"
      backgroundPosition="center"
      backgroundRepeat="no-repeat"
      backgroundSize="cover"
      minHeight="fit-content"
    >
      <Flex>
        <Box w={"50%"} p={"20px"}>
          <Heading color={"#FFF"}>Discover the Future of Robotics</Heading>

          <Text fontSize={"30px"} pt={"20px"} color={"#FFF"}>
            At MR Automation Solutions, we specialize in designing and
            manufacturing advanced robotics that power the future of industry.
            With a strong focus on innovation, precision, and quality, we strive
            to automate processes and empower businesses globally.
          </Text>
        </Box>
        <Box width="50%" height="auto" p={"20px"}>
          <Image src="/project-image.jpg" alt="Project Image" width={"100%"} />
        </Box>
      </Flex>
    </Box>
  );
}
