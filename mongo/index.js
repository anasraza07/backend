import mongoose from "mongoose";

main().then(() => console.log("connection successful"))
  .catch(error => console.log(error));

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/test");
}