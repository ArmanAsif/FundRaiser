import React from "react";
// import FooterSvg from "../SVG/FooterSvg";
import "./Footer.css";

const Footer = () => {
	return (
		<div className="footer">
			<div className="footer-left">
				<div className="footer-logo">
					<img src="./images/logo.png" alt="logo" />
					<p>Fund Raiser</p>
				</div>
				<span>Gulshan Dhaka Bangladesh</span>
			</div>

			{/* <FooterSvg /> */}

			<div className="footer-center">
				<i className="fa fa-apple"></i>
				<i className="fa fa-windows"></i>
				<i className="fa fa-android"></i>
				<p>You can download app</p>
			</div>

			<div className="footer-right">
				<div className="icons">
					<i className="fa fa-facebook"></i>
					<i className="fa fa-twitter"></i>
					<i className="fa fa-instagram"></i>
					<i className="fa fa-linkedin"></i>
				</div>
				<p>
					Made with <i className="fa fa-heart-o"></i> by Arman Asif
				</p>
			</div>
		</div>
	);
};

export default Footer;
