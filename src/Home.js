import React from "react";
import Jieun from "./Jieun";
import { Link } from "react-router-dom";
import Server from "./Server";

const Home = () => {
  return (
    <>
      <div>
        <Link to="/movie">Movie and Book!</Link>

        <Jieun />

        <div className="form">
          <label>Movie Name : </label>
          <input type="text" name="movieName" />
          <label>Review : </label>
          <input type="text" name="review" />
          <button>submit</button>
        </div>
      </div>
    </>
  );
};

export default Home;
