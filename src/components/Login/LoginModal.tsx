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
import { Perfume, User } from '../../interfaces'
import { useUser } from '../../contexts/user-context/UserContext'

interface LoginModalProps {
  onClose: () => void
}

interface ModalContentProps {
  onChangeModalType: () => void
  onSuccess?: () => void
}

type ModalType = 'register' | 'login'

type ErrorType = 'emailEmpty' | 'passwordEmpty' | 'incorrectData' | 'userExists' | 'sww'

const getErrorText = (errorType: ErrorType) => {
  switch (errorType) {
    case 'emailEmpty':
      return 'Please enter your email'
    case 'passwordEmpty':
      return 'Please enter your password'
    case 'incorrectData':
      return 'Please check your email or password'
    case 'userExists':
      return 'User with this email already exists'
    case 'sww':
    default:
      return 'Something went wrong, please try again'
  }
}

const isPasswordString = (password: string | number): password is string => {
  return typeof password === 'string'
}

const LoginModalContent = ({ onChangeModalType, onSuccess }: ModalContentProps) => {
  const { login } = useUser()
  const [loginErrorType, setLoginErrorType] = useState<ErrorType>(undefined)

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

    try {
      fetch('/api/signIn', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      })
        .then(response => {
          if (!response.ok) {
            setLoginErrorType('incorrectData')
            return
          }

          return response.json()
        })
        .then(user => {
          login({
            name: user.name,
            email: user.email,
            wishlists: user.wishlists,
          })
          onSuccess()
        })
        .catch(() => {
          setLoginErrorType('sww')
        })
    } catch (error) {
      setLoginErrorType('sww')
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
            {loginErrorType && getErrorText(loginErrorType)}
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

interface RegisterUser extends User {
  password: string
}

const RegisterModalContent = ({ onChangeModalType, onSuccess }: ModalContentProps) => {
  const { login } = useUser()
  const [userData, setUserData] = useState<RegisterUser>()
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

    fetch('/api/signUp', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userData),
    })
      .then(response => response.json())
      .then(result => {
        if (result.error) {
          const error = getErrorText(result.error)
          setSubmitError(error)
          return
        }
        login({ name: userData.name, email: userData.email, wishlists: [] })
        onSuccess()
      })
      .catch(error => {
        setSubmitError(error)
      })
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

  return (
    <Modal closeOnOverlayClick closeOnEsc isOpen onClose={onClose} isCentered>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>{activeModal === 'login' ? 'Login' : 'Register'}</ModalHeader>
        <ModalCloseButton onClick={onClose} />
        {activeModal === 'login' && (
          <LoginModalContent onChangeModalType={() => setActiveModal('register')} />
        )}
        {activeModal === 'register' && (
          <RegisterModalContent onChangeModalType={() => setActiveModal('login')} />
        )}
      </ModalContent>
    </Modal>
  )
}

export default LoginModal
