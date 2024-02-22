import express from "express";
import { loginUser, logout, signup } from "../controllers/auth.controllers.js";

const router = express.Router();

router.get("/login", signup);
router.get("/login", loginUser);
router.get("/login", logout);

export default router;
