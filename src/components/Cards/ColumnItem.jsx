import React, { useContext } from 'react'
import { Box, Text, Button } from '@chakra-ui/react'
import { CardContext } from '../../context/CardContext'

const ColumnItem = ({ text, id, prevColumnId, nextColumnId }) => {
    const { handleMoveCard } = useContext(CardContext)

    const handleNext = () => {
        handleMoveCard(nextColumnId, id)
    }

    const handlePrev = () => {
        handleMoveCard(prevColumnId, id)
    }
    return (
        <Box display={'flex'} alignItems={'center'} draggable cursor={'grab'} bgColor='rgba(255,255,255,0.5)' width={'100%'} padding={'4px 8px'} >
            <Text>{text}</Text>
            <Button variant={'ghost'} onClick={handlePrev}>{'<'}</Button>
            <Button variant={'ghost'} onClick={handleNext}>{'>'}</Button>
        </Box >
    )
}

export default ColumnItem