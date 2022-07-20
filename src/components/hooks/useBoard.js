import { useState } from 'react'
import { v4 as uuid } from 'uuid'

export const useBoard = () => {
    const [boardName, setBoardName] = useState('')
    const [boardBg, setBoardBg] = useState('')

    const [allBoards, setAllBoards] = useState(JSON.parse(localStorage.getItem("boards")) || [])
    const [favBoards, setfavBoards] = useState(JSON.parse(localStorage.getItem("fav")) || 0)

    const handleSubmit = (e) => {
        e.preventDefault();
        const obj = {
            name: boardName,
            bg: boardBg,
            id: uuid(),
            favorite: false
        }
        setAllBoards([...allBoards, obj])

        localStorage.setItem('boards', JSON.stringify([...allBoards, obj]))

        setBoardBg("")
        setBoardName("")
    }

    const handleEdit = (id, object) => {
        const updatedBoard = allBoards.map(obj => {
            if (obj.id === id) {
                return (obj = { ...obj, ...object })
            }
            return obj
        })
        setAllBoards(updatedBoard)
        localStorage.setItem('boards', JSON.stringify(updatedBoard))
    }

    const handleDeleteBoard = (filteredData) => {
        setAllBoards(filteredData)
        if (favBoards !== 0) {
            setfavBoards(favBoards - 1)
            localStorage.setItem('fav', JSON.stringify(favBoards - 1))
        }
        localStorage.setItem('boards', JSON.stringify(filteredData))
    }

    const handleFavBoard = (id) => {
        const updatedData = allBoards.map(obj => {
            if (obj.id === id) {
                if (obj.favorite) {
                    return {
                        ...obj,
                        favorite: false
                    }
                }
                return {
                    ...obj,
                    favorite: true
                }
            }
            return obj
        })
        setAllBoards(updatedData)
        localStorage.setItem('boards', JSON.stringify(updatedData))
    }

    return {
        handleDeleteBoard,
        handleFavBoard,
        allBoards,
        favBoards,
        handleSubmit,
        handleEdit,
        boardBg,
        boardName,
        setBoardBg,
        setBoardName,
        setAllBoards
    }
}


// const handleFavBoard = (id) => {
//     const updatedData = allBoards.map(obj => {
//         if (obj.id === id) {
//             if (obj.favorite) {
//                 setfavBoards(favBoards - 1)
//                 localStorage.setItem('fav', JSON.stringify(favBoards - 1))
//                 return {
//                     title: obj.title,
//                     bg: obj.bg,
//                     id: obj.id,
//                     favorite: false
//                 }
//             }
//             setfavBoards(favBoards + 1)
//             localStorage.setItem('fav', JSON.stringify(favBoards + 1))
//             return {
//                 title: obj.title,
//                 bg: obj.bg,
//                 id: obj.id,
//                 favorite: true
//             }
//         }
//         return obj
//     })
//     setAllBoards(updatedData)
//     localStorage.setItem('boards', JSON.stringify(updatedData))
// }