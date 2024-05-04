import { Checkbox, Flex, Grid, Input, Text } from '@chakra-ui/react'
import { useUnit } from 'effector-react'
import { $filters } from '../model'
import { useEffect, useState } from 'react'

const VolumeFilter = () => {
  const filters = useUnit($filters)
  const [isChecked, setChecked] = useState(true)

  useEffect(() => {
    setChecked(filters?.volume ? false : true)
  }, [filters?.volume])

  return (
    <fieldset>
      <Flex as="legend" fontSize="md" w="100%" mb={3} gap={2}>
        Volume (ml):
        <Checkbox
          isChecked={isChecked}
          onChange={event => setChecked(event.target.checked)}
          fontSize="sm"
        >
          {isChecked ? 'To equal' : 'To range'}
        </Checkbox>
      </Flex>
      {isChecked ? (
        <Grid templateColumns="repeat(2, 1fr)" gap={3}>
          <Text as="label">
            From
            <Input
              key="minVolume"
              defaultValue={filters?.minVolume}
              type="number"
              name="minVolume"
              bg="white"
              filter="drop-shadow(2px 2px 4px #DDD9D6)"
              borderColor="transparent"
            />
          </Text>
          <Text as="label">
            To
            <Input
              key="maxVolume"
              defaultValue={filters?.maxVolume}
              type="number"
              name="maxVolume"
              bg="white"
              filter="drop-shadow(2px 2px 4px #DDD9D6)"
              borderColor="transparent"
            />
          </Text>
        </Grid>
      ) : (
        <Text as="label">
          Equal
          <Input
            key="volume"
            defaultValue={filters?.volume}
            type="number"
            name="volume"
            bg="white"
            filter="drop-shadow(2px 2px 4px #DDD9D6)"
            borderColor="transparent"
          />
        </Text>
      )}
    </fieldset>
  )
}

export default VolumeFilter
