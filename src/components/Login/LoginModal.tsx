import { Button, Heading, Flex, Input, Text, Box } from '@chakra-ui/react'
import Link from 'next/link'

interface LoginModalProps {
  onClose(): void
}

const LoginModal = ({ onClose }: LoginModalProps) => {
  return (
    <Box
      position="absolute"
      height="100vh"
      width="100%"
      left="0"
      right="0"
      top="0"
      bottom="0"
      bg="rgba(0, 0, 0, 0.7)"
      zIndex={2}
    >
      <Flex margin="auto" flexDirection="column" maxWidth="500px" bg="white">
        <Button onClick={onClose}>x</Button>
        <Heading>Login</Heading>
        <form>
          <Input placeholder="email" />
          <Input placeholder="password" />
        </form>
        <Text>Or</Text>
        <Link href="/register">Register</Link>
      </Flex>
    </Box>
  )
}

export default LoginModal
