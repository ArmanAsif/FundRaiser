import React from "react";
import "./LoginScreen.css";
import Header from "../../components/Header/Header";
import { Link } from "react-router-dom";
import Footer from "../../components/Footer/Footer";
import LoginSvg from "../../components/SVG/LoginSvg";

const LoginScreen = () => {
	const submitHandler = (e) => {
		e.preventDefault();
		// dispatch(login(email, password));
	};

	return (
		<>
			<Header />

			<div className="login-container">
				<div className="login-form-container">
					<h3>Login Please</h3>
					<form className="login-form" onSubmit={submitHandler}>
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

						<button type="submit" className="login-submit-button">
							login
						</button>

						<div className="login-form-footer">
							<p>New User?</p>
							<Link
								to={"/signup"}
								className="login-form-footer-link"
							>
								Signup
							</Link>
						</div>
					</form>
				</div>

				<div className="login-svg">
					<LoginSvg />
				</div>
			</div>

			<Footer />
		</>
	);
};

export default LoginScreen;
