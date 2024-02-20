import React, { useState } from "react";
import { FaGithub } from "react-icons/fa6";
import { MdMenu } from "react-icons/md";
import { Link } from "react-router-dom";

const Nav = () => {
  const [isOpen, setIsOpen] = useState("top");
  return (
    <div className="nav flex justify-between items-center px-5 py-2 bg-slate-200 w-100% overflow-hidden ">
      <div className="nav-logo z-10">
        <h2 className="text-4xl font-bold font-mono  max-lg:text-3xl ">
          <Link to={"/"}>
            New<span className="color-red text-red-900">zee</span>
          </Link>
        </h2>
      </div>

      <div
        className={`nav-list flex flex-col gap-12 justify-center items-center px-2 py-6 w-full left-0 absolute 
        ${
          !isOpen ? "top-[57px]" : "-top-full"
        } max-lg:bg-slate-200 lg:flex-row lg:top-0 lg:py-5 lg:gap-0`}
      >
        <ul className="flex flex-wrap gap-8 justify-center items-center w-full text-sm font-semibold lg:flex-nowrap">
          <li>
            <Link to={"/"}>Home</Link>
          </li>
          <li>
            <Link to={"/technology"}>Technology</Link>
          </li>
          <li>
            <Link to={"/business"}>Business</Link>
          </li>
          <li>
            <Link to={"/sports"}>Sports</Link>
          </li>
          <li>
            <Link to={"/health"}>Health</Link>
          </li>
          <li>
            <Link to={"/entertainment"}>Entertainment</Link>
          </li>
          <li>
            <Link to={"/science"}>Science</Link>
          </li>
        </ul>

        <div className="nav-socials flex justify-center items-center">
          <span className="text-sm font-bold">GitHub</span>
          <Link
            to={"https://github.com/kaif-S2002/news-app"}
            target="_blank"
            rel="noreferrer"
          >
            <FaGithub className="h-6 w-6 " />
          </Link>
        </div>
      </div>

      <div className="menu-btn lg:hidden">
        <MdMenu
          size={40}
          onClick={() => {
            setIsOpen(!isOpen);
          }}
        />
      </div>
    </div>
  );
};

export default Nav;
