const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const cors = require("cors");
const mysql = require("mysql");

// CRUD  : https://www.youtube.com/watch?v=T8mqZZ0r-RA 참고
const db = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "jnesystech1",
  database: "CRUDDataBase",
});
app.use(cors()); //cors err 해결
app.use(express.json()); // json 형태로 전달하기 위해
app.use(bodyParser.urlencoded({ extendes: true }));

app.get("/", (req, res) => {
  res.send(" server is working");
});

app.get("/api/get", (req, res) => {
  const sqlInsert = "SELECT * FROM movie_reviews"; // Select every Information from our database call movie_rivews
  db.query(sqlInsert, (err, result) => {
    //console.log(result);
    res.send(result);
  });
});

app.post("/api/insert", (req, res) => {
  const movieName = req.body.movieName;
  const movieReview = req.body.movieReview;
  const sqlInsert =
    "INSERT INTO movie_reviews (movieName,movieReview) VALUES (?,?)"; //?? 부분에 자동으로 movieName, movieReview 가 들어간다
  db.query(sqlInsert, [movieName, movieReview], (err, result) => {
    console.log(result);
  });
});

app.delete("/api/delete/:movieName", (req, res) => {
  const name = req.params.movieName;
  const sqlInsert = "DELETE FROM movie_reviews WHERE movieName = ? ";
  db.query(sqlInsert, name, (err, result) => {
    if (err) console.log(err);
  });
});

app.put("/api/update", (req, res) => {
  const name = req.body.movieName;
  const review = req.body.movieReview;
  const sqlUpdate =
    "UPDATE movie_reviews SET movieReview = ? WHERE movieName = ?";
  db.query(sqlUpdate, [review, name], (err, result) => {
    if (err) console.log(err);
    console.log(result);
  });
});
app.listen(3001, () => {
  console.log("running on port 3001!!");
});

/*
const connection = mysql.createConnection({
  host: "127.0.0.1",
  user: "root",
  password: "jnesystech1",
  database: "CRUDDataBase",
});

connection.connect();
*/
