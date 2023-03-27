import Head from 'next/head'

export default function DefaultHead () {
  return (
    <Head>
      <title>Jon Zubizarreta's portfolio</title>
      <meta name='description' content={'Jon Zubizarreta\'s portfolio'} />
      <meta name='viewport' content='width=device-width, initial-scale=1' />
      <link rel='icon' href='/favicon.ico' />
    </Head>
  )
}
