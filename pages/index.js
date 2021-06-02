import Head from "next/head";
import React from "react";

import Nav from '../components/Nav'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Together</title>
        <link rel="icon" href="/favicon.ico" />
        <link href="https://fonts.googleapis.com/css?family=Source+Sans+Pro:400,700" rel="stylesheet"/>
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png"/>
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"/>
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"/>
        <link rel="manifest" href="/site.webmanifest"/>
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5"/>
        <meta name="msapplication-TileColor" content="#603cba"/>
        <meta name="theme-color" content="#ffffff"></meta>
      </Head>

      <main className="leading-normal tracking-normal text-gray-900" styles="font-family: 'Source Sans Pro', sans-serif;">

        <div className="circle-bg h-screen pb-14 bg-right bg-cover">
          <div className="w-full container mx-auto p-6">
            <Nav />
          </div>

          <div className="container pt-24 md:pt-48 px-6 mx-auto flex flex-wrap flex-col md:flex-row items-center">
            
            <div className="flex flex-col w-full xl:w-2/5 justify-center lg:items-start overflow-y-hidden">
              <h1 className="my-4 text-3xl md:text-5xl text-purple-800 font-bold leading-tight text-center md:text-left slide-in-bottom-h1">Do more. Together</h1>
              <p className="leading-normal text-base md:text-2xl mb-8 text-center md:text-left slide-in-bottom-subtitle">Create your own profile and select some movies. Add a connection and see new recommendations!</p>

            </div>
            
            <div className="w-full xl:w-3/5 py-6 overflow-y-hidden">
              <img className="w-5/6 mx-auto lg:mr-0 slide-in-bottom" src="devices.svg"/>
            </div>
            
            <div className="w-full pt-16 pb-6 text-sm text-center md:text-left fade-in">
              <a className="text-gray-500 no-underline hover:no-underline" href="#">&copy; Together 2021</a>
            </div>
            
          </div>
          

        </div>
      </main>
    </div>
  );
}