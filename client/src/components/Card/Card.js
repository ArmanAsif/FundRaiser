import React from "react";
import "./Card.css";
import Circle from "../Circle/Circle";
import { Link } from "react-router-dom";

const Card = ({ progress, problem, duration, dueMoney }) => {
	return (
		<div className="card-container">
			<div className="card-circle">
				<Circle progress={progress} />
			</div>
			<div className="card-text">
				<p>{problem}</p>
				<p>Due {dueMoney} BDT</p>
				<p>{duration} Days</p>
				<Link to={"/approve"} className="card-details-button">
					check
				</Link>
			</div>
		</div>
	);
};

export default Card;
