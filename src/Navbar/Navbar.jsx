import { ReactNode } from "react";
import {
  Box,
  Flex,
  HStack,
  Link,
  IconButton,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  useColorModeValue,
  Stack,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import { Link as Navlink } from "react-scroll";
import Darkmode from "../DarkMode/Darkmode";

const Links = ["Home", " About", "Skills", "Projects", "Contact"];

const NavLink = ({ children }: { children: ReactNode }) => (
  <Link
    px={2}
    py={1}
    rounded={"md"}
    _hover={{
      textDecoration: "none",
      bg: "none",
      color: "red",
    }}
  >
    {children}
  </Link>
);

export default function Navbar() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box position="fixed" w={"100%"}>
      <Box bg={useColorModeValue("#7FFFD4", "gray.900")} px={4}>
        <Flex h={"80px"} alignItems={"center"} justifyContent={"flex-end"}>
          <IconButton
            size={"md"}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={"Open Menu"}
            display={{ md: "none" }}
            onClick={isOpen ? onClose : onOpen}
          />
          <HStack spacing={8} alignItems={"center"} fontSize="xl">
            <HStack
              as={"nav"}
              spacing={4}
              display={{ base: "none", md: "flex" }}
            >
              <a
                href="#home"
                style={{ cursor: "pointer" }}
                smooth={true}
                duration={1000}
              >
                Home
              </a>

              <a
                href="#about"
                style={{ cursor: "pointer" }}
                smooth={true}
                duration={1000}
              >
                About
              </a>

              <a
                href="#skills"
                style={{ cursor: "pointer" }}
                smooth={true}
                duration={1000}
              >
                Skills
              </a>

              <Navlink
                to="projects"
                style={{ cursor: "pointer" }}
                smooth={true}
                duration={1000}
              >
                Projects
              </Navlink>

              <Navlink
                to="contact"
                style={{ cursor: "pointer" }}
                smooth={true}
                duration={1000}
              >
                Contact
              </Navlink>
              <Darkmode />
            </HStack>
          </HStack>
          <Flex alignItems={"center"}>
            <Menu>
              <MenuButton
                as={Button}
                rounded={"full"}
                variant={"link"}
                cursor={"pointer"}
                minW={0}
              ></MenuButton>
              <MenuList>
                <MenuItem>Link 1</MenuItem>
                <MenuItem>Link 2</MenuItem>
                <MenuDivider />
                <MenuItem>Link 3</MenuItem>
              </MenuList>
            </Menu>
          </Flex>
        </Flex>

        {isOpen ? (
          <Box pb={4} display={{ md: "none" }}>
            <Stack as={"nav"} spacing={4}>
              {Links.map((link) => (
                <NavLink key={link}>{link}</NavLink>
              ))}
            </Stack>
          </Box>
        ) : null}
      </Box>
    </Box>
  );
}
