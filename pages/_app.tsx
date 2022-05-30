import '../styles/globals.css'
import type { AppProps } from 'next/app'
import DenseAppBar from "../components/Header"


function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <DenseAppBar />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
