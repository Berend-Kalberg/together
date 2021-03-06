import React from 'react';
import Link from 'next/link';

import { useUser } from '@auth0/nextjs-auth0';

const Menu = () => {
  const { user, isLoading } = useUser();

  return (
    <div className="relative z-50 inline-block text-left dropdown h-10 p-2 md:h-auto md:p-4">
      <input type="checkbox" id="sortbox" className="hidden absolute" />
      <label htmlFor="sortbox" className="flex items-center space-x-1 cursor-pointer">
        <span className="rounded-md shadow-sm">
          <div
            className="inline-flex justify-center w-full py-1 px-4 text-sm font-medium leading-5 text-gray-700 transition duration-150 ease-in-out bg-white border border-gray-300 rounded-md hover:text-gray-500 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:bg-gray-50 active:text-gray-800"
            aria-haspopup="true"
            aria-expanded="true"
            aria-controls="headlessui-menu-items-117">
            <img src={user.picture} className="rounded-full" height="20px" width="20px" alt=""></img>
            <svg className="w-5 h-5 ml-2 -mr-1" viewBox="0 0 20 20" fill="currentColor">
              <path
                fillRule="evenodd"
                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                clipRule="evenodd"></path>
            </svg>
          </div>
        </span>
      </label>

      <div
        id="sortboxmenu"
        className="absolute right-1 top-full min-w-max shadow rounded opacity-0 bg-gray-300 border border-gray-400 transition delay-75 ease-in-out z-10 invisible">
        <div
          className="absolute right-0 w-56 mt-2 origin-top-right bg-white border border-gray-200 divide-y divide-gray-100 rounded-md shadow-lg outline-none"
          aria-labelledby="headlessui-menu-button-1"
          id="headlessui-menu-items-117"
          role="menu">
          <div className="px-4 py-3">
            <p className="text-sm leading-5">Signed in as</p>
            <p className="text-sm font-medium leading-5 text-gray-900 truncate">{user.email}</p>
          </div>
          <div className="py-1">
            <Link href="http://localhost:3000/profile">
              <a
                tabIndex="0"
                className="text-gray-700 flex justify-between w-full px-4 py-2 text-sm leading-5 text-left"
                role="menuitem">
                Profile
              </a>
            </Link>
            <Link href="https://choosealicense.com/licenses/gpl-3.0/">
              <a
                target="_blank"
                tabIndex="1"
                className="text-gray-700 flex justify-between w-full px-4 py-2 text-sm leading-5 text-left"
                role="menuitem">
                License
              </a>
            </Link>
          </div>
          <div className="py-1">
            <Link href="/api/auth/logout">
              <a
                tabIndex="2"
                className="inline-block text-blue-300 no-underline hover:text-indigo-800 hover:text-underline text-center h-10 p-2 md:h-auto md:p-4"
                role="menuitem">
                Sign out
              </a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menu;
