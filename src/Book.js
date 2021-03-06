import React, { useState } from "react";
import axios from "axios";

const Book = () => {
  const [book, setBook] = useState("");
  const [result, setResult] = useState([]);
  //키값은 나중에 다른 js파일로 저장 후 따로 보관
  const NAVER_CLIENT_ID = "B6h9ObcuFvzsYG8iv5QZ";
  const NAVER_CLIENT_SECRET = "O1QIdiIUqY";
  const getBook = async () => {
    console.log(book);
    try {
      const {
        data: { items }, // image 가 null 일 때 기본 이미지 디스플레이
      } = await axios.get("/api/v1/search/book.json", {
        params: { query: `${book}`, display: 100 },
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
    getBook();
  };
  const onChange = (event) => {
    const {
      target: { value },
    } = event;
    setBook(value);
  };

  const onTitleClick = async (event) => {
    console.log(event.target.innerText);

    try {
      const {
        data: { items }, // image 가 null 일 때 기본 이미지 디스플레이
      } = await axios.get("/api/v1/search/book_adv.json", {
        params: {
          d_isbn: `${event.target.parentNode.className}`,
          d_titl: `${event.target.innerText}`,
          display: 100,
        },
        headers: {
          "X-Naver-Client-Id": NAVER_CLIENT_ID,
          "X-Naver-Client-Secret": NAVER_CLIENT_SECRET,
        },
      });

      console.log(items);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <input
        type="text"
        placeholder="What Book you find???"
        onChange={onChange}
      />
      <input type="submit" onClick={onClick} value="Search" />
      <div>
        {result.map((items) => (
          <li key={items.link} className={("result", `${items.isbn}`)}>
            <div onClick={onTitleClick} className={`${items.isbn}`}>
              <img src={items.image} />
              {
                items.title.replace(/[</b>]/g, "").replace("&amp", "") // replace() 안에 /[]/g 중 없애고 싶은 모든 무자열은 [] 안에 넣으면 된다.
              }
            </div>
          </li>
        ))}
      </div>
    </>
  );
};

export default Book;
