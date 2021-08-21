import React from "react";
import "./Modal.css";

const Popup = ({ imageLink, toggleModal, index }) => {
	return (
		<div id="popup-container">
			<img src={imageLink} alt="" />
			<a href={`#${index}`} onClick={toggleModal}>
				x
			</a>
		</div>
	);
};

export default Popup;
