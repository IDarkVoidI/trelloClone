import React, { useContext, useState } from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  Box,
  FormControl,
  FormLabel,
  Input,
  Image,
} from "@chakra-ui/react";
import { BoardContext } from "../../context/BoardContext";
import { BgContext } from "../../context/BgContext";

const TrelloEditModal = ({ title, isOpen, onClose, boardName, boardBg, boardId }) => {
  const { handleEdit } = useContext(BoardContext);
  const { setBg } = useContext(BgContext);
  const [newName, setNewName] = useState(boardName);
  const [newBg, setNewBg] = useState(boardBg);

  const handleSubmit = (e) => {
    e.preventDefault();

    const paylod = {
      name: newName,
      bg: newBg,
    };

    handleEdit(boardId, paylod);
    setBg(newBg);
  };

  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>{title}</ModalHeader>
          <ModalCloseButton />
          <Box as="form" onSubmit={handleSubmit}>
            <ModalBody>
              <FormControl isRequired>
                <FormLabel htmlFor="board-name">Board Name</FormLabel>
                <Input value={newName} id="board-name" type={"text"} onChange={(e) => setNewName(e.target.value)} />
              </FormControl>
              <FormControl mt={6}>
                <FormLabel htmlFor="board-bg">Background Image URL</FormLabel>
                <Input value={newBg} id="board-bg" type={"url"} onChange={(e) => setNewBg(e.target.value)} />
              </FormControl>
              {newBg ? <Image mt={3} src={newBg} alt="background image" /> : ""}
            </ModalBody>
            <ModalFooter>
              <Button colorScheme="blue" variant={"outline"} mr={3} onClick={onClose}>
                Close
              </Button>
              <Button colorScheme="blue" mr={3} onClick={onClose} type={"submit"}>
                Save
              </Button>
            </ModalFooter>
          </Box>
        </ModalContent>
      </Modal>
    </>
  );
};

export default TrelloEditModal;
