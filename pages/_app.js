import Nav from "../components/Nav";
import Sidebar from "../components/Sidebar";

import "../styles/globals.css";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import "antd/dist/antd.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <ChakraProvider>
        <Nav />
        <div className="w-full mx-auto max-w-7xl">
          <div className="pt-8 md:ml-48">
            <Component {...pageProps} />
          </div>
        </div>
        <Sidebar />
      </ChakraProvider>
    </>
  );
}

export default MyApp;
