import DefaultHead from '@/components/defaultHead'
import '@/styles/globals.css'

export default function App ({ Component, pageProps }) {
  return (
    <>
      <DefaultHead />
      <Component {...pageProps} />
    </>
  )
}
