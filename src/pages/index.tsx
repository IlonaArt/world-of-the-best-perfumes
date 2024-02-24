import Card from '../components/Card'
import Header from '../components/Header/Header'
import RootLayout from '../components/RootLayout'
import { Box, Heading, Flex, Grid, Text } from '@chakra-ui/react'
import data from '../public/dataFragrances.json'
import { Perfume } from '../interfaces'

const IndexPage = () => {
  const dataFragrances: Perfume[] = data
  return (
    <RootLayout title="Home | World of the best perfumes">
      <Header />
      <Box px={{ base: '16px', lg: '40px', xl: '100px' }}>
        <Heading
          as="h1"
          fontSize={{ base: '2xl', md: '4xl' }}
          fontWeight="light"
          lineHeight={{ base: '3xl', md: '4xl' }}
          letterSpacing="-2px"
          mt={{ base: '40px', xl: '60px' }}
          mb={{ base: '40px', xl: '80px' }}
        >
          Welcome to our world of the best perfumes!
        </Heading>
        <Flex
          gap={{ base: '20px', xl: '60px' }}
          direction={{ base: 'column', xl: 'row' }}
        >
          <Flex
            flexShrink={0}
            minW={{ base: 'auto', xl: '296px' }}
            justify={{ base: 'space-between', xl: 'initial' }}
            direction={{ base: 'row', xl: 'column' }}
          >
            <Text>Sorting</Text>
            <Text>Filters</Text>
          </Flex>
          <Grid
            as="ul"
            templateColumns={{
              base: 'repeat(1, 1fr)',
              md: 'repeat(2, 1fr)',
              lg: 'repeat(3, 1fr)',
            }}
            gap={{ base: '16px', lg: '40px' }}
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
          </Grid>
        </Flex>
      </Box>
    </RootLayout>
  )
}

export default IndexPage
