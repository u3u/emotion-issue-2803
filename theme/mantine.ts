import type { Tuple, CSSObject, MantineProviderProps, ButtonStylesNames } from '@mantine/core'
import tw, { theme as _theme } from 'twin.macro'

const primary = Object.values(_theme`colors.primary`) as Tuple<string, 10>

export const theme: MantineProviderProps['theme'] = {
  black: '#333',
  fontFamily: 'inherit',
  primaryColor: 'primary',
  primaryShade: 5,
  colors: {
    primary,
  },
}

export const styles: MantineProviderProps['styles'] = {
  Button: {
    root: tw`transition duration-300`,
    filled: tw`bg-primary-500 hocus:(bg-primary-400) active:(bg-primary-600)`,
  } as Record<ButtonStylesNames, CSSObject>,
}
