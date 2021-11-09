import moment from "moment";
import mongoose from "mongoose";

const bookSchema = new mongoose.Schema({
  name: String,
  author: String,
  yearPublication : Number,
  pages : Number,
  gender : String,
  price : Number,
  registerDate: { type: Date, default: Date.now },
  dbStatus: Boolean,
});

const book = mongoose.model("books", bookSchema);

export default book;