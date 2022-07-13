import React from 'react'
import { Navbar } from './Navbar'
import { Box, Container, FormControl, FormLabel, Input } from '@chakra-ui/react'
import { useLocation } from 'react-router-dom'
import TrelloCreateModal from '../Modals/TrelloCreateModal'


const Layout = ({ children }) => {
    const location = useLocation()

    const NavbarProps = location.pathname === '/' ? <TrelloCreateModal btnText={'Create'} title='Create A Board'>
        <FormControl>
            <FormLabel htmlFor='board-name'>Board Name</FormLabel>
            <Input id='board-name' type={'text'} />
        </FormControl>
        <FormControl mt={6}>
            <FormLabel htmlFor='board-bg'>Background Image URL</FormLabel>
            <Input id='board-bg' type={'url'} />
        </FormControl>
    </TrelloCreateModal> : "";

    return (
        <Box>
            <Navbar action={NavbarProps} />
            <Container maxW={'8xl'} mt={20}>{children}</Container>
        </Box>
    )
}

export default Layout