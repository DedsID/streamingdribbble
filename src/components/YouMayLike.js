import React from "react";
import SmallVid from "./SmallVid";

const YouMayLike = ({ shouldHideViews }) => {
  return (
    <div id="scroll-vid" className="flex flex-row gap-3 overflow-x-auto snap-x">
      <SmallVid
        judul="Let's fight 1 on 1"
        username="Helen5109 Fast"
        hideViews={shouldHideViews}
        width="w-60"
      />
      <SmallVid
        judul="Let's fight 1 on 1"
        username="Helen5109 Fast"
        hideViews={shouldHideViews}
        width="w-60"
      />
      <SmallVid
        judul="Let's fight 1 on 1"
        username="Helen5109 Fast"
        hideViews={shouldHideViews}
        width="w-60"
      />
      <SmallVid
        judul="Let's fight 1 on 1"
        username="Helen5109 Fast"
        hideViews={shouldHideViews}
        width="w-60"
      />
      <SmallVid
        judul="Let's fight 1 on 1"
        username="Helen5109 Fast"
        hideViews={shouldHideViews}
        width="w-60"
      />
      <SmallVid
        judul="Let's fight 1 on 1"
        username="Helen5109 Fast"
        hideViews={shouldHideViews}
        width="w-60"
      />
      <SmallVid
        judul="Let's fight 1 on 1"
        username="Helen5109 Fast"
        hideViews={shouldHideViews}
        width="w-60"
      />
    </div>
  );
};

export default YouMayLike;
