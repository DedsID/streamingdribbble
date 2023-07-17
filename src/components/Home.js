import React from "react";
import Video from "./Video";

const Home = () => {
  return (
    <div className="px-5">
      {/* section 1 */}
      <div className="flex flex-row">
        <div className="flex flex-col gap-7 basis-1/2">
          <span className="text-5xl uppercase">
            Play, compete, follow popular streamers{" "}
          </span>
          <span>
            The best streamers gather here to have a good time, be among us,
            join us!
          </span>
        </div>
        <div className="rounded-xl overflow-hidden bg-blue-400">
          <Video />
        </div>
      </div>
      {/* end 1 */}
    </div>
  );
};

export default Home;
