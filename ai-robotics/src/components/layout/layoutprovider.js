
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
            <Box>
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
            </Box>
        </Router>
    );
};




// "use client";
// import { Box } from "@chakra-ui/react";
// import Header from "../header";
// import Footer from "../footer";
// import dynamic from "next/dynamic";
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import Home from "@/app/page";
// import ScrollToTop from "../scrolltotop";

// const LayoutProvider = ({ children }) => {
//     return (
//         <Router>
//             <Box minHeight="200vh" display="flex" flexDirection="column">
//                 <Box zIndex={1}>
//                     <ScrollToTop />
//                     <Header />
//                     <Box flex="1" marginTop={{ base: "none", md: "125px" }}>
//                         <Routes>
//                             <Route path="/" element={<Home />} />
//                         </Routes>
//                     </Box>
//                 </Box>
//                 <Box zIndex={0} mt="auto"> 
//                     <Footer />
//                 </Box>
//             </Box>
//         </Router>
//     );
// };

// export default LayoutProvider;

export default dynamic(() => Promise.resolve(LayoutProvider), { ssr: false });