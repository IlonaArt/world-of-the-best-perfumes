import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  Input,
  Text,
  ModalFooter,
  Button,
} from '@chakra-ui/react'
import { useState } from 'react'

interface LoginModalProps {
  isOpen: boolean
  onClose: () => void
}

interface LoginModalContentProps {
  onClick: () => void
}

type ModalType = 'register' | 'login'

interface RegisterModalContentProps {
  onClick: () => void
}

const LoginModalContent = ({ onClick }: LoginModalContentProps) => {
  return (
    <>
      <ModalBody>
        <form>
          <Input placeholder="email" />
          <Input placeholder="password" />
          <Button>Login</Button>
        </form>
        <Text>Or</Text>
      </ModalBody>

      <ModalFooter>
        <Button onClick={onClick}>Register</Button>
      </ModalFooter>
    </>
  )
}

const RegisterModalContent = ({ onClick }: RegisterModalContentProps) => {
  return (
    <>
      <ModalBody>
        <form>
          <Input placeholder="name" />
          <Input placeholder="email" />
          <Input placeholder="password" />
          <Button>Register</Button>
        </form>
        <Button onClick={onClick}>Go to login</Button>
      </ModalBody>

      <ModalFooter></ModalFooter>
    </>
  )
}

const LoginModal = ({ isOpen, onClose }: LoginModalProps) => {
  const [activeModal, setActiveModal] = useState<ModalType>('login')

  return (
    <Modal closeOnOverlayClick={false} isOpen={isOpen} onClose={onClose} isCentered>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Login</ModalHeader>
        <ModalCloseButton onClick={onClose} />
        {activeModal === 'login' && (
          <LoginModalContent onClick={() => setActiveModal('register')} />
        )}
        {activeModal === 'register' && (
          <RegisterModalContent onClick={() => setActiveModal('login')} />
        )}
      </ModalContent>
    </Modal>
  )
}

export default LoginModal
