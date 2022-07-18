import React from 'react'
import { Box, Text } from '@chakra-ui/react'
const ColumnItem = ({ text, id }) => {
    return (
        <Box draggable cursor={'grab'} bgColor='rgba(255,255,255,0.5)' width={'100%'} padding={'4px 8px'} >
            <Text>{text}</Text>
        </Box >
    )
}

export default ColumnItem