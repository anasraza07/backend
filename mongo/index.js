import mongoose from "mongoose";

main().then(() => console.log("connection successful"))
  .catch(error => console.log(error));

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/test");
}

const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  age: Number,
})

const User = mongoose.model("User", userSchema);

// User.deleteOne({ name: "Bruce2" })
//   .then(res => console.log(res))
//   .catch(err => console.log(err))

// User.deleteMany({ age: 8 })
//   .then(res => console.log(res))
//   .catch(err => console.log(err))

User.findByIdAndDelete('697ca05a04c42dcec2957ea2')
  .then(res => console.log(res))
  .catch(err => console.log(err))

// User.updateOne({ name: "Bruce" }, { age: 50 })
// .then(res => console.log(res))
// .catch(err => console.log(err))

// User.updateMany({ age: { $lt: 30 } }, { age: 8 })
//   .then(res => console.log(res))
//   .catch(err => console.log(err))

// User.findOneAndUpdate({ age: 50 }, { name: "Bruce2" }, { new: true })
//   .then(res => console.log(res))
//   .catch(err => console.log(err))

// User.findByIdAndUpdate("697ca048540c5b0a961a7bd3", { name: "Evil" },
//   { new: true }).then(res => console.log(res))
//   .catch(err => console.log(err))

// User.find({age: {$gte: 30}})
//   .then(res => console.log(res))
//   .catch(error => console.log(error))

// User.findOne({ name: "Bruce" })
//   .then(res => console.log(res))
//   .catch(error => console.log(error))

// User.findById("697ca048540c5b0a961a7bd3")
//   .then(res => console.log(res))
//   .catch(error => console.log(error))

// const user2 = new User({ name: "Adam", email: "adam@yahoo.in", age: 39 });
// user2.save()
//   .then(res => console.log(res))
//   .catch(error => console.log(error));

// User.insertMany([
//   { name: "Tony", email: "tony@gmail.com", age: 30 },
//   { name: "Pet", email: "pet@gmail.com", age: 27 },
//   { name: "Bruce", email: "bruce@gmail.com", age: 48 },
// ]).then(res => console.log(res))