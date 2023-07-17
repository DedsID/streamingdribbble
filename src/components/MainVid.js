import React from "react";
import Video from "./Video";
import SmallVid from "./SmallVid";
import Like from "./button/Like";
import Comments from "./Comments";
import MainButton from "./button/Main";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane } from "@fortawesome/free-regular-svg-icons";

const MainVid = () => {
  return (
    <div className="text-text flex flex-col sm:flex-row gap-10 px-5">
      <div className="">
        <div className="sm:rounded-xl overflow-hidden -mx-5">
          <Video />
        </div>

        {/* judul */}
        <div className="flex flex-row justify-between py-5 gap-10">
          <span className="text-white font-bold text-xl">
            1000 miles of Sebring stream with Golden Mike - 2022
          </span>
          <div className="hidden sm:flex">
            <Like />
          </div>
        </div>
        {/* end judul */}

        {/* user */}
        <div className="flex flex-row gap-5">
          <div className="bg-blue w-10 h-10 rounded-lg"></div>
          <div className="flex flex-col">
            <div className="text-white text-lg flex flex-row">
              Mike Fisher
              <span className="text-xs border border-1 ml-5 px-7 py-1 rounded-md hidden sm:block">
                Subcribe
              </span>
            </div>
            <div className="text-sm">5 158 223 subcribers</div>
          </div>
        </div>
        {/* end user */}
        {/* subs and like for mobile */}
        <div className="flex sm:hidden flex-row justify-around pt-5 gap-5">
          <div className="flex items-center justify-center text-xs text-white border border-1 px-7 py-1 rounded-md w-full">
            Subcribe
          </div>
          <Like />
        </div>
        {/* end mobile */}

        {/* Comment Section */}
        <div>
          <div className="flex justify-between items-center text-white pt-10">
            <span className=" font-semibold text-lg"> 7 214 comments </span>
            <span className="text-sm">
              <span className="hidden sm:flex">Newest First</span>
              <span className="flex sm:hidden">View All</span>
            </span>
          </div>
          <div className="flex flex-row justify-between items-center border-b-2 mt-5 hidden sm:flex">
            <input
              type="text"
              placeholder="Insert your komplen here"
              className="w-full bg-main p-2 text-white"
            />
            <FontAwesomeIcon icon={faPaperPlane} />
          </div>
        </div>
        <Comments
          username="mooddd"
          isikomplen="You're akdjad adj adkljawdkl akdwj kajdkljdkljadkaj ladlkaj"
        />
        {/* End Comment */}
      </div>

      {/* Small Vid */}
      <div className="flex flex-col gap-5">
        <div className="flex justify-between items-center">
          <span className="text-white font-semibold">You may like</span>
          <span className="text-sm underline">View all</span>
        </div>
        <SmallVid
          judul="Let's fight 1 on 1"
          username="Helen5109 Fast"
          views="26,389M"
        />
        <SmallVid
          judul="Let's fight 1 on 1"
          username="Helen5109 Fast"
          views="26,389M"
        />
        <SmallVid
          judul="Let's fight 1 on 1"
          username="Helen5109 Fast"
          views="26,389M"
        />
        <SmallVid
          judul="Let's fight 1 on 1"
          username="Helen5109 Fast"
          views="26,389M"
        />
      </div>
      {/* Small Vid */}
    </div>
  );
};

export default MainVid;
