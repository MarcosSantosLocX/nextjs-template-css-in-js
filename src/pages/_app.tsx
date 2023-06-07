import type { AppProps } from 'next/app';
import Head from 'next/head';
import { appWithTranslation } from 'next-i18next';

import { MainLayout } from '@/common/components/layout';
import { globalStyles } from '@/styles/global';

globalStyles();

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>LocXRE</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <MainLayout>
        <Component {...pageProps} />
      </MainLayout>
    </>
  );
}

export default appWithTranslation(App);
