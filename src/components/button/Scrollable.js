import React, { useRef, useEffect, useState } from "react";
import Slider from "./Slider";

const ScrollableContainer = ({ children }) => {
  const scrollContainerRef = useRef(null);
  const [showLeftButton, setShowLeftButton] = useState(false);
  const [showRightButton, setShowRightButton] = useState(true);

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: -412,
        behavior: "smooth",
      });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: 412,
        behavior: "smooth",
      });
    }
  };

  useEffect(() => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current;

      const handleScroll = () => {
        setShowLeftButton(container.scrollLeft > 0);
        setShowRightButton(
          container.scrollLeft < container.scrollWidth - container.clientWidth
        );
      };

      container.addEventListener("scroll", handleScroll);

      return () => {
        container.removeEventListener("scroll", handleScroll);
      };
    }
  }, []);

  return (
    <div>
      <div
        id="scroll-vid"
        ref={scrollContainerRef}
        className="flex flex-row gap-3 overflow-x-auto snap-x"
      >
        {children}
      </div>
      {showLeftButton && (
        <button
          id="left"
          onClick={scrollLeft}
          className="absolute top-[50%] hidden group-hover:block left-2"
        >
          <Slider />
        </button>
      )}
      {showRightButton && (
        <button
          id="right"
          onClick={scrollRight}
          className="absolute top-[50%] hidden group-hover:block right-2"
        >
          <Slider flipRight={true} />
        </button>
      )}
    </div>
  );
};

export default ScrollableContainer;
