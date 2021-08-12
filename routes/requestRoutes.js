import express from "express";
const router = express.Router();

import { protect } from "../middleware/authMiddleware.js";
import { addNewRequest } from "../controllers/requestController.js";

router.route("/create").post(protect, addNewRequest);

export default router;
