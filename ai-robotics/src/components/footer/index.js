"use client";
import React, { forwardRef } from "react";
import { Box, Image, Link } from "@chakra-ui/react";
import "../../styles/components/footer.scss";

const Footer = forwardRef((props, ref) => {
  return (
    <Box bg={"#f8f8f8"} h={"100%"} position={"sticky"} ref={ref}>
      <footer className={"footer"}>
        <Box w={"30%"}>
          <Image src="/footer-logo.png" alt="Logo" w={"200px"} h={"160px"} borderRadius={"50%"} 
          //className={"footer-logo"} 
          />
          </Box>
        <Box className={"footer-links"} w={"33%"}>
          {/* <h1 className="footer-head1">Links</h1>
          <a href="/">Home</a> */}
        </Box>
        <Box className={"footer-contact"} w={"36%"}>
          <h2 className="footer-head1">Contact</h2>
          <Link href="mailto:mrautomationsolutions09@gmail.com">mrautomationsolutions09@gmail.com</Link>
        </Box>
      </footer>
    </Box>
  );
});

Footer.displayName = "Footer";
export default Footer;