import book from "../models/book.js";

const registerBook = async (req, res) => {
  if (!req.body.name || !req.body.author || !req.body.price)
    return res.status(400).send("Incomplete data");

  const existingBook = await book.findOne({ name: req.body.name });
  if (existingBook) return res.status(400).send("The book already exist");

  const bookSchema = new book({
    name: req.body.name,
    author: req.body.author,
    pages: req.body.pages,
    yearPublication : req.body.yearPublication,
    gender : req.body.gender,
    price: req.body.price,
  });

  const result = await bookSchema.save();
  console.log(result);
  if (!result) return res.status(400).send("Failed to register role");

  return res.status(200).send({ result });
};
const listBook = async (req, res) => {
  const bookSchema = await book.find();
  if (!bookSchema || bookSchema.length == 0)
    return res.status(400).send("Empty book list");
  return res.status(200).send({ bookSchema });
  //return !roleSchema || roleSchema.length == 0 ? res.status(400).send("Empty role list") :  res.status(200).send({ roleSchema });
};

export default { registerBook, listBook };
