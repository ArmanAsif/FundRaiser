import React from "react";

const StepFourSvg = ({ props }) => {
	return (
		<div>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width={40}
				height={40}
				viewBox="0 0 24 24"
				{...props}
			>
				<path
					fill="#007f68"
					d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10S2 17.514 2 12 6.486 2 12 2zm0-2C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm4.393 7.5l-5.643 5.784-2.644-2.506-1.856 1.858L10.75 17l7.5-7.643L16.393 7.5z"
				/>
			</svg>
		</div>
	);
};

export default StepFourSvg;
