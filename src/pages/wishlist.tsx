import { Box, Button, Flex, Heading, Text } from '@chakra-ui/react'
import RootLayout from '../components/RootLayout'
import { useEffect, useState } from 'react'
import Card from '../components/Catalogue/PerfumeList/Card'

// we need to add a flag to the data (true|false) to indicate if the product is in the wishlist
// and then we have to add a function that will sort perfumes based on this flag
// and we are going to show here only perfumes with this flag=true

// we can request all perfumes from the effector and sort them in the component
// them we render the Cards with the perfumes that have the flag=true
// we pass all the props

const WishlistPage = () => {
  const [wishlists, setWishlists] = useState([])
  const [currentWishlistIndex, setCurrentWishlistIndex] = useState(0)
  const [perfumes, setPerfumes] = useState([])
  const isWishlistsEmpty = wishlists.length === 0

  useEffect(() => {
    setWishlists(() => {
      const currentUser = localStorage.getItem('loggedIn')
      if (!currentUser) return []
      const { wishlists } = JSON.parse(currentUser)
      const wishlistIndex = wishlists.findIndex(wishlist => wishlist.isSelected)
      if (wishlistIndex >= 0) {
        setCurrentWishlistIndex(wishlistIndex)
      }
      return wishlists
    })
  }, [])

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

  return (
    <RootLayout page="wishlist" title="Wishlist">
      <Box px={{ base: 4, lg: 10, xl: '100px' }} bg="mainBg" flexGrow={1}>
        <Heading
          as="h1"
          fontSize={{ base: '2xl', md: '4xl' }}
          fontWeight="light"
          lineHeight={{ base: '3xl', md: '4xl' }}
          letterSpacing="-1px"
          mt={{ base: 10, xl: '60px' }}
          mb={{ base: 6, xl: '60px' }}
        >
          Wishlist
        </Heading>
        <Flex>
          {isWishlistsEmpty ? (
            <Flex flexDirection="column" alignItems="center">
              <Text>Your wishlist is empty now, start to look for your new favs!</Text>
              <Button>Create new list</Button>
            </Flex>
          ) : (
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
          )}
        </Flex>
      </Box>
    </RootLayout>
  )
}

export default WishlistPage
