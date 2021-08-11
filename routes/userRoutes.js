import express from "express";
const router = express.Router();

// import { protect, admin } from "../middleware/authMiddleware.js";
import { signupUser, loginUser } from "../controllers/userController.js";

router.post("/signup", signupUser);
router.post("/login", loginUser);

export default router;
