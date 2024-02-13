import Card from '../components/Card'
import Header from '../components/Header/Header'
import RootLayout from '../components/RootLayout'
import { Box, Heading, Flex, Text } from '@chakra-ui/react'
import data from '../public/dataFragrances.json'
import { Perfume } from '../interfaces'

const IndexPage = () => {
  const dataFragrances: Perfume[] = data
  return (
    <RootLayout title="Home | World of the best perfumes">
      <Header />
      <Box px={{ base: '16px', md: '100px' }}>
        <Heading
          as="h1"
          fontSize={{ base: '2xl', md: '4xl' }}
          fontWeight="light"
          lineHeight={{ base: '3xl', md: '4xl' }}
          letterSpacing="-2px"
          mt={{ base: '40px', md: '60px' }}
          mb={{ base: '50px', md: '80px' }}
        >
          Welcome to our world of the best perfumes!
        </Heading>
        <Flex gap="60px">
          <Box maxW="296px">
            <Text>Sorting</Text>
            <Text>Filters</Text>
          </Box>
          <Flex
            as="ul"
            flexWrap="wrap"
            justify="flex-end"
            gap={{ base: '16px', md: '40px ' }}
            listStyleType="none"
          >
            {dataFragrances.map(item => (
              <Card
                photo={item.photo}
                title={item.title}
                brand={item.brand}
                price={item.price}
                discount={item.discount}
                volume={item.volume}
              />
            ))}
          </Flex>
        </Flex>
      </Box>
    </RootLayout>
  )
}

export default IndexPage
