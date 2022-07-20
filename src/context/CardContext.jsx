import React, { createContext, useState } from "react";

export const CardContext = createContext({ cards: [], setCards: undefined, handleCreateCard: undefined });

const CardProvider = ({ children }) => {
  const [cards, setCards] = useState([]);

  const handleCreateCard = (column_id, title, id, board_id) => {
    const cardObj = {
      board_id: board_id,
      column_id,
      title,
      id,
    };
    setCards([...cards, cardObj]);
    localStorage.setItem("cards", JSON.stringify([...cards, cardObj]));
  };

  return <CardContext.Provider value={{ cards, setCards, handleCreateCard }}>{children}</CardContext.Provider>;
};

export default CardProvider;
