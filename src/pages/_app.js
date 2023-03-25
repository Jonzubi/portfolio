import DefaultHead from '../components/DefaultHead'
import Header from '../components/Header'
import '../styles/globals.css'

export default function App ({ Component, pageProps }) {
  return (
    <>
      <DefaultHead />
      <Header />
      <Component {...pageProps} />
    </>
  )
}
