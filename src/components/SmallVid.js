import React from "react";
import Video from "./Video";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-regular-svg-icons";

const SmallVid = (props) => {
  const { judul, username, views, hideViews, width, useLgFlexRow } = props;

  return (
    <div
      className={`flex ${
        useLgFlexRow ? "lg:flex-row" : "flex-col"
      } flex-col gap-5 text-text ${width}`}
    >
      <div className="rounded-xl overflow-hidden">
        <Video />
      </div>
      <div className="flex flex-col gap-1">
        <div className="pb-2 font-semibold text-white">{judul}</div>
        <div className="flex flex-row gap-2 items-center">
          <div className="w-5 h-5 rounded-md bg-blue-500"> </div>
          <div className=""> {username} </div>
        </div>
        {!hideViews && (
          <div className="flex flex-row gap-2 items-center">
            <div className="w-5 h-5 rounded-md flex items-center justify-center">
              <FontAwesomeIcon icon={faEye} />
            </div>
            <div> {views} </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default SmallVid;
