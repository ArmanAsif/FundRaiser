import express from "express";
const router = express.Router();

import { protect, admin } from "../middleware/authMiddleware.js";

import {
	addNewRequest,
	getAllUserRequest,
	getUserRequestById,
	approveUserRequest,
} from "../controllers/requestController.js";

router.route("/").get(protect, getAllUserRequest);
router.route("/create").post(protect, addNewRequest);
router.route("/:id").get(protect, getUserRequestById);
router.route("/admin/approve/:id").put(protect, admin, approveUserRequest);

export default router;
