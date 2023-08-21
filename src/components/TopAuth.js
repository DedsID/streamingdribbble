import React from "react";
import data from "./DataAuth";

const TopAuth = ({ showAll }) => {
  return (
    <div
      className={`flex ${showAll ? "flex-wrap" : ""} flex-row gap-3 overflow-x`}
    >
      {data.cardData.map((item, index) => {
        return (
          <div className="flex flex-col gap-3 text-text w-[25rem]">
            <div className="rounded-xl overflow-hidden relative">
              <img src={item.img} alt="test" className="min-w-full" />
            </div>
            <div className="flex flex-row gap-5">
              <img
                src={item.ava}
                alt="test"
                className="bg-blue w-10 h-10 rounded-lg"
              />
              <div className="flex flex-col">
                <div className="text-white text-lg flex flex-row">
                  {item.username}
                  <span className="ml-5 hidden sm:block"></span>
                </div>
                <div className="text-sm">{item.subs} Subcribers</div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default TopAuth;
