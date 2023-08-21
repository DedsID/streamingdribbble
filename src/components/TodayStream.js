import React from "react";
import SmallVid from "./SmallVid";

// ava
import ava1 from "../img/Ava/ava1.png";
import ava2 from "../img/Ava/ava2.png";
import ava3 from "../img/Ava/ava3.png";

const TodayStream = () => {
  return (
    <>
      <SmallVid
        judul="Let's fight 1 on 1"
        username="Helen5109 Fast"
        hideViews={true}
        width="min-w-[25rem]"
        ava={ava2}
      />
      <SmallVid
        judul="Let's fight 1 on 1"
        username="Helen5109 Fast"
        hideViews={true}
        width="min-w-[25rem]"
        live={true}
        ava={ava2}
      />
      <SmallVid
        judul="Let's fight 1 on 1"
        username="Helen5109 Fast"
        hideViews={true}
        width="min-w-[25rem]"
        live={true}
        ava={ava1}
      />
      <SmallVid
        judul="Let's fight 1 on 1"
        username="Helen5109 Fast"
        hideViews={true}
        width="min-w-[25rem]"
        ava={ava3}
      />
      <SmallVid
        judul="Let's fight 1 on 1"
        username="Helen5109 Fast"
        hideViews={true}
        width="min-w-[25rem]"
        ava={ava1}
      />
      <SmallVid
        judul="Let's fight 1 on 1"
        username="Helen5109 Fast"
        hideViews={true}
        width="min-w-[25rem]"
        ava={ava3}
      />
    </>
  );
};

export default TodayStream;
