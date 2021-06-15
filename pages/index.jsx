import React from 'react';

export default function Index() {
  return (
    <>
      <div className="container pt-24 md:pt-48 px-6 mx-auto flex flex-wrap flex-col md:flex-row items-center">
        <div className="flex flex-col w-full xl:w-2/5 justify-center lg:items-start overflow-y-hidden">
          <h1 className="my-4 text-3xl md:text-5xl text-purple-800 font-bold leading-tight text-center md:text-left slide-in-bottom-h1">
            Do more. Together
          </h1>
          <p className="leading-normal text-base md:text-2xl text-gray-700 mb-8 text-center md:text-left slide-in-bottom-subtitle">
            Create your own profile and select some movies. Add a connection and see new recommendations!
          </p>
        </div>
        <div className="w-full xl:w-3/5 py-6 overflow-y-hidden">
          <img className="w-5/6 mx-auto lg:mr-0 slide-in-bottom" src="devices.svg" />
        </div>
      </div>
    </>
  );
}
