import React, { useState } from "react";
import axios from "axios";

const Finder = () => {
  const [movie, setMovie] = useState("");
  const [result, setResult] = useState([]);
  //키값은 나중에 다른 js파일로 저장 후 따로 보관
  const url =
    "http://www.kobis.or.kr/kobisopenapi/webservice/rest/movie/searchMovieList.json?key=0f9a0ba4da91695352348c5fbf0b5007&movieNm=";
  const mpvieUrl = url + movie;

  const getMovie = async () => {
    const {
      data: {
        movieListResult: { movieList },
      },
    } = await axios.get(mpvieUrl);
    setResult(movieList);
    console.log(result);
  };

  const onClick = () => {
    console.log(movie);
    getMovie();
  };
  const onChange = (event) => {
    const {
      target: { value },
    } = event;
    setMovie(value);
  };
  return (
    <>
      <input
        type="text"
        placeholder="What movie you find???"
        onChange={onChange}
      />
      <input type="submit" onClick={onClick} value="Search" />
    </>
  );
};

export default Finder;
