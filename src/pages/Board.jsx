import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Box, Heading, HStack } from '@chakra-ui/react'
import { BoardContext } from '../context/BoardContext'
import { BgContext } from '../context/BgContext'
import BoardColumn from '../components/Cards/BoardColumn'
import BoardMenu from '../components/Modals/BoardMenu'

const Board = () => {
    const { allBoards } = useContext(BoardContext)
    const route = useParams()
    const { setBg } = useContext(BgContext)
    const board = allBoards.find((board) => board.id === route.id)
    const [cards, setCards] = useState([])

    useEffect(() => {
        setBg(board.bg)
        const cards = JSON.parse(localStorage.getItem('cards'))
        const filteredCards = cards?.filter((card) => card.board_id === route.id)
        setCards(filteredCards || [])
    }, [])

    const handleCreateCard = (column_id, title, id) => {
        const cardObj = {
            board_id: board.id,
            column_id,
            title,
            id
        }
        setCards([...cards, cardObj])
        localStorage.setItem('cards', JSON.stringify([...cards, cardObj]))
    }

    return (
        <Box>
            <Box
                mt={10} bgColor='rgba(255,255,255,0.5)'
            >
                <Box display={'flex'} justifyContent='space-between'>
                    <Heading as={'h2'}>{board.name}</Heading><BoardMenu board={board} />
                </Box>
            </Box>
            <HStack mt={2} alignItems='start'>
                <BoardColumn column_id={1212} title='Column 1' columnItems={cards?.filter((card) => card.column_id === 1212)} onSubmit={handleCreateCard} />
                <BoardColumn column_id={12123} title='Column 2' columnItems={cards?.filter((card) => card.column_id === 12123)} onSubmit={handleCreateCard} />
                <BoardColumn column_id={12125} title='Column 3' columnItems={cards?.filter((card) => card.column_id === 12125)} onSubmit={handleCreateCard} />
            </HStack>
        </Box>
    )
}

export default Board