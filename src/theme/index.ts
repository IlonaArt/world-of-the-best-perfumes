import { extendTheme } from '@chakra-ui/react'

import { Button } from './components/button'
import { breakpoints } from './foundations/breakpoints'
import { colors } from './foundations/colors'
import { radius } from './foundations/radius'
import { typography } from './foundations/typography'

const overrides = {
  breakpoints,
  colors,
  radius,
  ...typography,
  components: {
    Button,
  },
  styles: {
    global: {
      '.root-layout': {
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
