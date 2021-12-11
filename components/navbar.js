import Logo from './logo';
import NextLink from 'next/link';
import {
    Container,
    Box,
    Link,
    Stack,
    Heading,
    Flex,
    Menu,
    MenuItem,
    MenuList,
    MenuButton,
    IconButton,
    userColorModeValue
} from '@chakra-ui/react';
import { HumburgerIcon } from "@chakra-ui/icons"

const LinkItem = ({ href, path, children }) => {
    const active = path === href;
    const inactiveColor = userColorModeValue("gray200", "whiteAlpha.900")
    return (
        <NextLink href={href}>
            <Link
                p={2}
                bg={active ? "glassTeal" : undefined}
                color={active ? "#202023" : inactiveColor}
            >
                {children}
            </Link>
        </NextLink>
    )
}

const Navbar = props => {
    const { path } = props

    return (
        <Box
            position="fixed"
            as="nav"
            w="100%"
            bg={userColorModeValue("#ffffff40", "'#20202380")}
            style={{backdropFilter: "blur(10px"}}
            zIndex={1}
            {...props}
        >
            Navbar
        </Box>
    )
}