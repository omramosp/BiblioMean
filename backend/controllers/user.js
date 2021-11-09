import user from "../models/user.js";


const registerUser = async (req, res) => {
  if (!req.body.name || !req.body.email || !req.body.password)
    return res.status(400).send("Incomplete data");

  const existingUser = await user.findOne({ name: req.body.name });
  if (existingUser) return res.status(400).send("The User already exist");

  const userSchema = new user({
    name: req.body.name,
    email: req.body.email,
    password: req.body.password,
    dbStatus: true,
  });

  const result = await userSchema.save();
  console.log(result);
  if (!result) return res.status(400).send("Failed to register user");

  return res.status(200).send({ result });
};
const listUser = async (req, res) => {
  const userSchema = await user.find();
  if (!userSchema || userSchema.length == 0)
    return res.status(400).send("Empty book list");
  return res.status(200).send({ userSchema });
  //return !roleSchema || roleSchema.length == 0 ? res.status(400).send("Empty role list") :  res.status(200).send({ roleSchema });
};

export default { registerUser, listUser };