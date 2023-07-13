import React from "react";
import Video from "./Video";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-regular-svg-icons";

const SmallVid = () => {
  return (
    <div className="flex flex-row p-10 gap-5 text-text">
      <div className="aspect-video bg-blue-400 rounded-xl">
        <Video />
      </div>
      <div className="flex flex-col gap-1">
        <div className="pb-2 font-semibold text-white">Lets Fight 1 on 1</div>
        <div className="flex flex-row gap-2 items-center">
          <div className="w-5 h-5 rounded-md bg-blue-500"> </div>
          <div className=""> Helen5109 Fast </div>
        </div>
        <div className="flex flex-row gap-2 items-center">
          <div className="w-5 h-5 rounded-md flex items-center justify-center">
            <FontAwesomeIcon icon={faEye} />
          </div>
          <div> 26.359M </div>
        </div>
      </div>
    </div>
  );
};

export default SmallVid;
