const express = require("express");
const app = express();
const bodyParser = require("body-parser");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//adding delay between each page request
// app.use((req, res, next) => {
//   setTimeout(next, 3000);
// });

app.get("/", function (req, res) {
  res.sendFile("./public/index.html", { root: __dirname });
});

app.post("/login", function (req, res) {
  res.sendFile("./public/login.html", { root: __dirname });
});

app.post("/logout", function (req, res) {
  res.sendFile("./public/logout.html", { root: __dirname });
});

app.get("/heros", function (req, res) {
  const heros = ["ironman", "spiderman", "batman", "superman", "thor"];
  res.json(heros);
});

app.post("/birthday", function (req, res) {
  const bday = req.body.bday;
  const month = req.body.month;

  if (bday == 1 && month == 1) {
    res.json("Its your birthday");
  }
  res.json("Its not your birthday");
});

app.listen(3000);
