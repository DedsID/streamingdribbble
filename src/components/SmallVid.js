import React from "react";
import Video from "./Video";
import MainButton from "./button/Main";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-regular-svg-icons";

const SmallVid = (props) => {
  const { judul, username, views, hideViews, live, width, useLgFlexRow, ava } =
    props;

  return (
    <div
      className={`flex ${
        useLgFlexRow ? "lg:flex-row" : "flex-col"
      } flex-col gap-3 text-text ${width} `}
    >
      <div className="rounded-xl relative">
        <Video />
        {live && (
          <div className="absolute top-2 left-2 text-white">
            <MainButton warna="bg-pink-500" text="LIVE" />
          </div>
        )}

        {/* kosongkan jika tidak ingin live, dan input live={true} jika ingin live */}
      </div>
      <div className="flex flex-col">
        <div className="pb-1 font-semibold text-white">{judul}</div>
        <div className="flex flex-row gap-2 items-center">
          <img src={ava} alt="test" className="w-5 h-5 rounded-md" />
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

        {/* hideViews={true} jika ingin menyembunyikan kolom views */}
      </div>
    </div>
  );
};

export default SmallVid;
