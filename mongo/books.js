import mongoose from "mongoose";

main().then(() => console.log("connection successful"))

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/amazon")
}

const bookSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    maxLength: 20
  },
  author: {
    type: String
  },
  price: {
    type: Number,
    min: 1
  },
  discount: {
    type: Number,
    default: 0
  },
  category: {
    type: String,
    enum: ["fiction", "non-fiction"]
  },
  genre: [String]
})

const Book = mongoose.model("Book", bookSchema);

// Book.deleteOne({ price: 300 })
//   .then(res => console.log(res))
//   .catch(err => console.log(err))

const book1 = new Book({
  title: "Marwell comics",
  price: "300",
  category: "non-fiction",
  genre: ["comics"]
})
book1.save().then(res => console.log(res))
  .catch(err => console.log(err));