import React from "react";

const ErrorSvg = ({ props }) => {
	return (
		<div>
			<svg
				viewBox="0 0 100 75"
				xmlns="http://www.w3.org/2000/svg"
				width={40}
				height={40}
				style={{
					width: "100%",
					height: "100%",
					backgroundSize: "initial",
					backgroundRepeatY: "initial",
					backgroundRepeatX: "initial",
					backgroundPositionY: "initial",
					backgroundPositionX: "initial",
					backgroundOrigin: "initial",
					backgroundColor: "initial",
					backgroundClip: "initial",
					backgroundAttachment: "initial",
					animationPlayState: "paused",
				}}
				{...props}
			>
				<g
					className="prefix__ldl-scale"
					style={{
						transformOrigin: "50% 50%",
						animationPlayState: "paused",
					}}
					transform="scale(.8)"
				>
					<path
						strokeMiterlimit={10}
						strokeWidth={9}
						stroke="#e70000"
						fill="#d2ffe5"
						d="M41.6 18.9L11.3 71.4c-3.7 6.5.9 14.6 8.4 14.6h60.6c7.5 0 12.1-8.1 8.4-14.6L58.4 18.9c-3.7-6.4-13.1-6.4-16.8 0z"
						style={{
							animationPlayState: "paused",
						}}
					/>
					<circle
						fill="#e70000"
						r={5.4}
						cy={69.4}
						cx={50}
						style={{
							animationPlayState: "paused",
						}}
					/>
					<path
						fill="#e70000"
						d="M55.4 43.8c0 6-1.6 11.3-3.1 14.9-.8 2.1-3.8 2.1-4.7 0-1.5-3.6-3.1-9-3.1-14.9 0-8.9 2.4-11.9 5.4-11.9s5.5 3 5.5 11.9z"
						style={{
							animationPlayState: "paused",
						}}
					/>
				</g>
			</svg>
		</div>
	);
};

export default ErrorSvg;
