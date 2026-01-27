const express = require("express");

const app = express();
const port = 8080;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/register", (req, res) => {
  const { user } = req.query;
  res.send("GET response. Welcome " + user + "!")
})

app.post("/register", (req, res) => {
  const { user } = req.body;
  console.log(user)
  res.send("POST response. Welcome " + user + "!")
})

app.listen(port, () => {
  console.log(`listening on port ${port}`);
}); 