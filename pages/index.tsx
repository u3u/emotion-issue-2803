import type { NextPage } from 'next'
import { Button, Tooltip } from '@mantine/core'
import tw from 'twin.macro'
import Head from 'next/head'

const Root = tw.div`flex flex-col items-center justify-center h-full p-8 text-center bg-[#f7f7f7]`
const Title = tw.h1`mb-2 text-4xl font-extrabold`
const Desc = tw.small`block mb-5 text-base text-[#969696]`

const title = '👩‍🎤 mantine + twin.macro with emotion issues'

const IndexPage: NextPage = () => {
  return (
    <Root>
      <Head>
        <title>{title}</title>
      </Head>
      <Title>{title}</Title>
      <Desc>
        Global style order and duplicate introduction of <code>@emotion/react</code>
      </Desc>
      <Tooltip
        label="Button background overridden by global style"
        position="bottom"
        transition="fade"
        transitionDuration={300}
        opened
        withArrow
      >
        <Button tw="px-4 shadow">Button</Button>
      </Tooltip>
    </Root>
  )
}

export default IndexPage
