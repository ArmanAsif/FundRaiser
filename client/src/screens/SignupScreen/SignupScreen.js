import "./SignupScreen.css";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import React, { useState, useEffect } from "react";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import SignupSvg from "../../components/SVG/SignupSvg";
import { userSignupAction } from "../../actions/userActions";
import Message from "../../components/Message/Message";

const SignupScreen = () => {
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [nid, setNid] = useState("");
	const [password, setPassword] = useState("");
	const [confirmPassword, setConfirmPassword] = useState("");
	const [message, setMessage] = useState(false);

	const dispatch = useDispatch();

	useEffect(() => {
		document.body.scrollTop = 0;
		document.documentElement.scrollTop = 0;
	}, []);

	const submitHandler = (e) => {
		e.preventDefault();

		if (password !== confirmPassword) {
			window.alert("Mismatch");
		} else {
			dispatch(userSignupAction(name, email, nid, password));
			setName("");
			setEmail("");
			setNid("");
			setPassword("");
			setConfirmPassword("");

			setMessage(true);
			setTimeout(() => {
				setMessage(false);
			}, 6000);
		}
	};

	return (
		<>
			{message && (
				<Message
					color={"var(--green-main)"}
					message={"Successfully Submitted"}
				/>
			)}

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
							type="text"
							placeholder="Enter Name"
							value={name}
							onChange={(e) => setName(e.target.value)}
						/>

						<label>Enter Email:</label>
						<input
							type="email"
							placeholder="Enter Email"
							value={email}
							onChange={(e) => setEmail(e.target.value)}
						/>

						<label>Enter NID:</label>
						<input
							type="text"
							placeholder="Enter NID"
							value={nid}
							onChange={(e) => setNid(e.target.value)}
						/>

						<label>Enter Password:</label>
						<input
							type="password"
							placeholder="Enter Password"
							value={password}
							onChange={(e) => setPassword(e.target.value)}
						/>

						<label>Confirm Password:</label>
						<input
							type="password"
							placeholder="Confirm Password"
							value={confirmPassword}
							onChange={(e) => setConfirmPassword(e.target.value)}
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
