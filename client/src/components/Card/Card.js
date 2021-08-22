import "./Card.css";
import React from "react";
import Circle from "../Circle/Circle";
import { Link } from "react-router-dom";

const Card = ({
	requestID,
	donatedList,
	diseaseName,
	lastDate,
	fundAmount,
	isAdmin,
}) => {
	let link = isAdmin
		? `/admin/approve/${requestID}`
		: `/request/${requestID}`;

	let totalDonated = donatedList.reduce((acc, curr) => {
		return acc + curr.donatedAmount;
	}, 0);

	let dueMoney = fundAmount - totalDonated;
	let progress = (totalDonated * 100) / fundAmount;

	let monthDiff = new Date(lastDate).getTime() - new Date().getTime();
	let duration = Math.abs(Math.floor(monthDiff / (1000 * 60 * 60 * 24)));

	return (
		<div className="card-container">
			<div className="card-circle">
				<Circle progress={progress} />
			</div>
			<div className="card-text">
				<p>{diseaseName}</p>
				<p>Due {dueMoney} BDT</p>
				<p>{duration} Days</p>

				<Link to={link} className="card-details-button">
					check
				</Link>
			</div>
		</div>
	);
};

export default Card;
