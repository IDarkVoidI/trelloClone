import React from 'react'
import { Navbar } from './Navbar'
import { Box, Container } from '@chakra-ui/react'


const Layout = ({ children }) => {
    return (
        <Box>
            <Navbar />
            <Container maxW={'8xl'} mt={20}>{children}</Container>
        </Box>
    )
}

export default Layout