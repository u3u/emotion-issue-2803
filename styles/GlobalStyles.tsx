import { Global } from '@emotion/react'
import { omit } from 'remeda'
import tw, { css, GlobalStyles as BaseStyles, globalStyles } from 'twin.macro'

const buttons = 'button, [type="button"], [type="reset"], [type="submit"]'

const baseStyles = css({
  ...globalStyles,
  button: tw`bg-transparent`,
  [buttons]: omit(globalStyles[buttons] as any, ['backgroundColor']),
})

const customStyles = css({
  'html, body, #__next': tw`h-full`,
  html: {
    ...tw`antialiased text-black/80`,
    textSizeAdjust: '100%',
    WebkitOverflowScrolling: 'touch',
    WebkitTapHighlightColor: 'transparent',
  },
})

export const GlobalStyles = () => (
  <>
    <BaseStyles />
    {/* <Global styles={baseStyles} /> */}
    <Global styles={customStyles} />
  </>
)
