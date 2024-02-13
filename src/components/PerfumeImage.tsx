import Image from 'next/image'
import angel from '../public/images/angel.jpg'
import floraiku from '../public/images/floraiku.jpg'
import ambreSultan from '../public/images/ambre-sultan.jpg'
import khaltatNight from '../public/images/khaltat-night.jpg'
import frustration from '../public/images/frustration.jpg'
import ninShar from '../public/images/nin-shar.jpg'
import roma from '../public/images/roma.jpg'
import eauCapitale from '../public/images/eau-capitale.jpg'
import muscRavageur from '../public/images/musc-ravageur.jpg'
import lostCherry from '../public/images/lost-cherry.jpg'
import laPanthere from '../public/images/la-panthere.jpg'
import lira from '../public/images/lira.jpg'
import angelDemon from '../public/images/angel-ou-demon.jpg'
import { Box } from '@chakra-ui/react'

const IMAGES_SOURCES = {
  angel: angel,
  floraiku: floraiku,
  ambreSultan: ambreSultan,
  khaltatNight: khaltatNight,
  frustration: frustration,
  ninShar: ninShar,
  roma: roma,
  eauCapitale: eauCapitale,
  muscRavageur: muscRavageur,
  lostCherry: lostCherry,
  laPanthere: laPanthere,
  lira: lira,
  angelDemon: angelDemon,
}

const PerfumeImage = ({ photo, title }: { photo: string; title: string }) => {
  return (
    <Box width={92} height={122} marginBottom="10px">
      <Image src={IMAGES_SOURCES[photo]} alt={title} />
    </Box>
  )
}

export default PerfumeImage
