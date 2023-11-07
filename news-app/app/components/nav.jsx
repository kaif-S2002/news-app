import React from "react";
import { FaXTwitter, FaInstagram, FaFacebookF } from "react-icons/fa6";
import { BiLogoGmail, BiLogoInstagramAlt } from "react-icons/bi";

const nav = () => {
  return (
    <>
      <div className="nav bg-slate-400 list-none py-4">
        <div className="nav-1 flex px-4 justify-between">
          <h2 className="text-4xl font-bold font-mono">Newzee</h2>
          <input type="search" name="searchBar" id="search-bar" />
          <div className="nav-socials flex">
            <a href="#">
              <FaXTwitter />
            </a>
            <a href="#">
              <BiLogoInstagramAlt />
            </a>
            <a href="#">
              <FaFacebookF />
            </a>
            <a href="#">
              <BiLogoGmail />
            </a>
          </div>
        </div>
        <div className="nav-2">
          <div className="nav-list flex mx-2 text-lg font-bold font-serif">
            <li className="px-2">
              <a href="/">Home</a>
            </li>
            <li className="px-2">
              <a href="/">About</a>
            </li>
            <li className="px-2">
              <a href="/">Category</a>
            </li>
            <li className="px-2">
              <a href="/">Contact</a>
            </li>
          </div>
        </div>
      </div>
    </>
  );
};

export default nav;
