import React from "react";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse, faGear } from "@fortawesome/free-solid-svg-icons";
import {
  faSquarePlus,
  faCreditCard,
  faStar,
} from "@fortawesome/free-regular-svg-icons";

const Navbar = () => {
  return (
    <div className="fixed z-50 sm:flex max-sm:bottom-0 w-screen py-4 items-center max-sm:bg-main">
      <div className="flex items-start">
        <div className="flex flex-row sm:flex-col gap-7 sm:gap-14 w-full px-10 items-center justify-between">
          <NavLink to="/">
            <FontAwesomeIcon icon={faHouse} className="h-7" />
          </NavLink>
          <FontAwesomeIcon icon={faSquarePlus} className="h-7" />
          <FontAwesomeIcon icon={faCreditCard} className="h-7" />
          <NavLink to="/LiveStream">
            <FontAwesomeIcon icon={faStar} className="h-7" />
          </NavLink>
          <FontAwesomeIcon icon={faGear} className="h-7" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
