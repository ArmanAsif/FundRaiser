import React from "react";
import "./Modal.css";

const Popup = ({ toggleModal }) => {
	return (
		<div id="request-details-popup">
			<p>popup</p>
			<a href="#" onClick={toggleModal}>
				close
			</a>
		</div>
	);
};

export default Popup;
