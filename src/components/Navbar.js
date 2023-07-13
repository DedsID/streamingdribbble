import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse, faGear } from "@fortawesome/free-solid-svg-icons";
import {
  faSquarePlus,
  faCreditCard,
  faStar,
} from "@fortawesome/free-regular-svg-icons";

const Navbar = () => {
  return (
    <div className="fixed sm:flex max-sm:bottom-0 w-screen py-7">
      <div className="flex items-start">
        <div className="flex flex-row sm:flex-col gap-7 sm:gap-14 w-full px-10 items-center justify-between">
          <FontAwesomeIcon icon={faHouse} className="h-7" />
          <FontAwesomeIcon icon={faSquarePlus} className="h-7" />
          <FontAwesomeIcon icon={faCreditCard} className="h-7" />
          <FontAwesomeIcon icon={faStar} className="h-7" />
          <FontAwesomeIcon icon={faGear} className="h-7" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
