import Card from '../components/Card'
import Header from '../components/Header/Header'
import RootLayout from '../components/RootLayout'
import { Box, Heading, Flex, Grid, Text, Select } from '@chakra-ui/react'
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
            mb={{ base: 0, xl: 5 }}
            gap="40px"
          >
            <Box>
              <Text mb={{ base: 0, xl: '40px' }} as="span">
                Sorting
              </Text>
              <Select size="lg" variant="outline" placeholder="A-Z">
                <option value="alphabet a-z">A-Z</option>
                <option value="alphabet z-a">Z-A</option>
              </Select>
            </Box>
            <Box>
              <Text mb={{ base: 0, xl: '40px' }} as="span">
                Filters
              </Text>
              <Select size="lg" variant="outline" placeholder="lower price">
                <option value="lower price">lower price</option>
                <option value="higher price">higher price</option>
              </Select>
            </Box>
          </Flex>
          <Grid
            as="ul"
            templateColumns={{
              base: 'repeat(1, 1fr)',
              md: 'repeat(2, 1fr)',
              lg: 'repeat(3, 1fr)',
              '2xl': 'repeat(4, 1fr)',
            }}
            alignSelf="flex-end"
            flexGrow={1}
            gap={{ base: '16px', lg: '40px' }}
            listStyleType="none"
          >
            {dataFragrances.map(item => (
              <Card
                key={item.title}
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
