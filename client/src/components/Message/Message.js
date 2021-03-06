import React from "react";
import OkSvg from "../SVG/OkSvg";
import InfoSvg from "../SVG/InfoSvg";
import ErrorSvg from "../SVG/ErrorSvg";
import styled, { keyframes } from "styled-components";

const SlideDown = () => keyframes`
	0%,
	100% {
		transform: translateY(-110%);
	}
	12.5%,
	87.5% {
		transform: translateY(1rem);
	}
`;

const Notification = styled.div`
	width: 98%;
	height: 98%;
	margin: 0 auto;
	display: flex;
	justify-content: center;
	align-items: center;

	font-size: 1.2rem;
	font-weight: 500;
	color: ${(props) => props.color};
	text-transform: uppercase;
	background: var(--green-light);

	transform: translateY(-110%);
	animation: ${SlideDown} 5s 1s 1 cubic-bezier(0.68, -0.55, 0.265, 1.55);
`;

const NotificationMain = styled.div`
	width: 22rem;
	height: 4rem;
	top: 0%;
	left: 50%;
	position: absolute;
	transform: translate(-50%, 0%);
`;

const Message = ({ color, message }) => {
	let currSvg;

	if (color === "var(--green-main)") {
		currSvg = <OkSvg />;
	} else if (color === "var(--red-main)") {
		currSvg = <ErrorSvg />;
	} else if (color === "var(--purple-main)") {
		currSvg = <InfoSvg />;
	}

	return (
		<NotificationMain>
			<Notification color={color}>
				{currSvg}
				<p>{message}</p>
			</Notification>
		</NotificationMain>
	);
};

export default Message;
