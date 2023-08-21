import React from "react";

const Comments = (props) => {
  return (
    <div className="flex flex-row gap-3 my-5">
      <img src={props.ava} alt="commenter" className="w-10 h-10 rounded-lg flex-none mt-1" />
      <div className="flex flex-col">
        <span>
          <span className="text-white">{props.username} </span> • 3 sec ago
        </span>
        <span className="text-sm">
          {props.isikomplen}
        </span>
      </div>
    </div>
  );
};

export default Comments;
