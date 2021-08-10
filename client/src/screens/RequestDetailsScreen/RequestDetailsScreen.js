import React from "react";
import "./RequestDetailsScreen.css";
import Circle from "../../components/Circle/Circle";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import RequestDetailsSvg from "../../components/SVG/RequestDetailsSvg";
import Modal from "../../components/Modal/Modal";
import Popup from "../../components/Modal/Popup";

const imageData = [
	"/images/docs.png",
	"/images/docs.png",
	"/images/docs.png",
	"/images/docs.png",
	"/images/docs.png",
];

var imageIndex;

const RequestDetailsScreen = () => {
	const submitHandler = (e) => {
		e.preventDefault();
		// dispatch(login(email, password));
	};

	function toggleModal(e) {
		var blur = document.getElementById("request-details-blur");
		blur.classList.toggle("active");

		if (e.target.innerText !== "x") {
			imageIndex = parseInt(e.target.innerText);
		}

		var popup = document.getElementById("popup-container");
		popup.classList.toggle("active");
	}

	return (
		<>
			<div id="request-details-blur">
				<Header />

				<div className="request-details-container">
					<div className="request-details-svg">
						<RequestDetailsSvg />
					</div>

					<div className="request-details-info">
						<div className="request-details-top">
							<div className="request-details-circle">
								<Circle progress={75} />
							</div>
							<div className="request-details-top-text">
								<p>2500000</p>
								<p>BDT STILL DUE</p>
							</div>
						</div>

						<div className="request-details-bottom">
							<div className="request-details-disease">
								<p>Disease</p>
								<p>Brain Tumor</p>
							</div>
							<div className="request-details-author">
								<p>Author</p>
								<p>Nayeem Islam</p>
							</div>
							<div className="request-details-bank">
								<p>Bank A/C</p>
								<p>
									Md Sirajul Islam, Sonali Bank, Gobindagonj,
									Gaibandha
								</p>
							</div>
							<div className="request-details-date">
								<p>Last Date</p>
								<p>August 15, 2021</p>
							</div>

							<div className="request-details-modal">
								<span>DOCS</span>

								{imageData.map((image, index) => {
									return (
										<Modal
											key={index}
											image={image}
											index={index + 1}
											toggleModal={toggleModal}
										/>
									);
								})}
							</div>

							<form
								className="request-details-form"
								onSubmit={submitHandler}
							>
								<label>Enter Transection:</label>
								<input
									type="text"
									placeholder="Enter Transection"
									// value={email}
									// onChange={(e) => setEmail(e.target.value)}
								/>

								<label>Enter Amount:</label>
								<input
									type="number"
									placeholder="Enter Amount"
									// value={password}
									// onChange={(e) => setPassword(e.target.value)}
								/>

								<button
									type="submit"
									className="request-details-submit-button"
								>
									send
								</button>
							</form>
						</div>
					</div>
				</div>

				<Footer />
			</div>

			<Popup
				toggleModal={toggleModal}
				imageLink={imageData[imageIndex - 1]}
			/>
		</>
	);
};

export default RequestDetailsScreen;
