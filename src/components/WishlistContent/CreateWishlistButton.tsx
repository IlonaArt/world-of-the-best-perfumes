import { Button } from '@chakra-ui/react'
import { useCallback, useState } from 'react'
import { useUser } from '../../contexts/user-context/UserContext'
import CreateWishlistModal from './CreateWishlistModal'

export const CreateWishlistButton = () => {
  const { user, updateUser } = useUser()
  const [showModal, setShowModal] = useState(false)

  const createWishlist = useCallback(
    (name: string) => {
      if (!user) return // TODO: open login modal
      fetch('/api/createWishlist', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ userEmail: user.email, wishlistName: name }),
      })
        .then(response => response.json())
        .then(({ wishlists }) => {
          updateUser({ ...user, wishlists })
          setShowModal(false)
        })
        .catch(error => {
          console.error(error)
        })
    },
    [user],
  )

  return (
    <>
      <Button onClick={() => setShowModal(true)}>Create new list</Button>
      {showModal && (
        <CreateWishlistModal
          onClose={() => setShowModal(false)}
          onCreate={createWishlist}
        />
      )}
    </>
  )
}

export default CreateWishlistButton
