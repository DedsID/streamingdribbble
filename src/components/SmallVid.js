import React from "react";
import Video from "./Video";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-regular-svg-icons";

const SmallVid = (props) => {
  return (
    <div className="flex lg:flex-row flex-col gap-5 text-text">
      <div className="rounded-xl overflow-hidden">
        <Video />
      </div>
      <div className="flex flex-col gap-1">
        <div className="pb-2 font-semibold text-white">{props.judul}</div>
        <div className="flex flex-row gap-2 items-center">
          <div className="w-5 h-5 rounded-md bg-blue-500"> </div>
          <div className=""> {props.username} </div>
        </div>
        <div className="flex flex-row gap-2 items-center">
          <div className="w-5 h-5 rounded-md flex items-center justify-center">
            <FontAwesomeIcon icon={faEye} />
          </div>
          <div> {props.views} </div>
        </div>
      </div>
    </div>
  );
};

export default SmallVid;
