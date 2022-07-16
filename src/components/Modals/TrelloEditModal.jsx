import React from 'react'
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    Button,
    useDisclosure,
    Box
} from '@chakra-ui/react'
import { SettingsIcon } from '@chakra-ui/icons'

const TrelloEditModal = ({ children, title, handleSubmit }) => {
    const { isOpen, onOpen, onClose } = useDisclosure()

    return (
        <>
            <Button onClick={onOpen}><SettingsIcon /></Button>
            <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>{title}</ModalHeader>
                    <ModalCloseButton />
                    <Box as='form' onSubmit={handleSubmit}>
                        <ModalBody>{children}</ModalBody>
                        <ModalFooter>
                            <Button colorScheme='blue' variant={'outline'} mr={3} onClick={onClose}>Close</Button>
                            <Button colorScheme='blue' mr={3} onClick={onClose} type={'submit'}>Save</Button>
                        </ModalFooter>
                    </Box>
                </ModalContent>
            </Modal>
        </>
    )
}

export default TrelloEditModal