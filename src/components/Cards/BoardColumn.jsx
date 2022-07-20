import React, { useContext, useState } from 'react'
import { Box, VStack, Heading, Button, useDisclosure, Textarea, HStack } from '@chakra-ui/react'
import ColumnItem from './ColumnItem'
import { v4 as uuid } from 'uuid'
import { CardContext } from '../../context/CardContext'

const BoardColumn = ({ title, column_id, columnItems, board_id }) => {
    const { isOpen, onToggle } = useDisclosure()
    const [cardTitle, setCardTitle] = useState("")
    const { handleCreateCard } = useContext(CardContext)

    const handleSubmit = (e) => {
        e.preventDefault()
        const id = uuid()
        handleCreateCard(column_id, cardTitle, id, board_id)
        setCardTitle("")
        onToggle()
    }
    return (
        <Box>
            <VStack w={'280px'} bgColor={'rgba(255,255,255,0.5)'} alignItems='start' borderRadius={'4px'} padding={'5px 10px'}>
                <Heading as={'h4'} size={'md'}>{title}</Heading>
                {columnItems?.map(el => <ColumnItem key={el.id} text={el.title} />)}
                {!isOpen ? (<Button w={'100%'} variant='solid' bgColor={'white'} onClick={onToggle}>Add a card</Button>) : (
                    <form onSubmit={handleSubmit}>
                        <Textarea required placeholder='Enter a title for this card!' value={cardTitle} onChange={(e) => setCardTitle(e.target.value)} />
                        <HStack>
                            <Button bgColor={'blue.300'} type='submit'>Confirm</Button>
                            <Button onClick={onToggle} variant="ghost">X</Button>
                        </HStack>
                    </form>)}
            </VStack>
        </Box>
    )
}

export default BoardColumn