import Request from "../models/RequestModel.js";
import asyncHandler from "express-async-handler";

// @desc    Create new product
// @route   POST /api/products
// @access  Private

const addNewRequest = asyncHandler(async (req, res) => {
	const {
		phoneNumber,
		diseaseName,
		lastDate,
		fundAmount,
		bankAccount,
		documents,
	} = req.body;

	const request = new Request({
		user: req.User._id,
		phoneNumber,
		diseaseName,
		lastDate,
		fundAmount,
		bankAccount,
		documents,
	});

	const createdRequest = await request.save();
	res.status(201).json(createdRequest);
});

export { addNewRequest };
