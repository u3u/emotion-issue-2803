import { cache } from '@emotion/css'
import { CacheProvider } from '@emotion/react'
import { MantineProvider } from '@mantine/core'
import type { AppProps } from 'next/app'
import { GlobalStyles } from 'styles'
import { mantine } from 'theme'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <MantineProvider {...mantine}>
      <CacheProvider value={cache}>
        <GlobalStyles />
        <Component {...pageProps} />
      </CacheProvider>
    </MantineProvider>
  )
}

export default MyApp
