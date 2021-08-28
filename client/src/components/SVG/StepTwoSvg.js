import React from "react";

const StepTwoSvg = ({ props }) => {
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
					d="M4 22V2h16v11.543C20 17.65 14 16 14 16s1.518 6-2.638 6H4zm18-7.614V0H2v24h10.189C15.352 24 22 16.777 22 14.386zM17 13H7v-1h10v1zm0-4H7v1h10V9zm0-3H7v1h10V6z"
				/>
			</svg>
		</div>
	);
};

export default StepTwoSvg;
