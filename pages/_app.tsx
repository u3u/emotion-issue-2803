import { cache } from '@emotion/css'
import { globalEmotionCache } from 'styles'
import { CacheProvider } from '@emotion/react'
import { MantineProvider } from '@mantine/core'
import type { AppProps } from 'next/app'
import { GlobalStyles } from 'styles'
import { mantine } from 'theme'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <CacheProvider value={globalEmotionCache}>
      <GlobalStyles />
      <MantineProvider {...mantine}>
        <CacheProvider value={cache}>
          <Component {...pageProps} />
        </CacheProvider>
      </MantineProvider>
    </CacheProvider>
  )
}

export default MyApp
