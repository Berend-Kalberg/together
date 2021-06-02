import { useState, useEffect } from "react";
import { useSession } from "next-auth/client";

// import {useUser} from '@auth0/nextjs-auth0'

import Nav from '../components/Nav'

export default function Secret() {
  // const { user, error, isLoading } = useUser();

  // if (isLoading) return <div>Loading...</div>;
  // if (error) return <div>{error.message}</div>;

  const [session, loading] = useSession();
  const [content, setContent] = useState();

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("/api/profile");
      const json = await res.json();

      if (json.content) {
        setContent(json.content);
      }
    };
    fetchData();
  }, [session]);

  if (typeof window !== "undefined" && loading) return null;

  if (!session) {
    return (
      <main className="leading-normal tracking-normal text-gray-900" styles="font-family: 'Source Sans Pro', sans-serif;">
        <div className="circle-bg h-screen pb-14 bg-right bg-cover">
          <div className="w-full container mx-auto p-6">
            <Nav />

            <div className="container pt-24 md:pt-48 px-6 mx-auto flex flex-wrap flex-col md:flex-row items-center">
          
              <div className="flex flex-col w-full xl:w-2/5 justify-center lg:items-start overflow-y-hidden">
                <h1 className="my-4 text-3xl md:text-5xl text-purple-800 font-bold leading-tight text-center md:text-left slide-in-bottom-h1">403 Access Denied</h1>
                <p className="leading-normal text-base md:text-2xl mb-8 text-center md:text-left slide-in-bottom-subtitle">You need to login / signup before being able to access this page <br></br><br></br>Try the sign in button at the top of your screen!</p>
              </div>
              
              <div className="w-full xl:w-3/5 py-6 overflow-y-hidden">
                <img className="w-5/6 mx-auto lg:mr-0 slide-in-bottom" src="devices.svg"/>
              </div>
              
              <div className="w-full pt-16 pb-6 text-sm text-center md:text-left fade-in">
                <a className="text-gray-500 no-underline hover:no-underline" href="#">&copy; Together 2021</a>
              </div>
              
            </div>
          </div>
        </div>
        
        
      </main>
    );
  }
  return (
    <main className="leading-normal tracking-normal text-gray-900" styles="font-family: 'Source Sans Pro', sans-serif;">
      <div className="circle-bg h-screen pb-14 bg-right bg-cover">
        <div className="w-full container mx-auto p-6">
          <Nav />

          <div className="container pt-24 md:pt-48 px-6 mx-auto flex flex-wrap flex-col md:flex-row items-center">
        
            <div className="flex flex-col w-full xl:w-2/5 justify-center lg:items-start overflow-y-hidden">
              <h1 className="my-4 text-3xl md:text-5xl text-purple-800 font-bold leading-tight text-center md:text-left slide-in-bottom-h1">Profile</h1>
              <p className="leading-normal text-base md:text-2xl mb-8 text-center md:text-left slide-in-bottom-subtitle">Welcome to your profile page {session.user.nickname}. <br></br><br></br>On this page you can change your data.</p>
            </div>
            
            <div className="w-full xl:w-3/5 py-6 overflow-y-hidden">
              <img className="w-5/6 mx-auto lg:mr-0 slide-in-bottom" src="devices.svg"/>
            </div>
            
            <div className="w-full pt-16 pb-6 text-sm text-center md:text-left fade-in">
              <a className="text-gray-500 no-underline hover:no-underline" href="#">&copy; Together 2021</a>
            </div>
            
          </div>
        </div>
      </div>
      
      
    </main>
  );
}