import React from "react";
import { Link } from "react-router-dom";
const Navigation = () => {
  return (
    <>
      <ul>
        <li>
          <Link to="/Home">Home</Link>
        </li>
        <li>
          <Link to="/movie">Movie</Link>
        </li>

        <li>
          <Link to="/book">Book</Link>
        </li>
      </ul>
    </>
  );
};

export default Navigation;
