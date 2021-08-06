import React from "react";
import "./RequestScreen.css";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import RequestSvg from "../../components/SVG/RequestSvg";
import DatePicker from "../../components/DatePicker/DatePicker";

const diseaseOption = [
	"Blood Cancer",
	"Lung Infections",
	"Pulmonary Disease",
	"Heart Stroke",
	"Brain Tumor",
	"Tuberculosis",
	"Accidental Injury",
	"Diabetes",
];

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

						<label>Choose Your Problem:</label>
						<select>
							{diseaseOption.map((data, index) => {
								return (
									<option
										key={index}
										value={data}
										label={data}
									/>
								);
							})}
						</select>

						<label>Submission Date:</label>
						<DatePicker />

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
