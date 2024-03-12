import Card from '../components/Card'
import RootLayout from '../components/RootLayout'
import { Box, Heading, Flex, Grid, Text, Select, Spinner } from '@chakra-ui/react'
import { Perfume } from '../interfaces'
import theme from '../theme'
import { useEffect, useState } from 'react'
import { fetchData } from '../utils/fetchData'
import Pagination from '../components/Pagination'

const CataloguePage = () => {
  const [data, setData] = useState<Perfume[]>()

  useEffect(() => {
    fetchData().then(response => {
      setData(response)
    })
  }, [])

  console.log(data)

  return (
    <RootLayout page="catalogue" title="Catalogue">
      <Box px={{ base: '16px', lg: '40px', xl: '100px' }}>
        <Heading
          as="h1"
          fontSize={{ base: '2xl', md: '4xl' }}
          fontWeight="light"
          lineHeight={{ base: '3xl', md: '4xl' }}
          letterSpacing="-1px"
          mt={{ base: '40px', xl: '60px' }}
          mb={{ base: '40px', xl: '80px' }}
        >
          Catalogue
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
              <Text mb={{ base: 0, xl: '14px' }}>Sorting</Text>
              <Box>
                <label htmlFor="a-z"></label>
                <Select
                  defaultValue="a-z"
                  size="lg"
                  variant="outline"
                  name="alphabet"
                  id="a-z"
                  mb={5}
                  backgroundColor="white"
                  borderColor="transparent"
                  filter="drop-shadow(2px 2px 4px #DDD9D6)"
                  fontSize="xs"
                  lineHeight="xs"
                  color={theme.colors.black}
                >
                  <option value="a-z">A-Z</option>
                  <option value="z-a">Z-A</option>
                </Select>
                <label htmlFor="price"></label>
                <Select
                  defaultValue="lower-price"
                  size="lg"
                  variant="outline"
                  name="price"
                  id="price"
                  backgroundColor="white"
                  borderColor="transparent"
                  filter="drop-shadow(2px 2px 4px #DDD9D6)"
                >
                  <option value="lower price">Lower price</option>
                  <option value="higher price">Higher price</option>
                </Select>
              </Box>
            </Box>
            <Box>
              <Text mb={{ base: 0, xl: '14px' }}>Filters</Text>
              <Box>
                <label htmlFor="brand"></label>
                <Select
                  defaultValue="all brands"
                  size="lg"
                  variant="outline"
                  name="brand"
                  id="brand"
                  mb={5}
                  backgroundColor="white"
                  borderColor="transparent"
                  filter="drop-shadow(2px 2px 4px #DDD9D6)"
                >
                  <option value="all brands">All brands</option>
                  <option value="Attar Collection">Attar Collection</option>
                  <option value="Floraïku">Floraïku</option>
                  <option value="Serge Lutens">Serge Lutens</option>
                  <option value="Mugler">Mugler</option>
                  <option value="Etat Libre d'Orange">Etat Libre d'Orange</option>
                  <option value="Jul et Mad Paris">Jul et Mad Paris</option>
                  <option value="Laura Biagiotti">Laura Biagiotti</option>
                  <option value="Diptyque">Diptyque</option>
                  <option value="Frederic Malle">Frederic Malle</option>
                  <option value="Tom Ford">Tom Ford</option>
                  <option value="Cartier">Cartier</option>
                  <option value="Xerjoff">Xerjoff</option>
                  <option value="Givenchy">Givenchy</option>
                </Select>
                <label htmlFor="discount"></label>
                <Select
                  defaultValue="all discounts"
                  size="lg"
                  variant="outline"
                  name="discount"
                  id="discount"
                  mb={5}
                  backgroundColor="white"
                  borderColor="transparent"
                  filter="drop-shadow(2px 2px 4px #DDD9D6)"
                >
                  <option value="all discounts">All discounts</option>
                  {/* next one does filter with and without discounts */}
                  <option value="under €100">Under €100</option>
                </Select>
                <label htmlFor="gender"></label>
                <Select
                  size="lg"
                  variant="outline"
                  name="gender"
                  id="gender"
                  mb={5}
                  backgroundColor="white"
                  borderColor="transparent"
                  filter="drop-shadow(2px 2px 4px #DDD9D6)"
                >
                  <option value="unisex">Unisex</option>
                  <option value="women">Women</option>
                  <option value="men">Men</option>
                </Select>
              </Box>
            </Box>
          </Flex>

          {data ? (
            <Box>
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
                {data.map(item => (
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
              <Pagination amount={data.length} />
            </Box>
          ) : (
            <Spinner />
          )}
        </Flex>
      </Box>
    </RootLayout>
  )
}

export default CataloguePage
