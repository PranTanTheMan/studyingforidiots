import "../styles/globals.css";
import Layout from "../comps/layout";
import {
  ChakraProvider,
  ColorModeProvider,
  useColorMode,
} from "@chakra-ui/react";
import customTheme from "../styles/theme";
import { useState, useEffect } from "react";
import RingLoader from "react-spinners/RingLoader";

// const [loading, setLoading] = useState(false);

// useEffect(() => {
//   setLoading(true);
//   setTimeout(() => {
//     setLoading(false);
//   }, 8000);
// }, []);

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider
      resetCSS
      theme={customTheme}
      option={{ initialColorMode: "dark" }}
    >
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ChakraProvider>
  );
}

export default MyApp;
