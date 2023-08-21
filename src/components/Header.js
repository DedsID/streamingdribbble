import React from "react";
import NavLinks from "./NavLinks";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUserAstronaut,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";
import { faCommentDots, faBell } from "@fortawesome/free-regular-svg-icons";
import ava6 from "../img/Ava/ava6.png";

const Header = () => {
  return (
    <div className="sm:pl-10 sm:pr-10 px-5 flex flex-col py-5 bg-main">
      <div
        className="flex flex-row justify-between items-start xl:items-center
                 gap-10 font-bold uppercase"
      >
        <NavLink to="/">
          <div className="flex flex-row gap-8 items-center justify-center">
            <FontAwesomeIcon
              icon={faUserAstronaut}
              className="text-purpc h-10"
            />
            <h1 className="text-2xl font-righteous font-thin link-h">XPLAY</h1>
          </div>
        </NavLink>

        <div className="hidden sm:flex">
          <NavLinks />
        </div>

        <div className="flex flex-row gap-5 basis-1/2 justify-between">
          {/* searchbar */}
          <div className="sm:bg-lightDark py-2 px-3 rounded-xl w-10 sm:w-8/12 flex items-center">
            <FontAwesomeIcon icon={faMagnifyingGlass} />
            <input
              type="text"
              placeholder="Search"
              className="rounded-full bg-transparent text-xs pl-2 max-sm:placeholder-transparent placeholder-opacity-0 
                        sm:placeholder-opacity-100 text-text w-full focus:outline-none"
            />
          </div>
          {/* end searchbar */}

          <div className="flex flex-row items-center justify-between gap-7">
            <FontAwesomeIcon icon={faCommentDots} className="flex-none" />
            <FontAwesomeIcon icon={faBell} className="flex-none" />
            <div className="flex flex-row gap-2 items-center justify-center">
              <div className="capitalize font-regular hidden lg:block">
                Mikael
              </div>
              <img src={ava6} alt="akun" className="h-7 w-7 rounded-md" />
            </div>
          </div>
        </div>
      </div>
      <div className="sm:hidden pt-5 uppercase">
        <NavLinks />
      </div>
    </div>
  );
};

export default Header;
