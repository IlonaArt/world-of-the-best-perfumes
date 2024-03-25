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
  styles: {
    global: {
      'html, body': {
        height: '100vh',
      },
      '#__next > div': {
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
      },
      ul: {
        listStyle: 'none',
      },
    },
  },
}

export default extendTheme(overrides)
