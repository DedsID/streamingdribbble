import React from "react";
import NavLinks from "./NavLinks";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUserAstronaut,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";
import { faCommentDots, faBell } from "@fortawesome/free-regular-svg-icons";

const Header = () => {
  return (
    <div className="pl-10 pr-24 flex flex-col py-5">
      <div
        className="flex flex-row justify-between items-start xl:items-center
                 gap-10 font-bold uppercase"
      >
        <div className="flex flex-row gap-5 items-center justify-center">
          <FontAwesomeIcon icon={faUserAstronaut} className="text-purpc h-10" />
          <h1 className="text-lg">XPLAY</h1>
        </div>

        <div className="hidden sm:flex">
          <NavLinks />
        </div>

        <div className="flex flex-row gap-5 basis-1/2">
          {/* searchbar */}
          <div className="sm:bg-gray-700 py-2 px-3 rounded-xl w-10 sm:w-full flex items-center">
            <FontAwesomeIcon icon={faMagnifyingGlass} />
            <input
              type="text"
              placeholder="Search"
              className="rounded-full bg-transparent text-xs pl-2 max-sm:placeholder-transparent placeholder-opacity-0 
                        sm:placeholder-opacity-100"
            />
          </div>
          {/* end searchbar */}

          <div className="flex flex-row items-center justify-center gap-7">
            <FontAwesomeIcon icon={faCommentDots} className="flex-none" />
            <FontAwesomeIcon icon={faBell} className="flex-none" />
            <div className="flex flex-row gap-2 items-center justify-center">
              <div className="capitalize font-regular hidden lg:block">
                Mikael
              </div>
              <div className="h-7 w-7 bg-purpc rounded-md"></div>
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
