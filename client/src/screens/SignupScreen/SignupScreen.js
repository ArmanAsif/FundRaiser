import React from "react";
import "./SignupScreen.css";
import Header from "../../components/Header/Header";
import { Link } from "react-router-dom";
import Footer from "../../components/Footer/Footer";
import SignupSvg from "../../components/SVG/SignupSvg";

const SignupScreen = () => {
	const submitHandler = (e) => {
		e.preventDefault();
		// dispatch(login(email, password));
	};

	return (
		<>
			<Header />

			<div className="signup-container">
				<div className="signup-svg">
					<SignupSvg />
				</div>

				<div className="signup-form-container">
					<h3>Signup Please</h3>
					<form className="signup-form" onSubmit={submitHandler}>
						<label>Enter Name:</label>
						<input
							type="name"
							placeholder="Enter Name"
							// value={email}
							// onChange={(e) => setEmail(e.target.value)}
						/>

						<label>Enter Email:</label>
						<input
							type="email"
							placeholder="Enter Email"
							// value={email}
							// onChange={(e) => setEmail(e.target.value)}
						/>

						<label>Enter Password:</label>
						<input
							type="password"
							placeholder="Enter Password"
							// value={password}
							// onChange={(e) => setPassword(e.target.value)}
						/>

						<label>Confirm Password:</label>
						<input
							type="password"
							placeholder="Confirm Password"
							// value={password}
							// onChange={(e) => setPassword(e.target.value)}
						/>

						<button type="submit" className="signup-submit-button">
							signup
						</button>

						<div className="signup-form-footer">
							<p>Already Signup?</p>
							<Link
								to={"/login"}
								className="signup-form-footer-link"
							>
								Login
							</Link>
						</div>
					</form>
				</div>
			</div>

			<Footer />
		</>
	);
};

export default SignupScreen;
