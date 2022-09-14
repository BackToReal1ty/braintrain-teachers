import React from "react";
import Image from "next/image";
import { Text } from "@chakra-ui/react";

const Nav = () => {
  return (
    <div className="sticky top-0 h-12 bg-braintrain_green">
      <div className="flex justify-center h-full align-center">
        <Image
          src="/favicon.png"
          alt="Picture of the author"
          width={50}
          height={25}
        />
      </div>
    </div>
  );
};

export default Nav;
