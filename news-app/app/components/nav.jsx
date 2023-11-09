import React from "react";
import { FaFacebookF, FaTwitter } from "react-icons/fa6";
import { BiLogoGmail, BiLogoInstagramAlt, BiSearch } from "react-icons/bi";

const nav = () => {
  return (
    <>
      <div className="nav pt-6 pb-2 border-b-4">
        <div className="nav-1 flex px-5 justify-between h-8 mb-4 select-none">
          <h2 className="text-4xl font-bold font-mono -translate-y-1.5">
            <a href="/">
              New<span className="color-red text-red-900">zee</span>
            </a>
          </h2>
          <div className="searchBar flex bg-slate-300 rounded-2xl">
            <input
              className="bg-transparent w-80 px-4 text-m outline-none"
              type="search"
              name="searchBar"
              id="search-bar"
            />
            <span className="flex px-3 p-2 border-slate-400 border-s bg-transparent text-red-900 active:text-slate-900 cursor-pointer">
              <BiSearch />
            </span>
          </div>
          <div className="nav-socials flex p-2">
            <a href="#">
              <FaTwitter className="h-5 w-5" />
            </a>
            <a href="#">
              <BiLogoInstagramAlt className="h-5 w-6" />
            </a>
            <a href="#">
              <FaFacebookF className="h-5" />
            </a>
            <a href="#">
              <BiLogoGmail className="h-5 w-6" />
            </a>
          </div>
        </div>
        <div className="nav-2 ">
          <div className="nav-list flex mt-10 text-m font-bold font-serif justify-around ">
            <a href="#">Home</a>
            <a href="#">Top Headlines</a>
            <a href="#">IT News</a>
            <a href="#">Technology</a>
            <a href="#">Stock Market</a>
            <a href="#">Politics</a>
            <a href="#">Health & Fitness</a>
            <a href="#">Cricket</a>
          </div>
        </div>
      </div>
    </>
  );
};

export default nav;
