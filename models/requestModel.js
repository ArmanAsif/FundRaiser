import mongoose from "mongoose";

const userDonatedSchema = mongoose.Schema(
	{
		userName: { type: String, required: true },
		donatedAmount: { type: Number, required: true },
		transectionID: { type: String, required: true },
		user: {
			type: mongoose.Schema.Types.ObjectId,
			required: true,
			ref: "User",
		},
	},
	{
		timestamps: true,
	}
);

const requestSchema = mongoose.Schema(
	{
		user: {
			type: mongoose.Schema.Types.ObjectId,
			required: true,
			ref: "User",
		},
		phoneNumber: {
			type: String,
			required: true,
		},
		diseaseName: {
			type: String,
			required: true,
		},
		fundAmount: {
			type: Number,
			required: true,
			default: 0,
		},
		bankAccount: {
			type: String,
			required: true,
		},
		lastDate: {
			type: String,
			required: true,
		},
		documents: [
			{
				type: String,
				required: true,
			},
		],

		isApproved: {
			type: Boolean,
			required: true,
			default: false,
		},
		isDiscarded: {
			type: Boolean,
			required: true,
			default: false,
		},
		isManaged: {
			type: Boolean,
			required: true,
			default: false,
		},
		donatedList: [userDonatedSchema],
	},
	{
		timestamps: true,
	}
);

const Request = mongoose.model("Request", requestSchema);

export default Request;
