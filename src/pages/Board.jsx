import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Box, Heading, HStack } from '@chakra-ui/react'
import { BoardContext } from '../context/BoardContext'
import { BgContext } from '../context/BgContext'
import BoardColumn from '../components/Cards/BoardColumn'
import BoardMenu from '../components/Modals/BoardMenu'
import { CardContext } from '../context/CardContext'

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
        <Box>
            <Box
                mt={10} bgColor='rgba(255,255,255,0.5)'
            >
                <Box display={'flex'} justifyContent='space-between'>
                    <Heading as={'h2'}>{board.name}</Heading><BoardMenu board={board} />
                </Box>
            </Box>
            <HStack mt={2} alignItems='start'>
                <BoardColumn column_id={1212} title='Todo' columnItems={cards?.filter((card) => card.column_id === 1212)} board_id={board.id} nextColumnId={12123} prevColumnId={null} />
                <BoardColumn column_id={12123} title='In Progress' columnItems={cards?.filter((card) => card.column_id === 12123)} board_id={board.id} nextColumnId={12125} prevColumnId={1212} />
                <BoardColumn column_id={12125} title='Done' columnItems={cards?.filter((card) => card.column_id === 12125)} board_id={board.id} nextColumnId={null} prevColumnId={12123} />
            </HStack>
        </Box>
    )
}

export default Board