import {
	userRequestDetailsById,
	approveRequestByAdmin,
} from "../../actions/requestActions";
import "./AdminApproveScreen.css";
import React, { useEffect } from "react";
import Circle from "../../components/Circle/Circle";
import Modal from "../../components/Modal/Modal";
import Popup from "../../components/Modal/Popup";
import Footer from "../../components/Footer/Footer";
import { useDispatch, useSelector } from "react-redux";
import Header from "../../components/Header/Header";
import ApproveSvg from "../../components/SVG/ApproveSvg";

let imageIndex;

const AdminApproveScreen = ({ history, match }) => {
	const requestID = match.params.id;
	const dispatch = useDispatch();

	const userLogin = useSelector((state) => state.userLogin);
	const { userInfo } = userLogin;

	useEffect(() => {
		document.body.scrollTop = 0;
		document.documentElement.scrollTop = 0;
	}, []);

	useEffect(() => {
		if (!userInfo) {
			history.push("/login");
		} else {
			dispatch(userRequestDetailsById(requestID));
		}
	}, [requestID, userInfo, history, dispatch]);

	const userRequestDetails = useSelector((state) => state.userRequestDetails);
	const { request } = userRequestDetails;

	const {
		phoneNumber,
		diseaseName,
		lastDate,
		fundAmount,
		bankAccount,
		documents,
		user,
		donatedList,
	} = request;

	let totalDonated =
		donatedList &&
		donatedList.reduce((acc, curr) => {
			return acc + curr.donatedAmount;
		}, 0);

	let dueAmount = fundAmount ? fundAmount - totalDonated : 0;
	let progress = (totalDonated * 100) / fundAmount;

	const approveHandler = (e) => {
		e.preventDefault();
		dispatch(approveRequestByAdmin(requestID, true));
	};

	const discardHandler = (e) => {
		e.preventDefault();
		dispatch(approveRequestByAdmin(requestID, false));
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
								<Circle progress={progress} />
							</div>
							<div className="admin-approve-top-text">
								<p>{dueAmount}</p>
								<p>BDT STILL DUE</p>
							</div>
						</div>

						<div className="admin-approve-bottom">
							<div className="admin-approve-disease">
								<p>Disease</p>
								<p>{diseaseName}</p>
							</div>

							<div className="admin-approve-author">
								<p>Author</p>
								<p>{user && user.name}</p>
							</div>

							<div className="admin-approve-phone">
								<p>Contact</p>
								<p>{phoneNumber}</p>
							</div>

							<div className="admin-approve-nid">
								<p>NID Num</p>
								<p>{user && user.nid}</p>
							</div>

							<div className="admin-approve-bank">
								<p>Bank A/C</p>
								<p>{bankAccount}</p>
							</div>

							<div className="admin-approve-date">
								<p>Last Date</p>
								<p>{lastDate}</p>
							</div>

							<div className="admin-approve-modal">
								<span>DOCS</span>

								{documents &&
									documents.map((image, index) => {
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
									onClick={approveHandler}
									className="admin-approve-approve-button"
								>
									approve
								</button>

								<button
									onClick={discardHandler}
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
				imageLink={documents && documents[imageIndex - 1]}
				index={imageIndex}
			/>
		</>
	);
};

export default AdminApproveScreen;
