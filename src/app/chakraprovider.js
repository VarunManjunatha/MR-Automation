 "use client";
import { ChakraProvider } from "@chakra-ui/react";
import { extendTheme } from "@chakra-ui/react";
import { UseMenuState } from "@/components/header/usedisclosure";

const breakpoints = {
  base: "0px",
  sm: "320px",
  midSize: "460px",
  md: "768px",
  lg: "960px",
  bs: "1030px",
  xl: "1200px",
  "2xl": "1536px",
};

export const colors = {
  primary: {
    light: {
      1: "#E8E8E8",
      2: "#F0F0F5",
    },
    dark: {
      1: "#222222",
      2: "#191919",
      3: "#16171B",
      4: "#131313",
    },
    white: {
      1: "FFFFFF",
    },
  },
};

const theme = extendTheme({
  breakpoints,

  layerStyles: {
    spaceBetween: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
    },
    flexCenter: {
      display: "flex",
      alignItems: "center",
    },
    flexColumn: {
      display: "flex",
      flexDirection: "column",
    },
    center: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },
    flexSpaceBetween: {
      display: "flex",
      justifyContent: "space-between",
    },
    flexAlignCenterJustifyCenter: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
    flexCenterSpaceBetween: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
    },
  },
});

export function Providers({ children }) {
  const menuState = UseMenuState(); 

  return (
    <ChakraProvider theme={theme}>
      {children}
    </ChakraProvider>
  );
}
