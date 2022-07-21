import React, { createContext, useState } from 'react'

export const CardContext = createContext({ cards: [] })

const CardProvider = ({ children }) => {
    const [cards, setCards] = useState([])

    const handleCreateCard = (column_id, title, id, board_id) => {
        const cardObj = {
            board_id: board_id,
            column_id,
            title,
            id
        }
        setCards([...cards, cardObj])
        localStorage.setItem('cards', JSON.stringify([...cards, cardObj]))
    }

    const handleMoveCard = (column_id, id) => {
        const updatedCards = cards?.map(c => {
            if (c.id === id) {
                (c.column_id = column_id)
                return c
            }
            return c
        })
        setCards(updatedCards)
        localStorage.setItem('cards', JSON.stringify(updatedCards))
    }

    return (
        <CardContext.Provider value={{ cards, setCards, handleCreateCard, handleMoveCard }}>{children}</CardContext.Provider>
    )
}

export default CardProvider