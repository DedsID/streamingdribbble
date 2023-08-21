import React, { useState } from "react";
import MainButton from "./button/Main";
import TodayStream from "./TodayStream";
import TopAuth from "./TopAuth";
import ScrollableContainer from "./button/Scrollable";
import CountdownTimer from "./Timer";
import ThumbsVid from "./ThumbsVid";
import GambarBanner from "../img/Banner.jpg";
import { DefaultPlayer as Video } from "react-html5video";
import { TbPlayerSkipForward } from "react-icons/tb";
import { HiPause } from "react-icons/hi2";
import { BiVolumeFull } from "react-icons/bi";
import { IoEllipsisVerticalOutline } from "react-icons/io5";
import { AiOutlineExpandAlt } from "react-icons/ai";

const Home = () => {
  return (
    <div className="max-sm:px-5 sm:pl-5">
      {/* section 1 */}
      <div className="flex flex-col xl:flex-row gap-10 sm:pr-10">
        <div className="flex flex-col gap-7 basis-1/2">
          <span className="text-7xl uppercase font-righteous">
            Play, compete, follow popular streamers
          </span>
          <span>
            The best streamers gather here to have a good time, be among us,
            join us!
          </span>
        </div>
        <div className="flex flex-col gap-5 basis-1/2">
          <div className="rounded-xl relative overflow-hidden">
            <img src={GambarBanner} alt="" className="" />
            <div className="absolute w-full h-full bottom-0 p-3">
              <div className="flex flex-col gap-3 h-full">
                <div className="flex flex-col basis-11/12 items-center justify-center text-lg">
                  Broadcast starts in{" "}
                  <span className="text-6xl font-righteous pt-2">
                    <CountdownTimer />
                  </span>
                </div>
                <div className="w-full h-1 rounded-full bg-slate-600"></div>
                <div className="flex flex-row items-center justify-between text-3xl">
                  <HiPause />
                  <TbPlayerSkipForward />
                  <BiVolumeFull />
                  <div className="bg-purpc py-[1px] px-5 rounded-md uppercase text-semibold text-base">
                    Coming Soon
                  </div>
                  <span className="text-base basis-2/6">00:00</span>
                  <IoEllipsisVerticalOutline />
                  <AiOutlineExpandAlt />
                </div>
              </div>
            </div>
          </div>
          <span className="">
            Battle for the cattle with Franck Jourdan and Eva703
          </span>
        </div>
      </div>
      {/* end 1 */}

      {/* section 2 */}
      <ThumbsVid text="Streams of the day" SourceThumbs={<TodayStream />} />
      {/* end 2 */}

      {/* section 3 : Top Author */}
      <ThumbsVid
        text="Top Authors"
        SourceThumbs={<TopAuth />}
        useMap={true}
        kodeSource={<TopAuth showAll={true} />}
      />
      {/* end 3 */}
      {/* section 2 */}
      <ThumbsVid
        text="Top Authors"
        SourceThumbs={<TopAuth />}
        useMap={true}
        kodeSource={<TopAuth showAll={true} />}
      />
      {/* end 2 */}
    </div>
  );
};

export default Home;
