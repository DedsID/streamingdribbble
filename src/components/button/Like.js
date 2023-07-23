import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faThumbsUp } from "@fortawesome/free-regular-svg-icons";

const Like = () => {
  return (
    <div className="flex flex-row gap-2">
      <FontAwesomeIcon
        icon={faThumbsUp}
        className="bg-fuchsia-950 rounded-full p-2 text-white text-xl"
      />
      <FontAwesomeIcon
        icon={faThumbsUp}
        className="bg-fuchsia-950 rounded-full p-2 text-white text-xl"
        rotation="180"
      />
    </div>
  );
};

export default Like;
