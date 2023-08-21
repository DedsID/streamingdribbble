import React from "react";
import NavBtn from "./button/NavBtn";
import { NavLink } from "react-router-dom";
import { faCreditCard, faStar } from "@fortawesome/free-regular-svg-icons";
import { GoHome } from "react-icons/go";
import { LuSettings } from "react-icons/lu";
import { CiSquarePlus } from "react-icons/ci";

const Navbar = () => {
  return (
    <div className="fixed z-50 sm:flex max-sm:bottom-0 w-screen max-sm:px-4 sm:w-24 sm:py-4 items-center max-sm:bg-main">
      <div className="flex items-start">
        <div className="flex flex-row sm:flex-col w-full  items-center justify-between linked scroll-smooth">
          <NavLink
            to="/"
            className="flex w-full justify-center py-4 sm:items-center sm:justify-center sm:h-20 sm:pl-9 linked sm:border-l-[5px] max-sm:border-b-[5px] border-main hover:text-purpc duration-500"
          >
            <div class="custom-tooltip" data-tooltip="Home">
              <GoHome className="text-4xl custom-tooltip" data-tooltip="Home" />
            </div>
          </NavLink>
          <NavLink
            to="/2"
            className="flex w-full justify-center py-4 sm:items-center sm:justify-center sm:h-20 sm:pl-9 linked sm:border-l-[5px] max-sm:border-b-[5px] border-main hover:text-purpc duration-500"
          >
            <CiSquarePlus className="text-4xl" />
          </NavLink>
          <NavBtn to="/3" icon={faCreditCard} />
          <NavBtn to="/LiveStream" icon={faStar} text="Favorite" />
          <NavLink
            to="/5"
            className="flex w-full justify-center py-4 sm:items-center sm:justify-center sm:h-20 sm:pl-9 linked sm:border-l-[5px] max-sm:border-b-[5px] border-main hover:text-purpc duration-500"
          >
            <LuSettings className="text-4xl" />
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
