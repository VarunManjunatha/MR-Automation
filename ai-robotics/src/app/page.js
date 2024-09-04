import { Box, Flex, Heading, Image, Text } from "@chakra-ui/react";

export default function Home() {
  return (
    <Box>
      <Flex>
        <Box w={"50%"} p={"0px 0px 20px 20px"}>
          <Heading>Discover the feature of Robotics</Heading>

          <Text fontSize={"30px"} pt={"20px"}>At MR Automation Solutions, we specialize in designing and 
            manufacturing advanced robotics that power the future of industry. 
            With a strong focus on innovation, precision, and quality, 
            we strive to automate processes and empower businesses globally.</Text></Box>
        <Box width="50%" height="auto" p={"0px 20px 20px 0px"}>
          <Image
            src="/project-image.jpg"
            alt="Project Image"
            width={"100%"}
          />
        </Box>
      </Flex>
    </Box>
  );
}
