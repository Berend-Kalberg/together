import React from 'react';
import { useUser, withPageAuthRequired } from '@auth0/nextjs-auth0';

import Loading from '../components/Loading';

function Profile() {
  const { user, isLoading } = useUser();

  const request = require('request');

  const token = process.env.NEXT_PUBLIC_AUTH0_ACCESS_TOKEN;

  // let EventEmitter = require('events').EventEmitter;
  // let body = new EventEmitter();

  // let headers = {
  //   Authorization: 'Bearer ' + token
  // };
  // let options = {
  //   url: `https://together-app.eu.auth0.com/api/v2/users?q=${user.email}`,
  //   headers: headers
  // };
  // function callback(error, response, result) {
  //   if (!error && response.statusCode == 200) {
  //     body.data = result;
  //     body.emit('update');
  //   }
  // }
  // request(options, callback);

  // body.on('update', function () {
  //   console.log(body.data);
  // });

  let arr = [];

  const getUser = async () => {
    const url = `https://together-app.eu.auth0.com/api/v2/users?q=${user.email}`;

    const response = await fetch(url, {
      headers: {
        Authentication: token
      }
    });
    const responseJson = await response.json();

    console.log(response, responseJson);

    if (responseJson.results) {
      console.log(responseJson.results);
      arr.push(responseJson.results);
    }
  };

  getUser();

  console.log(arr);

  return (
    <>
      {isLoading && <Loading />}
      {user && (
        <>
          <div className="container pt-24 md:pt-48 px-6 mx-auto flex flex-wrap flex-col md:flex-row items-center">
            <div className="flex flex-col w-full xl:w-4/5 justify-center lg:items-start overflow-y-hidden">
              <h1 className="my-4 text-3xl md:text-5xl text-purple-800 font-bold leading-tight text-center md:text-left slide-in-bottom-h1">
                Profile
              </h1>
              <p className="leading-normal text-base md:text-2xl text-gray-700 mb-8 text-center md:text-left slide-in-bottom-subtitle">
                Welcome {user.name}, here is your profile data:
              </p>
              <p className="leading-normal text-base md:text-2xl text-gray-700 mb-8 text-center md:text-left slide-in-bottom-subtitle">
                <span className="font-bold">Connection Code:</span>
                <br></br>
                <span className="font-bold">Name:</span> {user.name} <br></br>
                <span className="font-bold">Email:</span> {user.email} <br></br>
                <span className="font-bold">Username:</span> {user.nickname} <br></br>
                <span className="font-bold">Social:</span> {user.sub}
              </p>
            </div>

            <div className="w-full xl:w-4/5 py-6 overflow-y-hidden">
              <img className="w-5/6 mx-auto lg:mr-0 slide-in-bottom" src="devices.svg" />
            </div>

            <div className="flex flex-col w-full xl:w-2/5 justify-center lg:items-start overflow-y-hidden">
              <h1 className="my-4 text-3xl md:text-5xl text-purple-800 font-bold leading-tight text-center md:text-left slide-in-bottom-h1">
                Add Connection
              </h1>
              <p className="leading-normal text-base md:text-2xl text-gray-700 mb-8 text-center md:text-left slide-in-bottom-subtitle">
                Add a new connection to your profile to get recommendations.
              </p>
            </div>
          </div>
        </>
      )}
      {!user && !loading && (
        <>
          <div className="container pt-24 md:pt-48 px-6 mx-auto flex flex-wrap flex-col md:flex-row items-center">
            <div className="flex flex-col w-full xl:w-2/5 justify-center lg:items-start overflow-y-hidden">
              <h1 className="my-4 text-3xl md:text-5xl text-purple-800 font-bold leading-tight text-center md:text-left slide-in-bottom-h1">
                403 Access Denied
              </h1>
              <p className="leading-normal text-base md:text-2xl mb-8 text-center md:text-left slide-in-bottom-subtitle">
                You need to login / signup before being able to access this page <br></br>
                <br></br>Try the sign in button at the top of your screen!
              </p>
            </div>

            <div className="w-full xl:w-3/5 py-6 overflow-y-hidden">
              <img className="w-5/6 mx-auto lg:mr-0 slide-in-bottom" src="devices.svg" />
            </div>
          </div>
        </>
      )}
    </>
  );
}

export default withPageAuthRequired(Profile, {
  onRedirecting: () => <Loading />
});
