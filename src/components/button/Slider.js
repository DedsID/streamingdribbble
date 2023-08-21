import React from "react";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Slider = ({ flipRight }) => {
  return (
    <div className="text-6xl md:flex gap-5 hidden">
      <FontAwesomeIcon
        icon={faChevronLeft}
        className="hover:text-white rounded-full w-3 h-3 p-4 border border-white cursor-pointer hover:bg-black
                        transition duration-300"
        rotation={`${flipRight ? "180" : ""} `}
      />
      {/* Ikon chevron-right dari Font Awesome */}
      {/* default left */}
    </div>
  );
};

export default Slider;
