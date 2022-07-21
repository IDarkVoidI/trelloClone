import React, { useContext } from "react";
import { Menu, MenuItem, MenuList, IconButton, MenuButton, useDisclosure } from "@chakra-ui/react";
import { HamburgerIcon, EditIcon, DeleteIcon } from "@chakra-ui/icons";
import TrelloEditModal from "./TrelloEditModal";

const BoardMenu = ({ board }) => {
    const { isOpen, onOpen, onClose } = useDisclosure();

    return (
        <Menu placement="bottom-end">
            <MenuButton as={IconButton} aria-label="Options" icon={<HamburgerIcon />} variant="outline" />
            <MenuList>
                <MenuItem icon={<EditIcon />} onClick={onOpen}>
                    <TrelloEditModal
                        title={"Edit"}
                        onClose={onClose}
                        isOpen={isOpen}
                        boardBg={board.bg}
                        boardName={board.name}
                        boardId={board.id}
                    />
                    Edit...
                </MenuItem>
                <MenuItem icon={<DeleteIcon />}>Delete...</MenuItem>
            </MenuList>
        </Menu>
    );
};

export default BoardMenu;