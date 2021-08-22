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
		user: req.user._id,
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

// @desc    Get all products
// @route   GET /api/products
// @access  Public

const getAllUserRequest = asyncHandler(async (req, res) => {
	const requests = await Request.find({}).populate(
		"user",
		"id name email nid"
	);

	res.json(requests);
});

// @desc    Fetch single request
// @route   GET /api/requests/:id
// @access  Private

const getUserRequestById = asyncHandler(async (req, res) => {
	const request = await Request.findById(req.params.id).populate(
		"user",
		"id name email nid"
	);

	if (request) {
		res.json(request);
	} else {
		res.status(404);
		throw new Error("Request Not Found");
	}
});

// @desc    Approve Request by Admin
// @route   PUT /api/requests/admin/approve/:id
// @access  Private/Admin

const approveUserRequest = asyncHandler(async (req, res) => {
	const request = await Request.findById(req.params.id);

	if (request) {
		if (req.body.approve) {
			request.isApproved = true;
		} else {
			request.isDiscarded = true;
		}

		const updatedRequest = await request.save();
		res.json(updatedRequest);
	} else {
		res.status(404);
		throw new Error("Request Not Found");
	}
});

// @desc    Update request donated list
// @route   PUT /api/requests/donatedList/update/:id
// @access  Private

const updateDonatedList = asyncHandler(async (req, res) => {
	const request = await Request.findById(req.params.id);

	const { donatedAmount, transectionID } = req.body;

	if (request) {
		const newDonation = {
			userName: req.user.name,
			donatedAmount: Number(donatedAmount),
			transectionID,
			user: req.user._id,
		};

		request.donatedList.push(newDonation);
		await request.save();

		res.status(201).json({ message: "Successfully Added New Donation" });
	} else {
		res.status(404);
		throw new Error("Request Not Found");
	}
});

export {
	addNewRequest,
	getAllUserRequest,
	getUserRequestById,
	approveUserRequest,
	updateDonatedList,
};
