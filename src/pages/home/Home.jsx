import React, { useContext } from 'react'
import { Box, Heading, HStack } from '@chakra-ui/react'
import BoardItem from '../../components/Cards/BoardItem'
import { BoardContext } from '../../context/BoardContext'

const Home = () => {
    const { allBoards } = useContext(BoardContext)

    const fav = allBoards.filter((board) => board.favorite === true)

    return (
        <Box>
            <Box>
                {fav.length > 0 ? <Heading as={'h1'}>Favorites</Heading> : ""}

                <HStack alignItems={'center'} mt={12} gap='20px' flexWrap={'wrap'}>
                    {fav?.map((board) => (<BoardItem key={board.id} {...board} />))}
                </HStack>
            </Box>
            <Box mt={5}>
                <Heading as={'h1'}>All Boards</Heading>

                <HStack alignItems={'center'} mt={12} gap='20px' flexWrap={'wrap'}>
                    {allBoards?.map((board) => (<BoardItem key={board.id} {...board} />))}
                </HStack>
            </Box>
        </Box>
    )
}

export default Home