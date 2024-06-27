import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  Input,
  Button,
} from '@chakra-ui/react'
import { FormEvent } from 'react'

interface CreateWishlistModalProps {
  onClose: () => void
  onCreate: (name: string) => void
}

const CreateWishlistModal = ({ onClose, onCreate }: CreateWishlistModalProps) => {
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const formData = new FormData(event.currentTarget)

    const name = formData.get('name') as string

    if (!name) {
      alert('Please enter a name')
    }

    onCreate(name)
  }

  return (
    <Modal closeOnOverlayClick closeOnEsc isOpen onClose={onClose} isCentered>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Create new wishlist</ModalHeader>
        <ModalCloseButton onClick={onClose} />
        <ModalBody>
          <form onSubmit={handleSubmit}>
            <label>
              Wishlist name
              <Input name="name" required />
            </label>
            <Button type="submit">Create</Button>
          </form>
        </ModalBody>
      </ModalContent>
    </Modal>
  )
}

export default CreateWishlistModal
