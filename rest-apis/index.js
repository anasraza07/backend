const express = require("express");
const path = require("path");

const app = express();
const port = 8080;

app.use(express.urlencoded({ extended: true }));

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));
app.use(express.static(path.join(__dirname, "/public")))

const posts = [
  {
    username: "anasraza07",
    content: "Abc love coding!"
  }, {
    username: "helloworld",
    content: "world is saying hello to you!"
  }, {
    username: "demodemo",
    content: "Demo content is here demo!"
  }
]

app.get("/posts", (req, res) => {
  res.render("index.ejs", { posts })
})

app.listen(port, () => {
  console.log(`listening on port ${port}`)
})