import React, { useState } from "react";
import axios from "axios";

const Finder = () => {
  const [movie, setMovie] = useState("");
  const [result, setResult] = useState([]);

  //키값은 나중에 다른 js파일로 저장 후 따로 보관
  const NAVER_CLIENT_ID = "B6h9ObcuFvzsYG8iv5QZ";
  const NAVER_CLIENT_SECRET = "O1QIdiIUqY";

  const getMovie = async () => {
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

      console.log(result);
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

  const onTitleClick = async (event) => {
    console.log(event.target.className);
    console.log(result.indexOf(event.target.className));

    try {
      const {
        data: { items }, // image 가 null 일 때 기본 이미지 디스플레이
      } = await axios.get("/api/v1/search/movie.json", {
        params: {
          query: `${event.title}`,
          display: 100,
        },
        headers: {
          "X-Naver-Client-Id": NAVER_CLIENT_ID,
          "X-Naver-Client-Secret": NAVER_CLIENT_SECRET,
        },
      });

      //console.log(items);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <input
        type="text"
        placeholder="What movie you find???"
        onChange={onChange}
      />
      <input type="submit" onClick={onClick} value="Search" />
      {
        // 엔터누르면 검색하는기능도 추가하기,
      }

      <div>
        {result.map((items) => (
          <li key={items.link} className={("result", `${items.isbn}`)}>
            <div onClick={onTitleClick} className={`${items.title}`}>
              {console.log("items.isbn :" + items)}

              <img src={items.image} />
              <div>
                {
                  items.title.replace(/[</b>]/g, "").replace("&amp", "") // replace() 안에 /[]/g 중 없애고 싶은 모든 무자열은 [] 안에 넣으면 된다.
                }
              </div>
              <div>{items.actor}</div>
              <div>평점 : {items.userRating}</div>
              {
                //나중에는 items.link 타고 들어가서 줄거리 크롤링도 가능할 듯
              }
            </div>
          </li>
        ))}
      </div>
    </>
  );
};

export default Finder;
