import { Box } from "@chakra-ui/react";
import React, { PropsWithChildren } from "react";

type Props = PropsWithChildren<{}>;

const AppLayout = ({ children }: Props) => {
  return (
    <Box
      maxW={900}
      px={4}
      mt={{
        base: 50,
        md: 100,
        lg: 150,
      }}
      mx="auto"
    >
      {children}
    </Box>
  );
};

export default AppLayout;
