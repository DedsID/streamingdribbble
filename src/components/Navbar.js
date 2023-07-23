import React from "react";
import NavBtn from "./button/NavBtn";
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
    <div className="fixed z-50 sm:flex max-sm:bottom-0 w-screen max-sm:px-4 sm:w-24 sm:py-4 items-center max-sm:bg-main">
      <div className="flex items-start">
        <div className="flex flex-row sm:flex-col w-full  items-center justify-between linked">
          <NavBtn to="/" icon={faHouse} className="hover:animate-spin" />
          <NavBtn to="/2" icon={faSquarePlus} />
          <NavBtn to="/3" icon={faCreditCard} />
          <NavBtn to="/LiveStream" icon={faStar} />
          <NavBtn to="/5" icon={faGear} />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
