import { defineStyle, defineStyleConfig } from '@chakra-ui/react'
import { colors } from '../foundations/colors'
import { radii } from '../foundations/radius'
import { typography } from '../foundations/typography'

const baseStyle = defineStyle({
  transition: 'all 0.3s',
  borderRadius: radii.md,
  _disabled: {
    bg: colors.disabled,
    color: colors.white,
    borderColor: colors.disabled,
    opacity: 0.4,
  },
  _hover: {
    _disabled: {
      bg: colors.disabled,
      opacity: 0.4,
    },
  },
})

const outline = defineStyle({
  bg: colors.white,
  color: colors.black,
  border: '1px solid',
  borderColor: colors.black,
  _hover: {
    bg: colors.black,
    color: colors.white,
  },
  _focusVisible: {
    bg: colors.white,
    borderColor: colors.attention,
    border: '2px solid',
    color: colors.black,
  },
})

const transparent = defineStyle({
  border: 'none',
  borderColor: 'transparent',
  _hover: {
    bg: 'transparent',
  },
  _focusVisible: {
    borderColor: colors.attention,
    border: '2px solid',
  },
})

const sizes = {
  sm: defineStyle({
    fontSize: typography.fontSizes.xs,
    lineHeight: typography.lineHeights.xs,
    fontWeight: typography.fontWeights.medium,
    py: '8px',
    px: '18px',
  }),
  md: defineStyle({
    fontSize: typography.fontSizes.sm,
    lineHeight: typography.lineHeights.xs,
    fontWeight: typography.fontWeights.semibold,
    py: '12px',
    px: '24px',
  }),
}

const variants = {
  outline,
  transparent,
}

export const Button = defineStyleConfig({
  baseStyle,
  variants,
  sizes,
  defaultProps: {
    size: 'md',
    variant: 'outline',
  },
})
