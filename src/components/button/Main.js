import React from "react";

const MainButton = ({ color, text }) => {
  const buttonStyle = {
    backgroundColor: color,
    padding: "10px 20px",
    borderRadius: "5px",
    color: "#fff",
    cursor: "pointer",
  };
  return (
    <button style={buttonStyle}>
        {text}
    </button>
  );
};

export default MainButton;
