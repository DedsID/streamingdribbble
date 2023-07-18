import React from "react";
import Video from "./Video";
import SmallVid from "./SmallVid";

const Home = () => {
  const shouldHideViews = true;

  return (
    <div className="px-5">
      {/* section 1 */}
      <div className="flex flex-row gap-10">
        <div className="flex flex-col gap-7 basis-1/2">
          <span className="text-5xl uppercase font-righteous">
            Play, compete, follow popular streamers{" "}
          </span>
          <span>
            The best streamers gather here to have a good time, be among us,
            join us!
          </span>
        </div>
        <div className="flex flex-col gap-5">
          <div className="rounded-xl overflow-hidden rounded-xl">
            <Video />
          </div>
          <span className="">
            Battle for the cattle with Franck Jourdan and Eva703
          </span>
        </div>
      </div>
      {/* end 1 */}
      {/* section 2 */}
      <div>
        <div className="flex flex-col gap-5">
          <div className="flex justify-between items-center">
            <span className="text-white font-semibold">You may like</span>
            <span className="text-sm underline">View all</span>
          </div>
        </div>
        <SmallVid
          judul="Let's fight 1 on 1"
          username="Helen5109 Fast"
          hideViews={shouldHideViews}
        />
      </div>
      {/* end 2 */}
    </div>
  );
};

export default Home;
