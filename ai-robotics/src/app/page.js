"use client"
import { Box, Flex, Heading, Image, Text } from "@chakra-ui/react";

export default function Home() {
  return (
    <Box
      mt={"-25px"}
      backgroundImage="url('/bg1.jpg')"
      backgroundPosition="center"
      backgroundRepeat="no-repeat"
      backgroundSize="cover"
      minHeight="490px"
    >
      <Flex>
        <Box w={"60%"} p={"20px"} mt={"10%"}>
          <Heading color={"#FFF"}>Discover the Future of Robotics</Heading>

          <Text fontSize={"18px"} pt={"20px"} color={"#FFF"}>
            At MR Automation Solutions, we specialize in designing and
            manufacturing advanced robotics that power the future of industry.
            With a strong focus on innovation, precision, and quality, we strive
            to automate processes and empower businesses globally.
          </Text>
        </Box>
        <Box width="40%" height="auto" p={"20px"}>
          <Image src="/project-image.jpg" alt="Project Image" width={"70%"} h={"100%"} borderRadius={"50%"} m={"15% 0px 0px 10%"}/>
        </Box>
      </Flex>
    </Box>
  );
}
