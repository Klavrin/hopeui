import type { AppProps } from 'next/app'
import Head from 'next/head'
import Provider from '@/components/provider'
import { ThemeProvider } from 'next-themes'
import '@/styles/global.css'

const App = ({ Component, pageProps: { session, ...pageProps } }: AppProps) => {
  return (
    <>
      <Head>
        <title>Hope.ui</title>
        <link rel="icon" href="/favicon.svg" />
      </Head>

      <Provider session={session}>
        <ThemeProvider
          enableSystem
          attribute="class"
          forcedTheme={Component.theme || null}
        >
          <Component {...pageProps} />
        </ThemeProvider>
      </Provider>
    </>
  )
}

export default App
