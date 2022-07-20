import React from 'react'
import { Box, Text, Button } from '@chakra-ui/react'
const ColumnItem = ({ text, id }) => {
    return (
        <Box display={'flex'} alignItems={'center'} draggable cursor={'grab'} bgColor='rgba(255,255,255,0.5)' width={'100%'} padding={'4px 8px'} >
            <Text>{text}</Text>
            <Button variant={'ghost'}>{'<'}</Button>
            <Button variant={'ghost'}>{'>'}</Button>
        </Box >
    )
}

export default ColumnItem