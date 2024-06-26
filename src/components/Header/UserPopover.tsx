import { Button, Popover, PopoverContent, PopoverTrigger } from '@chakra-ui/react'
import { Text } from '@chakra-ui/react'
import { useUser } from '../../contexts/user-context/UserContext'

interface UserPopoverProps {
  userName: string
}

const UserPopover = ({ userName }: UserPopoverProps) => {
  const { logout } = useUser()

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
