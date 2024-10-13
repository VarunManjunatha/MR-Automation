// import { Box, Image, Button, Menu, MenuButton, MenuList, MenuItem, Link, IconButton, LinkOverlay } from "@chakra-ui/react";
// import React from "react";
// import { HamburgerIcon } from '@chakra-ui/icons';
// import { UseMenuState  } from "./usedisclosure";
// import { useLocation, useNavigate } from 'react-router-dom';
// import "../../styles/components/header.scss";

// const Header = ({ footerRef }) => {
//   const { isOpen, onOpen, onClose } = UseMenuState ();
//   const location = useLocation();
//   const navigate = useNavigate();

//   const NAVBAR_LIST = [
//     { name: "Home", slug: "Home", route: "/" },
//   ];

//   return (
//     <Box className="header">
//       <Image src="/logo.jpg" h={"100px"} alt="Simplitechs"/>

//       <Box display={{ base: "flex", md: "none" }} justifyContent={"flex-end"}>
//         <Menu isOpen={isOpen}>
//           <MenuButton
//             as={IconButton}
//             icon={<HamburgerIcon />}
//             variant="ghost"
//             onClick={isOpen ? onClose : onOpen}
//           />
//           <MenuList>
//             {NAVBAR_LIST.map(item => (
//               <MenuItem key={item.slug} onClick={() => navigate(item.route)}>
//                 <Link
//                   href={item.route}
//                   className={location.pathname === item.route ? "active-link" : ""}
//                 >
//                   {item.name}
//                 </Link>
//               </MenuItem>
//             ))}
//           </MenuList>
//         </Menu>
//       </Box>

//       <Box gap={"30px"} mr={"30px"} display={{ base: "none", md: "flex" }}>
//         <Box layerStyle={"radioButtonGroup"} display="flex" alignItems="center">
//           {NAVBAR_LIST.map(item => (
//             <Box
//               as="button"
//               className={location.pathname === item.route ?"active-link radio" : "radio"}
//               key={item.slug}
//               ml={"25px"}
//               onClick={() => navigate(item.route)}
//             >
//               {item.name}
//             </Box>
//           ))}
//         </Box>
//       </Box>
//     </Box>
//   );
// };

// export default Header;


import { Box, Image, Flex, Button, Menu, MenuButton, MenuList, MenuItem, Link, IconButton, LinkOverlay, Text, Heading } from "@chakra-ui/react";
import React from "react";
import { HamburgerIcon } from '@chakra-ui/icons';
import { UseMenuState  } from "./usedisclosure";
import { useLocation, useNavigate } from 'react-router-dom';
import "../../styles/components/header.scss";

const Header = ({ footerRef }) => {
  const { isOpen, onOpen, onClose } = UseMenuState ();
  const location = useLocation();
  const navigate = useNavigate();

  const NAVBAR_LIST = [
    { name: "Home", slug: "Home", route: "/" },
  ];

  return (
    <Box className="header" h={"110px"}>
      <Image src="/header-logo.png" alt="pramod" w={"120px"} h={"120px"} borderRadius={"50%"}/>
      <Heading className="header-ai-heading">MR Automation Solutions</Heading>
      {/* <Flex>
      <Heading className="text"> <span className="letter letter-1">M</span>
      <span className="letter letter-2">R</span></Heading>
      <Heading m={"40px"} fontFamily={"pirulen"} fontSize={"45px"}>Automation Solution </Heading></Flex> */}
      <Box display={{ base: "flex", md: "none" }} justifyContent={"flex-end"}>
        <Menu isOpen={isOpen}>
          <MenuButton
            as={IconButton}
            icon={<HamburgerIcon />}
            variant="ghost"
            onClick={isOpen ? onClose : onOpen}
          />
          <MenuList>
            {NAVBAR_LIST.map(item => (
              <MenuItem key={item.slug} onClick={() => navigate(item.route)}>
                <Link
                  href={item.route}
                  className={location.pathname === item.route ? "active-link" : ""}
                >
                  {item.name}
                </Link>
              </MenuItem>
            ))}
          </MenuList>
        </Menu>
      </Box>

      <Box gap={"30px"} mr={"30px"} display={{ base: "none", md: "flex" }}>
        <Box layerStyle={"radioButtonGroup"} display="flex" alignItems="center">
          {NAVBAR_LIST.map(item => (
            <Box
              as="button"
              className={location.pathname === item.route ?"active-link radio" : "radio"}
              key={item.slug}
              ml={"25px"}
              onClick={() => navigate(item.route)}
            >
              {item.name}
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default Header;
