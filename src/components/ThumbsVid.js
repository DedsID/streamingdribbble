import React, { useState } from "react";
import MainButton from "./button/Main";
import ScrollableContainer from "./button/Scrollable";

const ThumbsVid = ({ text, SourceThumbs, useMap, kodeSource }) => {
  const [showAll, setShowAll] = useState(false); // Tombol show all

  const toggleShowAllStreams = () => {
    setShowAll((prevShowAll) => !prevShowAll);
  };

  return (
    <div className="pt-10 relative group">
      <div className="flex flex-col gap-5 pb-5 sm:pr-10">
        <div className="flex justify-between items-center">
          <span className="text-white font-semibold text-xl">{text}</span>
          <button onClick={toggleShowAllStreams}>
            <MainButton
              warna="bg-lightDark"
              text={showAll ? "View Less" : "View All"}
            />
          </button>
        </div>
      </div>
      <div className="container mx-auto">
        {/* lebar dari Scroll Container */}
        {showAll ? (
          <div id="scroll-vid" className="flex flex-wrap gap-3">
            {useMap ? kodeSource : SourceThumbs}
          </div>
        ) : (
          <ScrollableContainer>{SourceThumbs}</ScrollableContainer>
        )}
      </div>
    </div>
  );
};

export default ThumbsVid;
