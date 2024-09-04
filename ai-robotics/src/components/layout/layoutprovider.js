
"use client";
import { Box } from "@chakra-ui/react";
import Header from "../header";
import Footer from "../footer";
import dynamic from "next/dynamic";
import React, { useRef } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from "@/app/page";
import ScrollToTop from "../scrolltotop";


const LayoutProvider = ({ children }) => {
    return (
        <Router>
            <Box zIndex={1}>
                <ScrollToTop />
                <Header />
                <Box marginTop={{ base: "none", md: "125px" }}>
                    <Routes>
                        <Route path="/" element={<Home />} />
                    </Routes>
                </Box>
            </Box>
            <Box zIndex={0}>
                <Footer />
            </Box>
        </Router>
    );
};

export default dynamic(() => Promise.resolve(LayoutProvider), { ssr: false });