import {
	userRequestDetailsById,
	updateDonatedListAction,
} from "../../actions/requestActions";
import "./RequestDetailsScreen.css";
import React, { useState, useEffect } from "react";
import Circle from "../../components/Circle/Circle";
import Modal from "../../components/Modal/Modal";
import Popup from "../../components/Modal/Popup";
import Footer from "../../components/Footer/Footer";
import Loader from "../../components/Loader/Loader";
import { useDispatch, useSelector } from "react-redux";
import Header from "../../components/Header/Header";
import Message from "../../components/Message/Message";
import RequestDetailsSvg from "../../components/SVG/RequestDetailsSvg";

let imageIndex;

const RequestDetailsScreen = ({ history, match }) => {
	const [donatedAmount, setDonatedAmount] = useState(0);
	const [transectionID, setTransectionID] = useState("");
	const [message, setMessage] = useState(false);

	const requestID = match.params.id;
	const dispatch = useDispatch();

	const userLogin = useSelector((state) => state.userLogin);
	const { userInfo } = userLogin;

	useEffect(() => {
		if (!userInfo) {
			history.push("/login");
		} else {
			dispatch(userRequestDetailsById(requestID));
		}
	}, [requestID, userInfo, history, dispatch]);

	const userRequestDetails = useSelector((state) => state.userRequestDetails);
	const { loading, request } = userRequestDetails;

	const {
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

	const userDonatedAmount =
		donatedList &&
		donatedList.reduce((acc, curr) => {
			if (curr.user === userInfo._id) {
				return acc + curr.donatedAmount;
			}
		}, 0);

	const submitHandler = (e) => {
		e.preventDefault();
		if (donatedAmount && transectionID) {
			dispatch(
				updateDonatedListAction(requestID, donatedAmount, transectionID)
			);
			setDonatedAmount(0);
			setTransectionID("");
		}
		// setMessage((message) => !message);
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
					{loading ? (
						<Loader height={75} />
					) : (
						<>
							{message && <Message />}
							<div className="request-details-svg">
								<div className="request-details-user-donated">
									<p>{userDonatedAmount}</p>
									<p>BDT Donated By You</p>
								</div>

								<RequestDetailsSvg />
							</div>

							<div className="request-details-info">
								<div className="request-details-top">
									<div className="request-details-circle">
										<Circle progress={progress} />
									</div>
									<div className="request-details-top-text">
										<p>{dueAmount}</p>
										<p>BDT STILL DUE</p>
									</div>
								</div>

								<div className="request-details-bottom">
									<div className="request-details-disease">
										<p>Disease</p>
										<p>{diseaseName}</p>
									</div>

									<div className="request-details-author">
										<p>Author</p>
										<p>{user && user.name}</p>
									</div>

									<div className="request-details-bank">
										<p>Bank A/C</p>
										<p>{bankAccount}</p>
									</div>

									<div className="request-details-date">
										<p>Last Date</p>
										<p>{lastDate}</p>
									</div>

									<div className="request-details-modal">
										<span>DOCS</span>

										{documents &&
											documents.map((image, index) => {
												return (
													<Modal
														key={index}
														image={image}
														index={index + 1}
														toggleModal={
															toggleModal
														}
													/>
												);
											})}
									</div>

									<form
										className="request-details-form"
										onSubmit={submitHandler}
									>
										<label>Enter Amount:</label>
										<input
											type="number"
											placeholder="Enter Amount"
											value={donatedAmount}
											onChange={(e) =>
												setDonatedAmount(e.target.value)
											}
										/>

										<label>Enter Transection:</label>
										<input
											type="text"
											placeholder="Enter Transection"
											value={transectionID}
											onChange={(e) =>
												setTransectionID(e.target.value)
											}
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
						</>
					)}
				</div>

				<Footer />
			</div>

			<Popup
				toggleModal={toggleModal}
				imageLink={documents && documents[imageIndex - 1]}
			/>
		</>
	);
};

export default RequestDetailsScreen;
