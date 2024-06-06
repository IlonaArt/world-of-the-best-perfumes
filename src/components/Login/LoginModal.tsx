import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  Input,
  Text,
  Button,
} from '@chakra-ui/react'
import { FormEvent, useState } from 'react'
import { Perfume } from '../../interfaces'

interface LoginModalProps {
  onClose: () => void
}

interface ModalContentProps {
  onChangeModalType: () => void
  onSuccess: () => void
}

type ModalType = 'register' | 'login'

interface Wishlist {
  isSelected: boolean
  name: string
  perfumes: Partial<Perfume>[]
}

interface User {
  name: string
  password: string
  email: string
  wishlists: Wishlist[]
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

export type Users = { [email: string]: User }[]

const isPasswordString = (password: string | number): password is string => {
  return typeof password === 'string'
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

    const password = formData.get('password')
    if (!isPasswordString) {
      setLoginErrorType('passwordEmpty')
      return
    }

    const userData = localStorage.getItem('users')
    if (!userData) {
      setLoginErrorType('incorrectData')
      return
    }

    if (!userData) {
      setLoginErrorType('incorrectData')
      return
    }

    try {
      const users: Users = JSON.parse(userData)
      const user = users.find(user => user[email])?.[email]

      if (!user) {
        setLoginErrorType('incorrectData')
        return
      }

      if (user.password !== password) {
        setLoginErrorType('incorrectData')
        return
      }

      localStorage.setItem(
        'loggedIn',
        JSON.stringify({ name: user.name, email: user.email }),
      )
      onSuccess()
    } catch (error) {
      setLoginErrorType('sww')
      console.error('Error parsing JSON:', error)
    }
  }

  return (
    <>
      <ModalBody display="flex" flexDirection="column" paddingBottom={6}>
        <form onSubmit={handleSubmit}>
          <label>
            Email
            <Input
              mt={1}
              type="email"
              isInvalid={
                loginErrorType === 'emailEmpty' || loginErrorType === 'incorrectData'
              }
              name="email"
              placeholder="email"
              mb={3}
              autoFocus
            />
          </label>
          <label>
            Password
            <Input
              mt={1}
              type="password"
              isInvalid={
                loginErrorType === 'passwordEmpty' || loginErrorType === 'incorrectData'
              }
              name="password"
              placeholder="password"
            />
          </label>
          <Text h={5} fontSize="xs" lineHeight="xs" mt={1} color="errorText">
            {loginErrorType && getLoginErrorText(loginErrorType)}
          </Text>
          <Button type="submit" justifyContent="center" w="100%" mb={3} mt={4}>
            Login
          </Button>
        </form>
        <Text alignSelf="center" mb={3}>
          Or
        </Text>
        <Button onClick={onChangeModalType} flex={1}>
          Register
        </Button>
      </ModalBody>
    </>
  )
}

const RegisterModalContent = ({ onChangeModalType, onSuccess }: ModalContentProps) => {
  const [userData, setUserData] = useState<User>()
  const [isPasswordCorrect, setIsPasswordCorrect] = useState(undefined)
  const [nameError, setNameError] = useState('')
  const [emailError, setEmailError] = useState('')
  const [passwordError, setPasswordError] = useState('')
  const [submitError, setSubmitError] = useState('')

  const onRegister = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    if (
      nameError.length > 0 ||
      emailError.length > 0 ||
      passwordError.length > 0 ||
      !isPasswordCorrect
    ) {
      return
    }

    const dataUsers = localStorage.getItem('users')
    const data: Users = dataUsers ? JSON.parse(dataUsers) : []
    const email = userData.email
    const isUserExists = data.some(user => Boolean(user[email]))
    if (isUserExists) {
      setSubmitError('User with this email already exists, please log in')
      return
    }

    data.push({ [email]: { ...userData, wishlists: [] } })
    localStorage.setItem('users', JSON.stringify(data))
    localStorage.setItem('loggedIn', JSON.stringify({ name: userData.name, email }))
    onSuccess()
  }

  const comparePasswords = (passwordSecondary: string) => {
    if (userData?.password !== passwordSecondary) {
      setIsPasswordCorrect(false)
    } else {
      setIsPasswordCorrect(true)
    }
  }

  return (
    <>
      <ModalBody paddingBottom={6}>
        <form onSubmit={onRegister}>
          <label>
            Name
            <Input
              mt={1}
              type="text"
              placeholder="name"
              mb={1}
              required
              autoFocus
              isInvalid={nameError.length > 0}
              onChange={event => {
                setUserData({ ...userData, name: event.target.value })
                setNameError('')
              }}
              onBlur={event => {
                if (event.target.value.trim().length === 0) {
                  setNameError('Please enter your name')
                }
              }}
            />
          </label>
          <Text mb={2} fontSize="xs" lineHeight="xs" height={6} color="errorText">
            {nameError}
          </Text>
          <label>
            Email
            <Input
              mt={1}
              type="email"
              placeholder="email"
              required
              isInvalid={emailError.length > 0}
              onChange={event => {
                setUserData({ ...userData, email: event.target.value })
                setEmailError('')
              }}
              onBlur={event => {
                if (event.target.value.trim().length === 0) {
                  setEmailError('Please enter your email')
                  return
                }
                const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
                if (emailRegex.test(event.target.value) === false) {
                  setEmailError('Please enter a valid email')
                }
              }}
              mb={1}
            />
          </label>
          <Text mb={2} fontSize="xs" lineHeight="xs" height={6} color="errorText">
            {emailError}
          </Text>
          <label>
            Password
            <Input
              mt={1}
              type="password"
              placeholder="password"
              required
              isInvalid={passwordError.length > 0}
              onChange={event => {
                setUserData({ ...userData, password: event.target.value })
                setPasswordError('')
              }}
              onBlur={event => {
                if (event.target.value.trim().length === 0) {
                  setPasswordError('Please enter your password')
                }
              }}
              mb={1}
            />
          </label>
          <Text mb={2} fontSize="xs" lineHeight="xs" height={6} color="errorText">
            {passwordError}
          </Text>
          <label>
            Repeat password
            <Input
              mt={1}
              type="password"
              placeholder="repeat password"
              required
              isInvalid={isPasswordCorrect === false}
              onBlur={event => comparePasswords(event.target.value)}
              mb={1}
            />
          </label>
          <Text fontSize="xs" lineHeight="xs" height={6} color="errorText">
            {isPasswordCorrect === false && 'Make sure your passwords are the same'}
          </Text>
          <Button w="100%" type="submit" mt={4}>
            Register
          </Button>
          <Text mb={2} fontSize="xs" lineHeight="xs" height={6} color="errorText">
            {submitError}
          </Text>
        </form>
        <Button w="100%" variant="transparent" onClick={onChangeModalType}>
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
