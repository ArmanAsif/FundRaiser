import React from "react";
import "./Modal.css";

const Modal = ({ index, image, toggleModal }) => {
	return (
		<>
			<a href={`#${index}`} onClick={toggleModal} className="modal-tag">
				{index}
			</a>
		</>
	);
};

export default Modal;
