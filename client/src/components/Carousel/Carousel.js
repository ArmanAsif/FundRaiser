import "./Carousel.css";
import React from "react";

let images = [
	"/images/sliderA.jpg",
	"/images/sliderB.jpg",
	"/images/sliderC.jpg",
	"/images/sliderD.jpg",
	"/images/sliderA.jpg",
	"/images/sliderB.jpg",
	"/images/sliderC.jpg",
	"/images/sliderD.jpg",
];

const Carousel = () => {
	return (
		<div className="slider-container">
			<div className="slider">
				<div className="slide-track">
					{images.map((image, index) => {
						return (
							<div key={index} className="slide">
								<img src={image} alt="" />
							</div>
						);
					})}
				</div>
			</div>
		</div>
	);
};

export default Carousel;
