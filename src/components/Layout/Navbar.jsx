import React from "react";
import {
  Box,
  HStack,
  Container,
  Heading,
  useColorMode,
  Button,
  useDisclosure,
  Drawer,
  DrawerOverlay,
  DrawerBody,
  DrawerContent,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { SunIcon, MoonIcon, HamburgerIcon } from "@chakra-ui/icons";

export const Navbar = (props) => {
  return (
    <>
      <Box as="nav" padding={"15px 0"} bgColor="rgba(255,255,255,0.5)" display={{ base: "none", md: "block" }}>
        <Container maxW={"8xl"}>
          <HStack alignItems={"center"} justifyContent={"space-between"}>
            <Heading>Logo</Heading>
            <HStack justifyContent="space-between" alignItems={"center"} gap={10}>
              <Link to={"/"}>Home</Link>
              {props.action}
            </HStack>
          </HStack>
        </Container>
      </Box>
      <MobileNavbar />
    </>
  );
};

const MobileNavbar = (props) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { toggleColorMode, colorMode } = useColorMode();

  return (
    <>
      <Box display={{ base: "block", md: "none" }} bgColor="rgba(255,255,255,0.5)" padding={"25px 0"}>
        <Container maxW={"8xl"}>
          <HStack>
            <Heading>Logo</Heading>
            <Button onClick={toggleColorMode}>{colorMode === "light" ? <MoonIcon /> : <SunIcon />}</Button>
            <Button onClick={onOpen}>
              <HamburgerIcon />
            </Button>
          </HStack>
        </Container>
      </Box>
      <Drawer placement="top" onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay />
        <DrawerContent height={"200px"} color="black">
          <DrawerBody>
            <Box>
              <Link to="/">Home</Link>
            </Box>
            <Box>
              <Link to="/">Boards</Link>
            </Box>
            <Box>{props.action}</Box>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};
