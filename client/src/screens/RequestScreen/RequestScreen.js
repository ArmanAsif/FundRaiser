import React from "react";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import "./RequestScreen.css";
// import { Link } from "react-router-dom";
import RequestSvg from "../../components/SVG/RequestSvg";

const RequestScreen = () => {
	const submitHandler = (e) => {
		e.preventDefault();
		// dispatch(login(email, password));
	};

	return (
		<>
			<Header />

			<div className="request-container">
				<div className="request-form-container">
					<h3>Form Fillup</h3>
					<form className="request-form" onSubmit={submitHandler}>
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

						<label>Bank Account:</label>
						<input
							type="text"
							placeholder="Bank Account"
							// value={password}
							// onChange={(e) => setPassword(e.target.value)}
						/>

						{/* <label>Insert Document:</label> */}
						<input
							type="file"
							id="image-uploader"
							//   name="image"
							//   onChange={uploadFileHandler}
						/>

						<button type="submit" className="request-submit-button">
							submit
						</button>

						{/* <div className="request-form-footer">
							<p>Already request?</p>
							<Link
								to={"/login"}
								className="request-form-footer-link"
							>
								Login
							</Link>
						</div> */}
					</form>
				</div>

				<div className="request-svg">
					<RequestSvg />
				</div>
			</div>

			<Footer />
		</>
	);
};

export default RequestScreen;
