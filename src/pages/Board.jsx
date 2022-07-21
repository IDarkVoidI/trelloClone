import React, { useContext, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { Box, Heading, HStack } from '@chakra-ui/react'
import { BoardContext } from '../context/BoardContext'
import { BgContext } from '../context/BgContext'
import BoardColumn from '../components/Cards/BoardColumn'
import BoardMenu from '../components/Modals/BoardMenu'
import { CardContext } from '../context/CardContext'
import { DragDropContext } from 'react-beautiful-dnd'

const columns = {
    1: {
        name: 'To-do',
        items: []
    },

    2: {
        name: 'In-Progress',
        items: []
    },

    3: {
        name: 'Done',
        items: []
    },
}

const Board = () => {
    const { allBoards } = useContext(BoardContext)
    const route = useParams()
    const { setBg } = useContext(BgContext)
    const board = allBoards.find((board) => board.id === route.id)
    const { cards, setCards } = useContext(CardContext)



    useEffect(() => {
        setBg(board.bg)
        const cards = JSON.parse(localStorage.getItem('cards'))
        const filteredCards = cards?.filter((card) => card.board_id === route.id)
        setCards(filteredCards || [])
    }, [])


    return (
        <DragDropContext>
            <Box>
                <Box
                    mt={10} bgColor='rgba(255,255,255,0.5)'
                >
                    <Box display={'flex'} justifyContent='space-between'>
                        <Heading as={'h2'}>{board.name}</Heading><BoardMenu board={board} />
                    </Box>
                </Box>
                <HStack mt={2} alignItems='start'>
                    {
                        // It turns an object into an array (list)
                        Object.entries(columns).map(([column_id, column]) => {
                            return (
                                <BoardColumn key={column_id} column_id={column_id} title={column.name} columnItems={cards?.filter((card) => card.column_id === 1212)} />
                            )
                        })
                    }
                </HStack>
            </Box>
        </DragDropContext>
    )
}

export default Board