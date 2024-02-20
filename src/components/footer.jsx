import React from "react";
import { FaGithub } from "react-icons/fa6";
import { Link } from "react-router-dom";

const footer = () => {
  return (
    <div className="footer flex-box bg-slate-200">
      <div className="footer-logo flex justify-center pt-4 pb-2">
        <h2 className="bg font-bold text-3xl">
          <Link to={"/news-app"}>
            New<span className="color-red text-red-900">zee</span>
          </Link>
        </h2>
      </div>

      <div className="footer-para flex justify-center text-lg tracking-wide max-[360px]:text-sm">
        <p>This website is an API based project.</p>
      </div>

      <div className="footer-socials flex justify-center py-4">
        <Link
          to={"https://github.com/kaif-S2002/news-app"}
          target="_blank"
          rel="noreferrer"
        >
          <FaGithub className="h-8 w-8" />
        </Link>
      </div>

      <div className="flex justify-center text-xs py-2">
        <p>Copyright @ 2024 | Newzee</p>
      </div>
    </div>
  );
};

export default footer;
