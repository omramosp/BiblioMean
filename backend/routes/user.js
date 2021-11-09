import express from "express";
import user from "../controllers/user.js";
const router = express.Router();

//http://localhost:3001/api/user/registeruser
router.post("/registerUser", user.registerUser);
router.get("/listUser", user.listUser);

export default router;