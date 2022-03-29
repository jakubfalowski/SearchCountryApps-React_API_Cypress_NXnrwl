import { AppProps } from 'next/app';
import Head from 'next/head';
import './styles.css';

import {Header} from '@app/header'

function CustomApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Header />
      <Head>
        <title>Welcome to app2!</title>
      </Head>
      <main className="app">
        <Component {...pageProps} />
      </main>
    </>
  );
}

export default CustomApp;
