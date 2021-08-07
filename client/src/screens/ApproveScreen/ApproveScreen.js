import React from "react";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import "./ApproveScreen.css";
// import { Link } from "react-router-dom";
import ApproveSvg from "../../components/SVG/ApproveSvg";

const ApproveScreen = () => {
	const submitHandler = (e) => {
		e.preventDefault();
		// dispatch(login(email, password));
	};

	return (
		<>
			<Header />

			<div className="approve-container">
				<div className="approve-svg">
					<ApproveSvg />
				</div>

				<div className="approve-form-container">
					<h3>Form Fillup</h3>
					<form className="approve-form" onSubmit={submitHandler}>
						<label>Enter NID:</label>
						<input
							type="text"
							placeholder="Enter NID"
							// value={email}
							// onChange={(e) => setEmail(e.target.value)}
						/>

						<label>Enter Problem:</label>
						<input
							type="text"
							placeholder="Enter Problem"
							// value={email}
							// onChange={(e) => setEmail(e.target.value)}
						/>

						<label>Problem Description:</label>
						<input
							type="text"
							placeholder="Problem Description"
							// value={password}
							// onChange={(e) => setPassword(e.target.value)}
						/>

						<label>Enter Amount:</label>
						<input
							type="number"
							placeholder="Enter Amount"
							// value={password}
							// onChange={(e) => setPassword(e.target.value)}
						/>

						<label>Bank Account:</label>
						<input
							type="text"
							placeholder="Bank Account"
							// value={password}
							// onChange={(e) => setPassword(e.target.value)}
						/>

						<button type="submit" className="approve-submit-button">
							submit
						</button>
					</form>
				</div>
			</div>

			<Footer />
		</>
	);
};

export default ApproveScreen;
