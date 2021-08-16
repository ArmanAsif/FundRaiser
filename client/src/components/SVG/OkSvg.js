import React from "react";

const OkSvg = ({ props }) => {
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
					<circle
						fill="#008d34"
						r={40}
						cy={50}
						cx={50}
						style={{
							animationPlayState: "paused",
						}}
					/>
					<path
						d="M43.7 69.4L25 47.7l3.9-3.9 14.8 12.6 28.6-25.8 2.7 2.7z"
						fill="#fff"
						style={{
							animationPlayState: "paused",
						}}
					/>
				</g>
			</svg>
		</div>
	);
};

export default OkSvg;
