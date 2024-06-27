import { useState, useEffect, useCallback } from 'react'
import { useUser } from '../../contexts/user-context/UserContext'
import { Flex, Text, Select } from '@chakra-ui/react'
import Card from '../Catalogue/PerfumeList/Card'
import CreateWishlistButton from './CreateWishlistButton'

const WishlistContent = () => {
  const { user, updateUser } = useUser()
  const wishlists = user?.wishlists ?? []
  const [currentWishlistIndex, setCurrentWishlistIndex] = useState(-1)
  const [perfumes, setPerfumes] = useState([])
  const isWishlistsEmpty = wishlists.length === 0

  useEffect(() => {
    const wishlistIndex = wishlists.findIndex(wishlist => wishlist.isSelected)
    setCurrentWishlistIndex(wishlistIndex)
  }, [wishlists])

  useEffect(() => {
    if (currentWishlistIndex === -1) return
    const wishlist = wishlists[currentWishlistIndex]
    if (!wishlist) return
    const controller = new AbortController()
    fetch('/api/getPerfumesByIds', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ perfumes: wishlist.perfumes }),
      signal: controller.signal,
    })
      .then(response => response.json())
      .then(data => {
        if (!data) return
        setPerfumes(data)
      })
      .catch(error => {
        console.log(error)
      })

    return () => {
      controller.abort()
    }
  }, [currentWishlistIndex])

  const createWishlist = useCallback(() => {
    if (!user) return // TODO: open login modal
    fetch('/api/createWishlist', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ userEmail: user.email, wishlistName: 'New list' }),
    })
      .then(response => response.json())
      .then(({ wishlists }) => updateUser({ ...user, wishlists }))
      .catch(error => {
        console.error(error)
      })
  }, [user])

  const changeWishlist = useCallback(
    (wishlistIndex: number) => {
      console.log(wishlistIndex)
      setCurrentWishlistIndex(wishlistIndex)
      if (!user) return
      const wishlistName = wishlists[wishlistIndex].name
      fetch('/api/changeWishlist', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ userEmail: user.email, wishlistName }),
      })
        .then(response => response.json())
        .then(({ wishlists }) => updateUser({ ...user, wishlists }))
        .catch(error => {
          console.error(error)
        })
    },
    [user],
  )

  if (isWishlistsEmpty) {
    return (
      <Flex flexDirection="column" alignItems="center">
        <Text>Your wishlist is empty now, start to look for your new favs!</Text>
        <CreateWishlistButton />
      </Flex>
    )
  }

  return (
    <Flex>
      <aside>
        <label>
          My lists
          <Select
            size="lg"
            variant="outline"
            name="wishlist"
            backgroundColor="white"
            borderColor="transparent"
            filter="drop-shadow(2px 2px 4px #DDD9D6)"
            color="black"
            cursor="pointer"
            value={currentWishlistIndex}
            onChange={e => changeWishlist(Number(e.target.value))}
          >
            {wishlists.map((wishlist, index) => (
              <option key={wishlist.name + index} value={index}>
                {wishlist.name}
              </option>
            ))}
          </Select>
        </label>
        <CreateWishlistButton />
      </aside>
      <Flex>
        {perfumes.map(perfume => (
          <Card
            key={perfume.id}
            id={perfume.id}
            photo={perfume.photo}
            title={perfume.title}
            brand={perfume.brand}
            price={perfume.price}
            discount={perfume.discount}
            volume={perfume.volume}
          />
        ))}
      </Flex>
    </Flex>
  )
}

export default WishlistContent
