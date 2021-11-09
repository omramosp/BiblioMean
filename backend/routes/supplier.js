import express from "express";
import supplier from "../controllers/supplier.js";
const router = express.Router();

//http://localhost:3001/api/supplier/registersupplier
router.post("/registerSupplier", supplier.registerSupplier);
router.get("/listSupplier", supplier.listSupplier);

export default router;