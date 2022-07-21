import React, { createContext } from "react";
import { useBoard } from "../components/hooks/useBoard";

export const BoardContext = createContext({ allBoards: [], boardBg: "", boardName: "" })

function BoardProvider(props) {
    const { allBoards, handleEdit, handleSubmit, boardBg, boardName, setBoardBg, setBoardName, setAllBoards, handleFavBoard } = useBoard()
    return (
        <BoardContext.Provider value={{ allBoards, handleEdit, handleSubmit, boardBg, boardName, setBoardBg, setBoardName, setAllBoards, handleFavBoard }}>
            {props.children}
        </BoardContext.Provider>
    )
}
export default BoardProvider;