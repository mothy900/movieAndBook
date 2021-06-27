import React, { useState, useEffect } from "react";
import Jieun from "./Jieun";
import { Link } from "react-router-dom";
import Server from "./Server";
import Axios from "axios";

const Home = () => {
  const [movieName, setMovieName] = useState("");
  const [review, setReview] = useState("");
  const [movieReviewList, setMovieReviewList] = useState([]);

  const [newReview, setNewReview] = useState("");
  useEffect(() => {
    Axios.get("http://localhost:3001/api/get").then((respone) => {
      console.log(respone.data);
      setMovieReviewList(respone.data);
    });
  }, []);

  const submitReview = () => {
    Axios.post("http://localhost:3001/api/insert", {
      movieName: movieName,
      movieReview: review,
    });

    setMovieReviewList([
      ...movieReviewList,
      { movieName: movieName, movieReview: review },
    ]);
  };
  const deleteReview = (movieName) => {
    Axios.delete(`http://localhost:3001/api/delete/${movieName}`);
  };

  const updateRevie = (movie) => {
    Axios.put(`http://localhost:3001/api/update/`, {
      movieName: movie,
      movieReview: newReview,
    });
    setNewReview("");
  };
  return (
    <>
      <div>
        <Link to="/movie">Movie and Book!</Link>

        <Jieun />

        <div className="form">
          <label>Movie Name : </label>
          <input
            type="text"
            name="movieName"
            onChange={(e) => {
              setMovieName(e.target.value);
            }}
          />
          <label>Review : </label>
          <input
            type="text"
            name="review"
            onChange={(e) => {
              setReview(e.target.value);
            }}
          />
          <button onClick={submitReview}>submit</button>
          {movieReviewList.map((val) => {
            return (
              <div className="card" key={val.id}>
                <h3>Moviname : {val.movieName}</h3>
                <p>Movie Review : {val.movieReview}</p>
                <button onClick={() => deleteReview(val.movieName)}>
                  delete
                </button>
                <input
                  type="text"
                  onChange={(e) => setNewReview(e.target.value)}
                />
                <button
                  onClick={() => {
                    updateRevie(val.movieName);
                  }}
                >
                  Update
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Home;
