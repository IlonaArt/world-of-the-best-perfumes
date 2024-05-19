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
  Flex,
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

interface User {
  name: string
  password: string
  email: string
}

const LoginModalContent = ({ onClick }: LoginModalContentProps) => {
  return (
    <>
      <ModalBody display="flex" flexDirection="column" paddingBottom={0}>
        <Flex as="form" flexDirection="column">
          <Input placeholder="email" mb={3} autoFocus />
          <Input placeholder="password" mb={6} />
          <Button type="submit" justifyContent="center" mb={3}>
            Login
          </Button>
        </Flex>
        <Text alignSelf="center" mb={3}>
          Or
        </Text>
      </ModalBody>

      <ModalFooter paddingTop={0}>
        <Button onClick={onClick} flex={1}>
          Register
        </Button>
      </ModalFooter>
    </>
  )
}

const RegisterModalContent = ({ onClick }: RegisterModalContentProps) => {
  const [userData, setUserData] = useState<User>()
  const [isPasswordCorrect, setIsPasswordCorrect] = useState(undefined)
  const onRegister = () => {
    localStorage.setItem(userData.email, JSON.stringify(userData))
  }

  const comparePasswords = (passwordSecondary: string) => {
    if (userData.password !== passwordSecondary) {
      setIsPasswordCorrect(false)
    } else {
      setIsPasswordCorrect(true)
    }
  }

  return (
    <>
      <ModalBody>
        <Flex as="form" flexDirection="column">
          <Input
            placeholder="name"
            required
            autoFocus
            onChange={event => setUserData({ ...userData, name: event.target.value })}
            mb={3}
          />
          <Input
            placeholder="email"
            required
            onChange={event => setUserData({ ...userData, email: event.target.value })}
            mb={3}
          />
          <Input
            placeholder="password"
            required
            onChange={event => setUserData({ ...userData, password: event.target.value })}
            mb={3}
          />
          <Input
            placeholder="repeat password"
            required
            onChange={event => comparePasswords(event.target.value)}
            mb={2}
          />
          {isPasswordCorrect === false && (
            <Text fontSize="xs" lineHeight="xs">
              Make sure your passwords are the same
            </Text>
          )}
          <Button type="submit" onClick={onRegister} mt={4}>
            Register
          </Button>
        </Flex>
        <Button onClick={onClick}>Go to login</Button>
      </ModalBody>

      <ModalFooter></ModalFooter>
    </>
  )
}

const LoginModal = ({ isOpen, onClose }: LoginModalProps) => {
  const [activeModal, setActiveModal] = useState<ModalType>('login')

  return (
    <Modal closeOnOverlayClick closeOnEsc isOpen={isOpen} onClose={onClose} isCentered>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>{activeModal === 'login' ? 'Login' : 'Register'}</ModalHeader>
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
