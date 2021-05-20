import React from "react";
import Jieun from "./Jieun";

const Home = () => {
  const onClick = () => {
    window.location.href = "/finder";
  };

  return (
    <>
      <div>
        <button onClick={onClick}>Movie and Book!</button>
        <Jieun />
      </div>
    </>
  );
};

export default Home;
