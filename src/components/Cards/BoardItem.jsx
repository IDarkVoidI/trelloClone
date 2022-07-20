import React, { useContext } from 'react'
import { StarIcon } from '@chakra-ui/icons'
import { Box, Heading } from '@chakra-ui/react'
import { BoardContext } from '../../context/BoardContext'
import { Link } from 'react-router-dom'

const BoardItem = ({ name, bg, id, favorite }) => {
    const { handleFavBoard } = useContext(BoardContext)

    const handleClickStar = (e) => {
        handleFavBoard(id)
    }

    return (
        <>
            <Box borderRadius={'13px'} padding={'10px 15px'} width={'250px'} height={'180px'} bgImage={bg ? bg : 'none'} bgColor={bg ? 'none' : 'grey'} bgPos='center' bgSize={'cover'} bgRepeat='no-repeat'
                sx={{
                    transition: 'all .2s ease-in-out',
                    _hover: {
                        transform: 'scale(1.1)',
                    }
                }}>
                <Link to={id}>
                    <Heading as={'h3'} cursor={'pointer'}>{name}</Heading>
                </Link>
                <StarIcon cursor={'pointer'} onClick={handleClickStar} fontSize={'20px'} transition={'all .2s ease-in-out'} color={favorite ? 'yellow.300' : 'white'} _hover={{ color: 'yellow.300', transform: 'scale(1.2)' }} />
            </Box>
        </>
    )
}

export default BoardItem