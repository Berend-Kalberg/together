import React from 'react';

const Footer = () => {
  return (
    <div className="container pt-24 md:pt-48 px-6 mx-auto flex flex-wrap flex-col md:flex-row items-center">
      <div className="w-full pt-16 pb-6 text-sm text-center md:text-left fade-in">
        <a className="text-gray-500 no-underline hover:no-underline" href="#">
          &copy; Together 2021
        </a>
      </div>
    </div>
  );
};

export default Footer;
