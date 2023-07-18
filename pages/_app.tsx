import type { AppProps } from 'next/app'
import Head from 'next/head'
import Provider from '@/components/provider'
import { ThemeProvider } from 'next-themes'
import '@/styles/global.css'

interface CustomAppProps extends AppProps {
  Component: React.ComponentType<AppProps> & {
    theme?: string
  }
}

const App: React.FC<CustomAppProps> = ({
  Component,
  pageProps: { session, ...pageProps }
}) => {
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
          forcedTheme={Component.theme}
        >
          <Component {...pageProps} />
        </ThemeProvider>
      </Provider>
    </>
  )
}

export default App
