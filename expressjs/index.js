const express = require("express");
const app = express();

const port = 3000;

app.listen(port, () => {
  console.log(`app is listening on port ${port}`);
})

app.get("/", (req, res) => {
  res.send("you contacted root path")
})

app.get("/search", (req, res) => {
  let { q, color } = req.query;
  if (!q) res.send("Nothing searched");
  else res.send(`Search results for query: ${req.query.q}`)
})

app.get("/:username", (req, res) => {
  // console.log(req.params);
  res.send(`Username is ${req.params.username}`)
})

app.get("/:username/:id", (req, res) => {
  const { username, id } = req.params;
  const code = `
    <h1>Username is ${username} with id ${id}</h1>
  `;
  res.send(code)
})

// app.get("/apple", (req, res) => {
//   res.send("you contacted apple path")
// })

// app.get("/orange", (req, res) => {
//   res.send("you contacted orange path")
// })

// app.post("/", (req, res) => {
//   res.send("you sent a post request to root path")
// })

// NOT RUNNING wildcard
// app.get("*", (req, res) => {
//   res.send("thiis path does not exist")
// })

// app.use((req, res) => {
//   console.log("request recieved");
//   // console.log(req);
//   // res.send({
//   //   name: "apple", color: "red"
//   // })
//   res.send("<h1>Hello</h1>")
// })