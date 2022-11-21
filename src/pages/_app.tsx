import type { AppProps } from 'next/app'
import Head from 'next/head'
import '../styles/globals.css'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <link rel="shortcut icon" href="/favicon.png" type="image/x-icon" />
        <title>Boxed Water | Your new ecology way to drink water. 💧</title>
      </Head>
      <Component {...pageProps} />
    </>
    
  )
  
}
