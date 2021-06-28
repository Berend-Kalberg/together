import React, { useState, useEffect } from 'react';
import { useUser, withPageAuthRequired } from '@auth0/nextjs-auth0';

import users from './data/users.json';

import SearchBox from '../components/SearchBox';

import Loading from '../components/Loading';

function Profile() {
  const { user, isLoading } = useUser();
  const [searchValue, setSearchValue] = useState('');
  // const [connectionCode, setConnectionCode] = useState([]);

  const connectionCode = [];

  if (user.email === 'berend.kalberg@gmail.com') {
    connectionCode.push(users[1].app_metadata.connection_code);
  } else if (user.email === 'berend.kalberg@hotmail.com') {
    connectionCode.push(users[0].app_metadata.connection_code);
  } else {
    connectionCode.push(makeid(9));
  }

  function makeid(length) {
    var result = [];
    var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for (var i = 0; i < length; i++) {
      result.push(characters.charAt(Math.floor(Math.random() * charactersLength)));
    }
    return result.join('');
  }

  const getUserData = async searchValue => {
    if (!searchValue && searchValue === users[1].app_metadata.connection_code) {
      console.log;
    } else if (!searchValue && searchValue === users[0].app_metadata.connection_code) {
      console.log();
    }
  };

  useEffect(() => {
    getUserData(searchValue);
  }, [searchValue]);

  
  // useEffect(() => {
  //   const connectionCodes = localStorage.getItem('connection-code');

  //   console.log(connectionCodes);
  //   if (connectionCodes && user.email === 'berend.kalberg@gmail.com') {
  //     console.log(user.email)
  //     setConnectionCode(connectionCodes);
  //   } else if (user.email != 'berend.kalberg@gmail.com') {
  //     addConnectionCode(newCode);
  //   } else {
  //     addConnectionCode(newCode);
  //   }
  // }, []);

  // const saveToLocalStorage = code => {
  //   localStorage.setItem('connection-code', code);
  // };

  // const addConnectionCode = code => {
  //   const newConnectionCode = [...connectionCode, code];

  //   if (newConnectionCode.length <= 1) {
  //     setConnectionCode(newConnectionCode);
  //     saveToLocalStorage(newConnectionCode);
  //     console.log(newConnectionCode);
  //   } else {
  //     console.log('');
  //   }
  // };

  return (
    <>
      {isLoading && <Loading />}
      {user && (
        <>
          <div className="container pt-24 md:pt-48 px-6 mx-auto flex flex-wrap flex-col md:flex-row items-center">
            <div className="flex flex-col w-full xl:w-4/5 justify-center lg:items-start overflow-y-hidden">
              <h1 className="my-4 text-3xl md:text-5xl text-purple-800 font-bold leading-tight text-center md:text-left slide-in-bottom-h1">
                Your Profile
              </h1>
              <p className="leading-normal text-base md:text-2xl text-gray-700 mb-8 text-center md:text-left slide-in-bottom-subtitle">
                Welcome {user.name}!
              </p>
              <p className="leading-normal text-base md:text-2xl text-gray-700 mb-8 text-center md:text-left slide-in-bottom-subtitle">
                <span className="font-bold">Your connection code:</span> {connectionCode}
                <br></br>
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
                Add Connections
              </h1>
              <p className="leading-normal text-base md:text-2xl text-gray-700 mb-8 text-center md:text-left slide-in-bottom-subtitle">
                Add a new connection to your profile to get recommendations. Ask your connection for their connection
                code!
              </p>
              <SearchBox searchValue={searchValue} setSearchValue={setSearchValue} />
              {searchValue === users[1].app_metadata.connection_code && (
                <>
                  <div className="p-4 my-4 rounded-lg shadow border-gray-300 border flex">
                    <img src={users[1].picture} className="rounded-full" height="48px" width="48px" alt=""></img>
                    <p className="pl-4 my-auto">{users[0].email}</p>
                  </div>
                </>
              )}
              {searchValue === users[0].app_metadata.connection_code && (
                <>
                  <div className="p-4 my-4 rounded-lg shadow border-gray-300 border flex">
                    <img src={users[0].picture} className="rounded-full" height="48px" width="48px" alt=""></img>
                    <p className="pl-4 my-auto">{users[0].email}</p>
                  </div>
                </>
              )}
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
