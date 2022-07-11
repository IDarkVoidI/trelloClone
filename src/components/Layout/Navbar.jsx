import React from 'react'
import { Box, HStack, Container, Heading, useColorMode, Button } from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import { SunIcon, MoonIcon } from '@chakra-ui/icons'


const Navbar = () => {
    const { toggleColorMode, colorMode } = useColorMode()

    return (
        <Box as='nav' padding={'25px 0'} bgColor='blue.400'>
            <Container maxW={'8xl'}>
                <HStack alignItems={'center'} justifyContent={'space-between'}>
                    <Heading>Logo</Heading>
                    <HStack justifyContent='space-between' alignItems={'center'} width={'15%'} gap={10}>
                        <Link to={'/'}>Home</Link>
                        <Link to={'/'}>Boards</Link>
                        <Button onClick={toggleColorMode}>
                            {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
                        </Button>
                    </HStack>
                </HStack>
            </Container>
        </Box>
    )
}

export default Navbar