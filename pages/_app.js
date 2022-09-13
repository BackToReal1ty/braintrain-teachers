import Nav from "../components/Nav";
import Sidebar from "../components/Sidebar";

import "../styles/globals.css";
import { ChakraProvider } from "@chakra-ui/react";

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
