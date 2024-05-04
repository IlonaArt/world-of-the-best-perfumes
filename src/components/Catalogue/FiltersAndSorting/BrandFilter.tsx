import { Select, Text } from '@chakra-ui/react'
import { useState } from 'react'

interface BrandFilterProps {
  brand: string
}

const BrandFilter = ({ brand }: BrandFilterProps) => {
  const [value, setValue] = useState(brand || 'All brands')

  return (
    <Text as="label">
      <Select
        value={value}
        onChange={event => setValue(event.target.value)}
        size="lg"
        fontSize="md"
        variant="outline"
        name="brand"
        backgroundColor="white"
        borderColor="transparent"
        filter="drop-shadow(2px 2px 4px #DDD9D6)"
        cursor="pointer"
      >
        <option value="All brands">All brands</option>
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
    </Text>
  )
}

export default BrandFilter
