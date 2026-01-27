const express = require("express");
const path = require("path");

const app = express();
const port = 8080;

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"))

app.get("/", (req, res) => {
  res.render("home.ejs");
})

app.get("/rolldice", (req, res) => {
  const diceValue = Math.floor((Math.random() * 6) + 1)
  res.render("rolldice.ejs", { diceValue })
})

app.get("/ig/:username", (req, res) => {
  const { username } = req.params;
  const instaData = require("./data.json")
  const data = instaData[username];
  if (data) res.render("instagram.ejs", { data });
  else res.render("error.ejs")
})

app.get("/hello", (req, res) => {
  res.send("hello");
})

app.listen(port, () => {
  console.log(`listening on port ${port}`)
})  