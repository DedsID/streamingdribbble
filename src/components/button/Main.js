import React from "react";

const MainButton = (props) => {
  const { warna, text } = props;

  return (
    <button className={`text-sm py-2 px-5 rounded-xl ${warna}`}>
        {text}
    </button>
  );
};

export default MainButton;
