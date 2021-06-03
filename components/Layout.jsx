import React from 'react';
import Head from 'next/head';

import Nav from './Nav';
import Footer from './Footer';

const Layout = ({ children }) => {
  return (
    <>
      <Head>
        <title>Together</title>
        <link rel="icon" href="/favicon.ico" />
        <link href="https://fonts.googleapis.com/css?family=Source+Sans+Pro:400,700" rel="stylesheet" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
        <meta name="msapplication-TileColor" content="#603cba" />
        <meta name="theme-color" content="#ffffff"></meta>
      </Head>

      <main
        id="app"
        className="leading-normal tracking-normal text-gray-900"
        styles="font-family: 'Source Sans Pro', sans-serif;">
        <div className="circle-bg h-screen pb-14 bg-right bg-cover">
          <div className="w-full container mx-auto p-6">
            <Nav />
            <div>{ children }</div>
            <Footer />
          </div>
        </div>
      </main>
    </>
  );
};

export default Layout;
