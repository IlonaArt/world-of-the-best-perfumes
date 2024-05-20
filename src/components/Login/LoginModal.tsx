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
import { FormEvent, useState } from 'react'

interface LoginModalProps {
  onClose: () => void
}

interface ModalContentProps {
  onChangeModalType: () => void
  onSuccess: () => void
}

type ModalType = 'register' | 'login'

interface User {
  name: string
  password: string
  email: string
}

type LoginErrorType = 'emailEmpty' | 'passwordEmpty' | 'incorrectData' | 'sww'

const getLoginErrorText = (errorType: LoginErrorType) => {
  switch (errorType) {
    case 'emailEmpty':
      return 'Please enter your email'
    case 'passwordEmpty':
      return 'Please enter your password'
    case 'incorrectData':
      return 'Please check your email or password'
    case 'sww':
    default:
      return 'Something went wrong, please try again'
  }
}

const LoginModalContent = ({ onChangeModalType, onSuccess }: ModalContentProps) => {
  const [loginErrorType, setLoginErrorType] = useState<LoginErrorType>(undefined)

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setLoginErrorType(undefined)
    const formData = new FormData(event.currentTarget)

    const email = formData.get('email') as string
    if (!email) {
      setLoginErrorType('emailEmpty')
      return
    }

    const password = formData.get('password') as string
    if (!password) {
      setLoginErrorType('passwordEmpty')
      return
    }

    const userData = localStorage.getItem(email)
    if (!userData) {
      setLoginErrorType('incorrectData')
      return
    }

    try {
      const user = JSON.parse(userData) as User
      if (user.password !== password) {
        setLoginErrorType('incorrectData')
        return
      }
      localStorage.setItem('user', JSON.stringify(user))
      onSuccess()
    } catch (error) {
      setLoginErrorType('sww')
      console.error('Error parsing JSON:', error)
    }
  }

  return (
    <>
      <ModalBody display="flex" flexDirection="column" paddingBottom={0}>
        <form onSubmit={handleSubmit}>
          <Input
            type="email"
            isInvalid={
              loginErrorType === 'emailEmpty' || loginErrorType === 'incorrectData'
            }
            name="email"
            placeholder="email"
            mb={3}
            autoFocus
          />
          <Input
            type="password"
            isInvalid={
              loginErrorType === 'passwordEmpty' || loginErrorType === 'incorrectData'
            }
            name="password"
            placeholder="password"
          />
          <Text h={6} mt={3}>
            {loginErrorType && getLoginErrorText(loginErrorType)}
          </Text>
          <Button type="submit" justifyContent="center" w="100%" mb={3} mt={4}>
            Login
          </Button>
        </form>
        <Text alignSelf="center" mb={3}>
          Or
        </Text>
      </ModalBody>

      <ModalFooter paddingTop={0}>
        <Button onClick={onChangeModalType} flex={1}>
          Register
        </Button>
      </ModalFooter>
    </>
  )
}

const RegisterModalContent = ({ onChangeModalType, onSuccess }: ModalContentProps) => {
  const [userData, setUserData] = useState<User>()
  const [isPasswordCorrect, setIsPasswordCorrect] = useState(undefined)

  const onRegister = () => {
    localStorage.setItem(userData.email, JSON.stringify(userData))
    localStorage.setItem('user', JSON.stringify(userData))
    onSuccess()
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
        <form>
          <Input
            type="text"
            placeholder="name"
            required
            autoFocus
            onChange={event => setUserData({ ...userData, name: event.target.value })}
            mb={3}
          />
          <Input
            type="email"
            placeholder="email"
            required
            onChange={event => setUserData({ ...userData, email: event.target.value })}
            mb={3}
          />
          <Input
            type="password"
            placeholder="password"
            required
            onChange={event => setUserData({ ...userData, password: event.target.value })}
            mb={3}
          />
          <Input
            type="password"
            placeholder="repeat password"
            required
            onChange={event => comparePasswords(event.target.value)}
          />
          <Text fontSize="xs" lineHeight="xs" mt={3} height={6}>
            {isPasswordCorrect === false && 'Make sure your passwords are the same'}
          </Text>
          <Button w="100%" type="submit" onClick={onRegister} mt={4} mb={3}>
            Register
          </Button>
        </form>
        <Button w="100%" onClick={onChangeModalType}>
          Go to login
        </Button>
      </ModalBody>
    </>
  )
}

const LoginModal = ({ onClose }: LoginModalProps) => {
  const [activeModal, setActiveModal] = useState<ModalType>('login')

  const handleSuccess = () => {
    window.location.reload()
  }

  return (
    <Modal closeOnOverlayClick closeOnEsc isOpen onClose={onClose} isCentered>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>{activeModal === 'login' ? 'Login' : 'Register'}</ModalHeader>
        <ModalCloseButton onClick={onClose} />
        {activeModal === 'login' && (
          <LoginModalContent
            onChangeModalType={() => setActiveModal('register')}
            onSuccess={handleSuccess}
          />
        )}
        {activeModal === 'register' && (
          <RegisterModalContent
            onChangeModalType={() => setActiveModal('login')}
            onSuccess={handleSuccess}
          />
        )}
      </ModalContent>
    </Modal>
  )
}

export default LoginModal
