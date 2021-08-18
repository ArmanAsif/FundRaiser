import React from "react";

const InfoSvg = ({ props }) => {
	return (
		<div>
			<svg
				viewBox="0 0 100 60"
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
					strokeMiterlimit={10}
					strokeWidth={4}
					fill="none"
					stroke="#ba00df"
				>
					<path
						d="M40 10.682c-19.251 0-32 8.917-32 27.562 0 7.742 2.204 13.8 6.153 18.246-.924 4.388-2.179 8.45-3.505 10.794-.58 1.025.367 2.297 1.503 1.987l.035-.01c3.21-.906 7.202-3.326 11.125-6.398C28.02 64.83 33.654 65.806 40 65.806c19.251 0 32-8.917 32-27.562 0-18.645-12.749-27.562-32-27.562z"
						style={{
							animationPlayState: "paused",
						}}
						strokeWidth={7}
					/>
				</g>
			</svg>
		</div>
	);
};

export default InfoSvg;
