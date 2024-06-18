import { useRouter } from 'next/router'
import { Box } from '@chakra-ui/react'
import RootLayout from '../../components/RootLayout'
import PerfumeContent from '../../components/PerfumeContent'

const PerfumePage = () => {
  const router = useRouter()

  if (!router.isReady) return null

  return (
    <RootLayout page="perfume" title="Perfume">
      <Box px={{ base: 4, lg: 10, xl: '100px' }} bg="mainBg" flexGrow={1}>
        <PerfumeContent id={Number(router.query.id)} />
      </Box>
    </RootLayout>
  )
}

export default PerfumePage
