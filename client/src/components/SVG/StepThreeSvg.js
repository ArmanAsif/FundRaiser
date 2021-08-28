import React from "react";

const StepThreeSvg = ({ props }) => {
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
					d="M18 11h-4v7h-4v-7H6l6-6 6 6zM2 12C2 6.486 6.486 2 12 2s10 4.486 10 10-4.486 10-10 10S2 17.514 2 12zm-2 0c0 6.627 5.373 12 12 12s12-5.373 12-12S18.627 0 12 0 0 5.373 0 12z"
				/>
			</svg>
		</div>
	);
};

export default StepThreeSvg;
