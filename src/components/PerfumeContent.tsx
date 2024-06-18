import { Spinner, Text } from '@chakra-ui/react'
import { useState, useEffect } from 'react'
import { fetchPerfumeById } from '../utils/fetchPerfumeById'
import PerfumeImage from './Catalogue/PerfumeList/PerfumeImage'
import type { Perfume } from '../interfaces'

interface PerfumeContentProps {
  id: number
}

const PerfumeContent = ({ id }: PerfumeContentProps) => {
  const [isLoading, setIsLoading] = useState(true)
  const [isError, setIsError] = useState(false)
  const [perfume, setPerfume] = useState<Perfume | null>(null)

  useEffect(() => {
    fetchPerfumeById(id)
      .then(data => setPerfume(data))
      .catch(() => setIsError(true))
      .finally(() => setIsLoading(false))
  }, [id])

  if (isLoading) {
    return <Spinner />
  }

  if (isError) {
    return <Text>Something went wrong, try to reload the page</Text>
  }

  if (!perfume) return <Text>404 Not found</Text>

  return (
    <>
      <h1>
        {perfume.title} {perfume.brand}
      </h1>
      <PerfumeImage photo={perfume.photo} title={perfume.title} />
    </>
  )
}

export default PerfumeContent
