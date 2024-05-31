import { Button, Popover, PopoverContent, PopoverTrigger } from '@chakra-ui/react'
import { Text } from '@chakra-ui/react'

interface UserPopoverProps {
  userName: string
}

const UserPopover = ({ userName }: UserPopoverProps) => {
  const logout = () => {
    localStorage.removeItem('loggedIn')
    window.location.reload()
  }

  return (
    <Popover>
      <PopoverTrigger>
        <Text
          as="button"
          display={{ base: 'none', md: 'flex' }}
          gap={3}
          fontSize="lg"
          lineHeight="lg"
          color="white"
          _hover={{
            color: 'beige',
          }}
        >
          Hi, {userName}!
        </Text>
      </PopoverTrigger>
      <PopoverContent>
        <Button size="xs" onClick={logout}>
          Logout
        </Button>
      </PopoverContent>
    </Popover>
  )
}

export default UserPopover
