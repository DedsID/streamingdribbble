import React from "react";

const ThumbsVid = (props) => {
  return (
    <div>
      <div className="flex flex-row justify-center items-center">
        <span>{props.header}</span>
        <span className="bg-gray-700 px-5 py-3">View all</span>
      </div>
      <div></div>
    </div>
  );
};

export default ThumbsVid;
