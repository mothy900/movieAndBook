import React from "react";
import mysql from "mysql";

const Server = () => {
  const con = mysql.createConnection({
    host: "211.253.11.189",
    port: "11000",
    user: "unity",
    password: "jnesystech1",
    database: "unityServer",
  });

  const ViewMysql = () => {
    con.connect(function (err) {
      if (err) throw err;
      con.query(
        "SELECT * FROM customers ORDER BY name",
        function (err, result, field) {
          if (err) throw err;
          console.log(result);
        }
      );
    });
  };

  return { ViewMysql };
};

export default Server;

/* var mysql = require("mysql");
var dbResult = [];
var con = mysql.createConnection({
  host: "211.253.11.189",
  port: "11000",
  user: "unity",
  password: "jnesystech1",
  database: "unityServer",
});

con.connect(function (err) {
  if (err) throw err;
  con.query(
    "SELECT * FROM customers ORDER BY name",
    function (err, result, field) {
      if (err) throw err;
      console.log(result);
      dbResult = result;
    }
  );
});
 */
