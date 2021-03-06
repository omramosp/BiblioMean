import supplier from "../models/supplier.js";


const registerSupplier = async (req, res) => {
  if (!req.body.name || !req.body.address)
    return res.status(400).send("Incomplete data");

  const existingSupplier = await supplier.findOne({ name: req.body.name });
  if (existingSupplier) return res.status(400).send("The Supplier already exist");

  const supplierSchema = new supplier({
    name: req.body.name,
    address: req.body.address,
  });

  const result = await supplierSchema.save();
  console.log(result);
  if (!result) return res.status(400).send("Failed to register supplier");

  return res.status(200).send({ result });
};
const listSupplier = async (req, res) => {
  const supplierSchema = await supplier.find();
  if (!supplierSchema || supplierSchema.length == 0)
    return res.status(400).send("Empty book list");
  return res.status(200).send({ supplierSchema });
  //return !roleSchema || roleSchema.length == 0 ? res.status(400).send("Empty role list") :  res.status(200).send({ roleSchema });
};

const updateSupplier = async (req, res) => {
  if (!req.body.name || !req.body.address)
    return res.status(400).send("Incomplete data");

  const existingSupplier = await supplier.findOne({
    name: req.body.name,
    address: req.body.address,
  });
  if (existingSupplier) return res.status(400).send("The Supplier already exist");

  const supplierUpdate = await supplier.findByIdAndUpdate(req.body._id, {
    name: req.body.name,
    address: req.body.address,
  });
  return !supplierUpdate
    ? res.status(400).send("Error editing supplier")
    : res.status(200).send({ supplierUpdate });
};

const deleteSupplier = async (req, res) => {
  const supplierDelete = await supplier.findByIdAndDelete({ _id: req.params["_id"] });
  !supplierDelete
    ? res.status(400).send("Supplier not found")
    : res.status(200).send("Supplier delete");
};

export default { registerSupplier, listSupplier, updateSupplier, deleteSupplier };