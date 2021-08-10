import mongoose from "mongoose";

const requestSchema = mongoose.Schema(
	{
		USER: {
			type: mongoose.Schema.Types.ObjectId,
			required: true,
			ref: "User",
		},
		diseaseName: {
			type: String,
			required: true,
		},
		fundAmount: {
			type: Number,
			required: true,
		},
		bankAccount: {
			type: String,
			required: true,
		},
		lastDate: {
			type: String,
			required: true,
		},
		documents: {
			type: String,
			required: true,
		},

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

		donationList: [
			{
				userName: {
					type: String,
					required: true,
				},
				userEmail: {
					type: String,
					required: true,
				},
				donationAmount: {
					type: Number,
					required: true,
				},
				transectionID: {
					type: String,
					required: true,
				},
			},
		],
	},
	{
		timestamps: true,
	}
);

const Request = mongoose.model("Request", requestSchema);

export default Request;
