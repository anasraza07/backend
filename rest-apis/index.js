import express from "express";
import path from "path";
import { v4 as uuidv4 } from 'uuid';
import methodOverride from "method-override";

const app = express();
const port = 8080;

app.use(express.urlencoded({ extended: true }));
app.use(methodOverride('_method'))

app.set("view engine", "ejs");
app.set("views", path.join(import.meta.dirname, "/views"));
app.use(express.static(path.join(import.meta.dirname, "/public")))

let posts = [
  {
    id: uuidv4(),
    username: "anasraza07",
    content: "Abc love coding!"
  }, {
    id: uuidv4(),
    username: "helloworld",
    content: "world is saying hello to you!"
  }, {
    id: uuidv4(),
    username: "demodemo",
    content: "Demo content is here demo!"
  }
]

app.get("/", (req, res) => {
  res.send("go to /posts route to see all posts")
})

app.get("/posts", (req, res) => {
  res.render("index.ejs", { posts })
})

app.get("/posts/new", (req, res) => {
  res.render("new.ejs")
})

app.post("/post", (req, res) => {
  const { username, content } = req.body;
  posts.push({ id: uuidv4(), username, content })
  res.redirect("/posts");
})

app.get("/posts/:id/edit", (req, res) => {
  const { id } = req.params;
  const post = posts.find(p => p.id == id);
  res.render("edit.ejs", { post })
})

app.get("/posts/:id", (req, res) => {
  const { id } = req.params;
  const post = posts.find(p => p.id == id);
  res.render("show.ejs", { post });
})

app.patch("/posts/:id", (req, res) => {
  const { id } = req.params;
  const post = posts.find(p => p.id == id);
  const newContent = req.body.content;
  post.content = newContent;
  res.redirect("/posts");
})

app.delete("/posts/:id", (req, res) => {
  const { id } = req.params;
  posts = posts.filter(p => p.id != id);
  res.redirect("/posts")
})

app.listen(port, () => {
  console.log(`listening on port ${port}`)
})