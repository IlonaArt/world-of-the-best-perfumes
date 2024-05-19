import RootLayout from '../components/RootLayout'
import { Box, Flex, Grid, GridItem, Heading, Text } from '@chakra-ui/react'
import Image from 'next/image'
import perfumeCollection from '../public/images/perfume collection_1.jpg'
import perfumeCollectionMonochrome from '../public/images/perfume collection_2.jpg'

const AboutPage = () => {
  return (
    <RootLayout page="about" title="About | World of the best perfumes">
      <Box pt={{ base: 10, lg: '60px' }} pb={{ base: 10, lg: '80px' }} bg="mainBg">
        <Heading
          as="h1"
          fontSize={{ base: '2xl', md: '4xl' }}
          fontWeight="light"
          lineHeight={{ base: '3xl', md: '4xl' }}
          letterSpacing="-1px"
          mb={{ base: 6, lg: '60px' }}
          px={{ base: 4, lg: 10, xl: '100px' }}
        >
          Welcome to our world of the best perfumes!
        </Heading>
        <Grid
          gridTemplateColumns={{ base: '100%', lg: 'auto 50%' }}
          marginBottom={{ base: 10, xl: '100px' }}
        >
          <GridItem display={{ base: 'none', lg: 'block' }}>
            <Image
              priority
              src={perfumeCollection}
              style={{ width: '100%', height: '100%', maxHeight: '456px' }}
              alt="Perfume collection with: 'Poeme Lancome', 'Dune Dior', 'Classique Jean Paul Gaultier', 'Dolce Vita Dior' perfumes"
            />
          </GridItem>
          <GridItem>
            <Image
              priority
              src={perfumeCollectionMonochrome}
              style={{ width: '100%', height: '100%', maxHeight: '456px' }}
              alt="Perfume collection with diverse lux perfumes in monochrome style"
            />
          </GridItem>
        </Grid>
        <Flex
          px={{ base: 4, lg: 10, xl: '100px' }}
          flexDirection="column"
          gap={{ base: 10, xl: '100px' }}
        >
          <Text
            fontSize={{ base: 'md', xl: '22px' }}
            lineHeight={{ base: 'lg', xl: '3xl' }}
            color="black"
            width={{ base: '100%', lg: '50%' }}
          >
            Welcome to our fragrance website, where we curate a mesmerizing collection of
            the finest fragrance brands from around the world. Each brand we represent
            exudes a unique identity, captivating aromas, and a dedication to artistry
            that will awaken your senses and leave a lasting impression.
          </Text>
          <Text
            fontSize={{ base: 'md', xl: '22px' }}
            lineHeight={{ base: 'lg', xl: '3xl' }}
            alignSelf={{ base: 'baseline', lg: 'flex-end' }}
            color="black"
            width={{ base: '100%', lg: '50%' }}
          >
            Discover the epitome of elegance with timeless classics, a brand that has
            mastered the art of capturing the essence of sophistication in every bottle.
            With a heritage spanning generations, their fragrances blend tradition and
            modernity, leaving a trail of refinement wherever you go.
          </Text>
          <Text
            fontSize={{ base: 'md', xl: '22px' }}
            lineHeight={{ base: 'lg', xl: '3xl' }}
            color="black"
            width={{ base: '100%', lg: '50%' }}
          >
            Whether you seek a signature scent that reflects your personality or desire to
            explore new aromatic adventures, our collection is a celebration of the
            diverse and enchanting world of fragrances. Embrace the power of scent and
            elevate your sensory experience with the captivating brands we proudly present
            to you.
          </Text>
        </Flex>
      </Box>
    </RootLayout>
  )
}

export default AboutPage
