import { useState, useEffect } from 'react'
import { useUser } from '../../contexts/user-context/UserContext'
import { Flex, Button, Text } from '@chakra-ui/react'
import Card from '../Catalogue/PerfumeList/Card'

const WishlistContent = () => {
  const { user } = useUser()
  const [wishlists, setWishlists] = useState([])
  const [currentWishlistIndex, setCurrentWishlistIndex] = useState(0)
  const [perfumes, setPerfumes] = useState([])
  const isWishlistsEmpty = wishlists.length === 0

  useEffect(() => {
    setWishlists(() => {
      if (!user) return []
      const { wishlists } = user
      const wishlistIndex = wishlists.findIndex(wishlist => wishlist.isSelected)
      if (wishlistIndex >= 0) {
        setCurrentWishlistIndex(wishlistIndex)
      }
      return wishlists
    })
  }, [user])

  useEffect(() => {
    const wishlist = wishlists[currentWishlistIndex]
    if (!wishlist) return
    fetch('/api/getPerfumesByIds', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ perfumes: wishlist.perfumes }),
    })
      .then(response => response.json())
      .then(data => {
        if (!data) return
        setPerfumes(data)
      })
      .catch(error => {
        console.log(error)
      })
  }, [wishlists, currentWishlistIndex])

  if (isWishlistsEmpty) {
    return (
      <Flex flexDirection="column" alignItems="center">
        <Text>Your wishlist is empty now, start to look for your new favs!</Text>
        <Button>Create new list</Button>
      </Flex>
    )
  }

  return (
    <Flex>
      <aside>
        <Text>Wishlists:</Text>
        <ul>
          {wishlists.map(wishlist => (
            <li key={wishlist.name}>{wishlist.name}</li>
          ))}
        </ul>
        <Button>Create new list</Button>
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
