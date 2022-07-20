import React, { useContext } from 'react'
import {
    Menu,
    MenuItem,
    MenuList,
    FormControl,
    FormLabel,
    Input,
    Image,
    IconButton,
    MenuButton
} from '@chakra-ui/react'
import { HamburgerIcon, EditIcon, DeleteIcon } from '@chakra-ui/icons'
import { BoardContext } from '../../context/BoardContext'
import TrelloEditModal from './TrelloEditModal'

const BoardMenu = () => {
    const {
        boardBg,
        setBoardBg,
        setBoardName,
        handleEdit,
        boardName } = useContext(BoardContext)
    return (
        <>
            <TrelloEditModal title={'Edit'} handleSubmit={handleEdit}>
                <FormControl isRequired>
                    <FormLabel htmlFor='board-name'>Board Name</FormLabel>
                    <Input placeholder={boardName} id='board-name' type={'text'} onChange={(e) => setBoardName(e.target.value)} />
                </FormControl>
                <FormControl mt={6}>
                    <FormLabel htmlFor='board-bg'>Background Image URL</FormLabel>
                    <Input placeholder={boardBg} id='board-bg' type={'url'} onChange={(e) => setBoardBg(e.target.value)} />
                </FormControl>
                {boardBg ? <Image mt={3} src={boardBg} alt='background image' /> : ""}
            </TrelloEditModal>
            <Menu placement='bottom-end'>
                <MenuButton
                    as={IconButton}
                    aria-label='Options'
                    icon={<HamburgerIcon />}
                    variant='outline'
                />
                <MenuList>
                    <MenuItem icon={<EditIcon />}>
                        <TrelloEditModal title={'Edit'} handleSubmit={handleEdit}>
                            <FormControl isRequired>
                                <FormLabel htmlFor='board-name'>Board Name</FormLabel>
                                <Input placeholder={boardName} id='board-name' type={'text'} onChange={(e) => setBoardName(e.target.value)} />
                            </FormControl>
                            <FormControl mt={6}>
                                <FormLabel htmlFor='board-bg'>Background Image URL</FormLabel>
                                <Input placeholder={boardBg} id='board-bg' type={'url'} onChange={(e) => setBoardBg(e.target.value)} />
                            </FormControl>
                            {boardBg ? <Image mt={3} src={boardBg} alt='background image' /> : ""}
                        </TrelloEditModal>
                        Edit...
                    </MenuItem>
                    <MenuItem icon={<DeleteIcon />}>
                        Delete
                    </MenuItem>
                </MenuList>
            </Menu>
        </>
    )
}

export default BoardMenu