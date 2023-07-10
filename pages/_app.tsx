import type { AppProps } from 'next/app'
import Head from 'next/head'
import '@/styles/global.css'

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Head>
        <title>Hope.ui</title>
      </Head>

      <Component {...pageProps} />
    </>
  )
}

export default App
