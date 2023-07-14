import React from "react";
import Video from "./Video";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faThumbsUp } from "@fortawesome/free-regular-svg-icons";

const MainVid = () => {
  return (
    <div className="text-text md:w-2/3">
      <div className="max-sm:px-10">
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
          <div className="flex flex-col">
            <div className="text-white text-lg">
              Mike Fisher
              <span className="text-xs border border-1 ml-5 px-7 py-1 rounded-md">
                Subcribe
              </span>
            </div>
            <div className="text-sm">5 158 223 subcribers</div>
          </div>
        </div>
        {/* end user */}
        {/* Comment Section */}
        <div>
          <div className="flex justify-between items-center text-white pt-10">
            <span className=" font-semibold text-lg"> 7 214 comments </span>
            <span className="text-sm">Newest First</span>
          </div>
        </div>
        {/* End Comment */}
      </div>
    </div>
  );
};

export default MainVid;
