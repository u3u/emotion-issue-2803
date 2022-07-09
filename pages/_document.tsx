import { cache } from '@emotion/css'
import createEmotionServer from '@emotion/server/create-instance'
import { ServerStyles, createStylesServer } from '@mantine/next'
import Document, { Html, Head, Main, NextScript, DocumentContext } from 'next/document'

const stylesServer = createStylesServer()

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
  const server = createEmotionServer(cache)
  return {
    ...initialProps,
    styles: (
      <>
        {initialProps.styles}
        <ServerStyles html={initialProps.html} server={stylesServer} />
        <ServerStyles html={initialProps.html} server={server} />
      </>
    ),
  }
}

export default MyDocument
