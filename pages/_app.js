/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/prop-types */

import React from 'react';
import Head from 'next/head';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from '../src/theme/GlobalStyle';
import theme from '../src/theme';
import { SEO } from '../src/components/commons/SEO';

export default function App({ Component, pageProps }) {
  return (
    <>
      {/* tag head do html */}
      <Head>
        <title>Instalura</title>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Rubik:ital,wght@0,300;0,400;0,500;0,700;0,800;0,900;1,300;1,400;1,500;1,700;1,800;1,900&display=swap"
          rel="stylesheet"
        />
      </Head>
      <SEO headTitle="Home" />
      <ThemeProvider theme={theme}>
        {/* GlobalStyle precisa estar dentro do theme */}
        <GlobalStyle />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}
