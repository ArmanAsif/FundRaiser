import "./LoginScreen.css";
import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import LoginSvg from "../../components/SVG/LoginSvg";
import { useDispatch, useSelector } from "react-redux";
import { userLoginAction } from "../../actions/userActions";

const LoginScreen = ({ history }) => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const dispatch = useDispatch();

	const userLogin = useSelector((state) => state.userLogin);
	const { userInfo } = userLogin;

	// useEffect(() => {
	// 	if (userInfo) {
	// 		history.push("/donate");
	// 	}
	// }, [history, userInfo]);

	const submitHandler = (e) => {
		e.preventDefault();

		if (email && password) {
			dispatch(userLoginAction(email, password));
			history.push("/donate");
		}
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
							value={email}
							onChange={(e) => setEmail(e.target.value)}
						/>

						<label>Enter Password:</label>
						<input
							type="password"
							placeholder="Enter Password"
							value={password}
							onChange={(e) => setPassword(e.target.value)}
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
