import { Box } from "@chakra-ui/react";

const Footer = () => {
  return (
    <Box opacity={0.4} fontSize="sm" alignItems={"center"}>
      &copy; {new Date().getFullYear()} Harry Hopkinson. All Rights Reserved.
    </Box>
  );
};

export default Footer;
