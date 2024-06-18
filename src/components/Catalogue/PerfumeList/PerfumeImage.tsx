import Image from 'next/image'
import angel from '../../../public/images/angel.jpg'
import floraiku from '../../../public/images/floraiku.jpg'
import ambreSultan from '../../../public/images/ambre-sultan.jpg'
import khaltatNight from '../../../public/images/khaltat-night.jpg'
import frustration from '../../../public/images/frustration.jpg'
import ninShar from '../../../public/images/nin-shar.jpg'
import roma from '../../../public/images/roma.jpg'
import eauCapitale from '../../../public/images/eau-capitale.jpg'
import muscRavageur from '../../../public/images/musc-ravageur.jpg'
import lostCherry from '../../../public/images/lost-cherry.jpg'
import laPanthere from '../../../public/images/la-panthere.jpg'
import lira from '../../../public/images/lira.jpg'
import angelDemon from '../../../public/images/angel-ou-demon.jpg'
import alien from '../../../public/images/alien.jpg'
import ambreOrientSecret from '../../../public/images/ambre-d-orient.jpg'
import bouquetIdeale from '../../../public/images/bouquet-ideale.jpg'
import eauDeSoleilBlanc from '../../../public/images/eau-de-soleil-blanc.jpg'
import philosykos from '../../../public/images/philosykos.jpg'
import rougeSmoking from '../../../public/images/rouge-smoking.jpg'
import { Box } from '@chakra-ui/react'

const IMAGES_SOURCES = {
  angel,
  floraiku,
  ambreSultan,
  khaltatNight,
  frustration,
  ninShar,
  roma,
  eauCapitale,
  muscRavageur,
  lostCherry,
  laPanthere,
  lira,
  angelDemon,
  alien,
  ambreOrientSecret,
  bouquetIdeale,
  eauDeSoleilBlanc,
  philosykos,
  rougeSmoking,
}

const PerfumeImage = ({ photo, title }: { photo: string; title: string }) => {
  return (
    <Box width={92} height={122}>
      <Image src={IMAGES_SOURCES[photo]} alt={title} />
    </Box>
  )
}

export default PerfumeImage
