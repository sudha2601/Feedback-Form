import React from 'react';

function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-4 mt-10 shadow-inner">
      <div className="container mx-auto px-4 text-center">
        <p className="text-sm sm:text-base">
          Made by <span className="font-semibold">Sudhanshu Songire</span>
        </p>
        <p>
          Github link<a href='https://github.com/sudha2601/Feedback-Form'>https://github.com/sudha2601/Feedback-Form </a>
        </p>
        <p className="text-xs mt-1 text-gray-400">
          © {new Date().getFullYear()} All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
