import React from "react";
import "./AdminApproveScreen.css";
import Circle from "../../components/Circle/Circle";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import Modal from "../../components/Modal/Modal";
import Popup from "../../components/Modal/Popup";
import ApproveSvg from "../../components/SVG/ApproveSvg";

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
		var blur = document.getElementById("admin-approve-blur");
		blur.classList.toggle("active");

		if (e.target.innerText !== "x") {
			imageIndex = parseInt(e.target.innerText);
		}

		var popup = document.getElementById("popup-container");
		popup.classList.toggle("active");
	}

	return (
		<>
			<div id="admin-approve-blur">
				<Header />

				<div className="admin-approve-container">
					<div className="admin-approve-svg">
						<ApproveSvg />
					</div>

					<div className="admin-approve-info">
						<div className="admin-approve-top">
							<div className="admin-approve-circle">
								<Circle progress={0} />
							</div>
							<div className="admin-approve-top-text">
								<p>2500000</p>
								<p>BDT STILL DUE</p>
							</div>
						</div>

						<div className="admin-approve-bottom">
							<div className="admin-approve-disease">
								<p>Disease</p>
								<p>Brain Tumor</p>
							</div>
							<div className="admin-approve-author">
								<p>Author</p>
								<p>Nayeem Islam</p>
							</div>
							<div className="admin-approve-nid">
								<p>NID Num</p>
								<p>0947609437609430</p>
							</div>
							<div className="admin-approve-bank">
								<p>Bank A/C</p>
								<p>
									Md Sirajul Islam, Sonali Bank, Gobindagonj,
									Gaibandha
								</p>
							</div>
							<div className="admin-approve-date">
								<p>Last Date</p>
								<p>August 15, 2021</p>
							</div>

							<div className="admin-approve-modal">
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

							<div className="admin-approve-button">
								<button
									type="submit"
									className="admin-approve-approve-button"
								>
									approve
								</button>

								<button
									type="submit"
									className="admin-approve-discard-button"
								>
									discard
								</button>
							</div>
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
