import React, { useState } from "react";
import axios from "axios";

const Finder = () => {
  const [movie, setMovie] = useState("");
  const [result, setResult] = useState([]);
  //키값은 나중에 다른 js파일로 저장 후 따로 보관

  const getMovie = async () => {
    const NAVER_CLIENT_ID = "B6h9ObcuFvzsYG8iv5QZ";
    const NAVER_CLIENT_SECRET = "O1QIdiIUqY";
    console.log(movie);
    try {
      const {
        data: { items }, // image 가 null 일 때 기본 이미지 디스플레이
      } = await axios.get("/api/v1/search/movie.json", {
        params: { query: `${movie}`, display: 20 },
        headers: {
          "X-Naver-Client-Id": NAVER_CLIENT_ID,
          "X-Naver-Client-Secret": NAVER_CLIENT_SECRET,
        },
      });

      setResult(items);
      console.log(items);
    } catch (error) {
      console.log(error);
    }
  };

  const onClick = () => {
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
      <div>
        {result.map((items) => (
          <li key={items.link} className="result">
            <img src={items.image} />
            {items.title
              .replace("<b>", "")
              .replace("</b>", "")
              .replace("&amp", "")}
          </li>
        ))}
      </div>
    </>
  );
};

export default Finder;
