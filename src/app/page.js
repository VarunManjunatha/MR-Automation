"use client";
import { Box, Flex, Heading, Image, Text } from "@chakra-ui/react";

const projectData = [
  {
    title: "Discover the Future of Robotics",
    description:
      "At MR Automation Solutions, we specialize in designing and manufacturing advanced robotics that power the future of industry. With a strong focus on innovation, precision, and quality, we strive to automate processes and empower businesses globally.",
    imageUrl: "/project-image.jpg",
  },
  {
    title: "Serving Robot",
    description:
      "We are at the forefront of technological innovation, specializing in the design, development, and deployment of cutting-edge robots for the food service and healthcare industries. Our mission is to enhance efficiency, safety, and customer experience through intelligent automation, offering reliable robotic solutions that adapt to modern industry demands.",
    imageUrl: "/project-image1.png",
  },
  {
    title: "Kids Robot",
    description:
      "We design fun and educational robots for kids! Our small, interactive robots encourage creativity, problem-solving, and STEM learning through hands-on play. Easy to use and designed for curious minds, our robots help children explore technology while having fun.",
    imageUrl: "/project-image2.png",
  },
  {
    title: "Automated Solarpanel Cleaning Robot",
    description:
      "We revolutionize solar panel maintenance with our cutting-edge cleaning robots. Designed to optimize efficiency and performance, our robots provide automated, eco-friendly solutions to ensure solar panels operate at peak efficiency. Our technology is engineered to reduce downtime, minimize water usage, and increase the longevity of solar installations.",
    imageUrl: "/project-image3.jpg",
  },
];

export default function Home() {
  return (
    <Box
      mt="-25px"
      backgroundImage="url('/bg1.jpg')"
      backgroundPosition="center"
      backgroundRepeat="no-repeat"
      backgroundSize="cover"
      minHeight="490px"
    >
      {projectData.map((project, index) => (
        <Flex
          key={index}
          flexDirection={index % 2 === 0 ? "row" : "row-reverse"} 
          alignItems="center"
          p="20px"
        >
          <Box w="60%" p="20px" mt="10%">
            <Heading color="#FFF">{project.title}</Heading>
            <Text fontSize="18px" pt="20px" color="#FFF">
              {project.description}
            </Text>
          </Box>
          <Box width="40%" height="auto" p="20px">
            <Image
              src={project.imageUrl}
              alt={project.title}
              width="70%"
              h="250px"
              borderRadius="50%"
              m="15% 0px 0px 10%"
            />
          </Box>
        </Flex>
      ))}
    </Box>
  );
}
