import "./Header.css";
import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
	return (
		<div className="header">
			<div>
				<Link to={"/"} className="header-logo">
					<img src="/images/logo.png" alt="logo" />
					<p>Fund Raiser</p>
				</Link>
			</div>

			<div className="header-right">
				<ul>
					<li>
						<Link to={"/donate"} className="header-link">
							DONATE
						</Link>
						<Link to={"/request"} className="header-link">
							REQUEST
						</Link>
						<Link to={"/login"} className="header-link login">
							LOGIN
						</Link>
					</li>
				</ul>
			</div>
		</div>
	);
};

export default Header;
