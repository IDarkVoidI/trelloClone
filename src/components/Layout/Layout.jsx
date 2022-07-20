import React, { useContext, useState } from 'react'
import { Navbar } from './Navbar'
import { Box, Container, FormControl, FormLabel, Input, Image } from '@chakra-ui/react'
import { useLocation } from 'react-router-dom'
import TrelloCreateModal from '../Modals/TrelloCreateModal'
import { BoardContext } from '../../context/BoardContext'
import { BgContext } from '../../context/BgContext'

const Layout = ({ children }) => {
    const location = useLocation()

    const { boardBg, setBoardBg, setBoardName, handleSubmit } = useContext(BoardContext)

    const { bg } = useContext(BgContext)

    const NavbarProps = location.pathname === '/' ? <TrelloCreateModal btnText={'Create'} title='Create A Board' handleSubmit={handleSubmit}>
        <FormControl isRequired>
            <FormLabel htmlFor='board-name'>Board Name</FormLabel>
            <Input id='board-name' type={'text'} onChange={(e) => setBoardName(e.target.value)} />
        </FormControl>
        <FormControl mt={6}>
            <FormLabel htmlFor='board-bg'>Background Image URL</FormLabel>
            <Input id='board-bg' type={'url'} onChange={(e) => setBoardBg(e.target.value)} />
        </FormControl>
        {boardBg ? <Image mt={3} src={boardBg} alt='background image' /> : ""}
    </TrelloCreateModal> : "";

    return (
        <Box
            bgImage={bg ? bg : "none"}
            bgColor={bg ? "none" : "blue.200"}
            bgPos="center"
            bgSize={"cover"}
            bgRepeat="no-repeat">
            <Navbar action={NavbarProps} />
            <Container maxW={'8xl'} mt={20} minH={'87vh'}>{children}</Container>
        </Box>
    )
}

export default Layout