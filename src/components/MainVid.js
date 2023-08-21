import React from "react";
import { DefaultPlayer as Video } from "react-html5video";
import "react-html5video/dist/styles.css";
import IntroVideo from "../video/video1.mp4";
import SmallVid from "./SmallVid";
import Like from "./button/Like";
import Subs from "./button/Subs";
import Comments from "./Comments";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane } from "@fortawesome/free-regular-svg-icons";

// Ava
import ava1 from "../img/Ava/ava1.png";
import ava2 from "../img/Ava/ava2.png";
import ava3 from "../img/Ava/ava3.png";
import ava4 from "../img/Ava/ava4.png";
import ava5 from "../img/Ava/ava5.png";

const MainVid = () => {
  return (
    <div className="text-text flex flex-col sm:flex-row gap-10 max-sm:px-5 sm:pr-10 justify-between">
      <div className="basis-2/3">
        <Video className="sm:rounded-xl overflow-hidden -mx-5">
          <source src={IntroVideo} type="video/webm" />
        </Video>

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
          <img src={ava4} alt="mike" className="w-10 h-10 rounded-lg" />
          <div className="flex flex-col">
            <div className="text-white text-lg flex flex-row">
              Mike Fisher
              <span className="ml-5 hidden sm:block">
                <Subs />
              </span>
            </div>
            <div className="text-sm">5 158 223 subcribers</div>
          </div>
        </div>
        {/* end user */}
        {/* subs and like for mobile */}
        <div className="flex sm:hidden flex-row justify-around pt-5 gap-5">
          <Subs />
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
          <div className="flex-row justify-between items-center border-b-2 mt-5 hidden sm:flex">
            <input
              type="text"
              placeholder="Insert your komplen here"
              className="w-full bg-main p-2 text-white mr-10 focus:outline-none"
            />
            <FontAwesomeIcon icon={faPaperPlane} />
          </div>
        </div>
        <Comments
          username="mooddd"
          isikomplen="You're akdjad adj adkljawdkl akdwj kajdkljdkljadkaj ladlkaj"
          ava={ava5}
        />
        {/* End Comment */}
      </div>

      {/* Small Vid */}
      <div className="flex flex-col gap-5 basis-1/3">
        <div className="flex justify-between items-center">
          <span className="text-white font-semibold">You may like</span>
          <span className="text-sm underline">View all</span>
        </div>
        <SmallVid
          judul="Let's fight 1 on 1"
          username="Helen5109 Fast"
          views="26,389M"
          useLgFlexRow={true}
          live={true}
          ava={ava1}
        />
        <SmallVid
          judul="Let's fight 1 on 1"
          username="Helen5109 Fast"
          views="26,389M"
          useLgFlexRow={true}
          live={true}
          ava={ava2}
        />
        <SmallVid
          judul="Let's fight 1 on 1"
          username="Helen5109 Fast"
          views="26,389M"
          useLgFlexRow={true}
          live={true}
          ava={ava3}
        />
        <SmallVid
          judul="Let's fight 1 on 1"
          username="Helen5109 Fast"
          views="26,389M"
          useLgFlexRow={true}
          ava={ava2}
        />
      </div>
      {/* Small Vid */}
    </div>
  );
};

export default MainVid;
