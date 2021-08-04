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
	background: var(--blue-main);
	position: absolute;
	top: 50px;
	transform-origin: 50% 0;
	animation: ${(props) => TopRect(props.degree)} 2.5s forwards linear;
`;

const BottomRect = (degree) => keyframes`
	to {
		transform: rotate(${degree}deg);
	}
`;

const BottomRectangle = styled.div`
	height: 50px;
	width: 100px;
	background: var(--blue-main);
	position: absolute;
	top: -50px;
	transform-origin: 50% 100%;
	animation: ${(props) => BottomRect(props.degree)} 2.5s forwards linear;
	animation-delay: 2.5s;
`;

const Circle = () => {
	return (
		<div className="outter-circle">
			<div className="circle-container">
				<div className="top-semicircle">
					<TopRectangle degree={175}></TopRectangle>
				</div>
				<div className="bottom-semicircle">
					<BottomRectangle degree={170}></BottomRectangle>
				</div>
				<div className="inner-circle">Pure CSS</div>
			</div>
		</div>
	);
};

export default Circle;
