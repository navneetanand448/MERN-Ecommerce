import express from "express";
import { newUser, getAllUser, getUser, deleteUser } from "../controllers/user.js";
import { adminOnly } from "../middlewares/auth.js";

const router = express.Router();

router.post("/new", newUser);

router.get("/all", adminOnly, getAllUser);

router.get("/:id", adminOnly, getUser);

router.delete("/:id", adminOnly, deleteUser);

export default router;