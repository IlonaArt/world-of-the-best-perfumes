import { extendTheme } from '@chakra-ui/react'

import { Button } from './components/button'
import { breakpoints } from './foundations/breakpoints'
import { colors } from './foundations/colors'
import { radii } from './foundations/radius'
import { typography } from './foundations/typography'

const overrides = {
  breakpoints,
  colors,
  radii,
  ...typography,
  components: {
    Button,
  },
}

export default extendTheme(overrides)
