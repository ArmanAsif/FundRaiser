import "./Circle.css";
import React from "react";
import styled, { keyframes } from "styled-components";

const TopRect = (degree) => keyframes`
	to {
		transform: rotate(${degree}deg);
	}
`;

const TopRectangle = styled.div`
	height: 50px;
	width: 100px;
	background: var(--circle-color);
	position: absolute;
	top: 50px;
	transform-origin: 50% 0;
	animation: ${(props) => TopRect(props.degree)} ${(props) => props.time}s
		forwards linear;
`;

const BottomRect = (degree) => keyframes`
	to {
		transform: rotate(${degree}deg);
	}
`;

const BottomRectangle = styled.div`
	height: 50px;
	width: 100px;
	background: var(--circle-color);
	position: absolute;
	top: -50px;
	transform-origin: 50% 100%;
	animation: ${(props) => BottomRect(props.degree)} ${(props) => props.time}s
		forwards linear;
	animation-delay: ${(props) => props.delayAnimation}s;
`;

const InnerCircle = styled.div`
	width: 80px;
	height: 80px;
	background: var(--white-light);
	position: absolute;
	top: 10px;
	left: 10px;
	border-radius: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
	font-size: 1.45rem;
	font-weight: 700;
	font-family: "Segoe UI", Tahoma;
`;

const Circle = ({ progress }) => {
	let displacement = (progress * 180 * 2) / 100;
	let upperDegree = displacement;
	let upperTime = 0;
	let lowerDegree = 0;
	let lowerTime = 0;

	if (progress > 50) {
		lowerDegree = ((progress - 50) * 180 * 2) / 100;
		upperDegree = upperDegree - lowerDegree;
	}

	upperTime = upperDegree * 0.015;
	lowerTime = lowerDegree * 0.015;

	return (
		<div className="outter-circle">
			<div className="circle-container">
				<div className="top-semicircle">
					<TopRectangle
						degree={upperDegree}
						time={upperTime}
					></TopRectangle>
				</div>

				<div className="bottom-semicircle">
					<BottomRectangle
						degree={lowerDegree}
						time={lowerTime}
						delayAnimation={upperTime}
					></BottomRectangle>
				</div>

				<InnerCircle>{progress}%</InnerCircle>
			</div>
		</div>
	);
};

export default Circle;
