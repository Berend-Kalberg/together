import React from 'react';
import { useUser, withPageAuthRequired } from '@auth0/nextjs-auth0';

require('dotenv');

import Loading from '../components/Loading';

function Profile() {
  const { user, isLoading } = useUser();

  var request = require('request');

  var options = {
    method: 'POST',
    url: 'https://together-app.eu.auth0.com/oauth/token',
    headers: { 'content-type': 'application/json' },
    body: {
      client_id: process.env.AUTH0_CLIENT_ID,
      client_secret: process.env.AUTH0_CLIENT_SECRET,
      audience: 'https://together-app.eu.auth0.com/api/v2/',
      grant_type: 'client_credentials'
    },
    json: true
  };

  request(options, function (error, response, body) {
    if (error) throw new Error(error);

    console.log(body);
  });

  return (
    <>
      {isLoading && <Loading />}
      {user && (
        <>
          <div className="container pt-24 md:pt-48 px-6 mx-auto flex flex-wrap flex-col md:flex-row items-center">
            <div className="flex flex-col w-full xl:w-2/5 justify-center lg:items-start overflow-y-hidden">
              <h1 className="my-4 text-3xl md:text-5xl text-purple-800 font-bold leading-tight text-center md:text-left slide-in-bottom-h1">
                Profile
              </h1>
            </div>

            <div className="w-full xl:w-3/5 py-6 overflow-y-hidden">
              <img className="w-5/6 mx-auto lg:mr-0 slide-in-bottom" src="devices.svg" />
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
