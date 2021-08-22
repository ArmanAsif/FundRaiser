import "./Modal.css";
import React from "react";

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
