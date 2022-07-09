import { cache } from '@emotion/css'
import { globalEmotionCache } from 'styles'
import createEmotionServer from '@emotion/server/create-instance'
import { ServerStyles, createStylesServer } from '@mantine/next'
import Document, { Html, Head, Main, NextScript, DocumentContext } from 'next/document'

const mantineEmotionServer = createStylesServer()

export function MyDocument() {
  return (
    <Html>
      <Head />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}

MyDocument.getInitialProps = async (ctx: DocumentContext) => {
  const initialProps = await Document.getInitialProps(ctx)
  const globalEmotionServer = createEmotionServer(globalEmotionCache)
  const cssEmotionServer = createEmotionServer(cache)
  return {
    ...initialProps,
    styles: (
      <>
        {initialProps.styles}
        <ServerStyles html={initialProps.html} server={globalEmotionServer} />
        <ServerStyles html={initialProps.html} server={mantineEmotionServer} />
        <ServerStyles html={initialProps.html} server={cssEmotionServer} />
      </>
    ),
  }
}

export default MyDocument
