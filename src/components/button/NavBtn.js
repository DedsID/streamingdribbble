import React from "react";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const LinkBtn = ({ to, icon, text }) => {
  return (
    <NavLink
      to={to}
      className="flex w-full justify-center py-4 sm:items-center sm:justify-center sm:h-20 sm:pl-9 linked sm:border-l-[5px] max-sm:border-b-[5px] border-main hover:text-purpc duration-500"
    >
      <div class="custom-tooltip" data-tooltip={text}>
        <FontAwesomeIcon icon={icon} className="h-7" />
      </div>
    </NavLink>
  );
};

export default LinkBtn;
