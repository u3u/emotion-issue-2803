import { Global } from '@emotion/react'
import tw, { css, GlobalStyles as BaseStyles } from 'twin.macro'

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
    <Global styles={customStyles} />
  </>
)
