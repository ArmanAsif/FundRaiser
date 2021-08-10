import React from "react";
import "./Modal.css";

const Popup = ({ imageLink, toggleModal }) => {
	return (
		<div id="popup-container">
			<img src={imageLink} alt="" />
			<a href="#" onClick={toggleModal}>
				x
			</a>
		</div>
	);
};

export default Popup;
