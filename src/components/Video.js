import React from "react";

const Video = () => {
  return (
    <video controls className="w-full aspect-video">
      <source src="../video/video1.mp4" type="video/mp4" />
    </video>
  );
};

export default Video;
