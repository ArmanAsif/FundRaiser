import express from "express";
const router = express.Router();

import {
	addNewRequest,
	getAllUserRequest,
	getUserRequestById,
	approveUserRequest,
	updateDonatedList,
} from "../controllers/requestController.js";

import { protect, admin } from "../middleware/authMiddleware.js";

router.route("/").get(protect, getAllUserRequest);
router.route("/create").post(protect, addNewRequest);
router.route("/:id").get(protect, getUserRequestById);
router.route("/donatedList/update/:id").put(protect, updateDonatedList);
router.route("/admin/approve/:id").put(protect, admin, approveUserRequest);

export default router;
