import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import NextProgress from "next-progress";

import Layout from '@/components/Layouts/Layouts'

export default function App({ Component, pageProps }: AppProps) {
  
  return (
    <>
      <NextProgress color="#FFD700" delay={300} options={{ showSpinner: false }} />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  )
}
