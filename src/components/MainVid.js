import React from "react";
import Video from "./Video";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faThumbsUp } from "@fortawesome/free-regular-svg-icons";

const MainVid = () => {
  return (
    <div className="text-text w-2/3">
      <div className="aspect-video bg-blue-400 rounded-xl">
        <Video />
      </div>

      {/* judul */}
      <div className="flex flex-row justify-between py-5">
        <span className="text-white font-bold text-xl">
          1000 miles of Sebring stream with Golden Mike - 2022
        </span>
        <div className="flex flex-row gap-5">
          <FontAwesomeIcon
            icon={faThumbsUp}
            className="bg-slate-700 rounded-full p-2 text-white text-xl"
          />
          <FontAwesomeIcon
            icon={faThumbsUp}
            className="bg-slate-700 rounded-full p-2 text-white text-xl"
            rotation="180"
          />
        </div>
      </div>
      {/* end judul */}

      {/* user */}
      <div className="flex flex-row gap-5">
        <div className="bg-blue w-10 h-10 rounded-lg"></div>
        <div>
            <span>Mike Fisher</span>
            <div></div>
        </div>
      </div>
      {/* end user */}
    </div>
  );
};

export default MainVid;
