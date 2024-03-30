import RootLayout from '../components/RootLayout'
import { Box, Heading, Flex, Text, Select } from '@chakra-ui/react'
import PerfumeList from '../components/Catalogue/PerfumeList/PerfumeList'

const CataloguePage = () => {
  return (
    <RootLayout page="catalogue" title="Catalogue">
      <Box px={{ base: 4, lg: 10, xl: '100px' }} bg="mainBg">
        <Heading
          as="h1"
          fontSize={{ base: '2xl', md: '4xl' }}
          fontWeight="light"
          lineHeight={{ base: '3xl', md: '4xl' }}
          letterSpacing="-1px"
          mt={{ base: 10, xl: '60px' }}
          mb={{ base: 6, xl: '60px' }}
        >
          Catalogue
        </Heading>
        <Flex
          gap={{ base: 5, xl: '60px' }}
          direction={{ base: 'column', xl: 'row' }}
          mb={{ base: 10, xl: '60px' }}
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
                  color="black"
                  cursor="pointer"
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
                  cursor="pointer"
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
                  cursor="pointer"
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
                  cursor="pointer"
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
                  cursor="pointer"
                >
                  <option value="unisex">Unisex</option>
                  <option value="women">Women</option>
                  <option value="men">Men</option>
                </Select>
              </Box>
            </Box>
          </Flex>

          <PerfumeList />
        </Flex>
      </Box>
    </RootLayout>
  )
}

export default CataloguePage
