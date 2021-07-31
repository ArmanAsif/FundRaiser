import React from "react";
import "./HomeScreen.css";
import Header from "../../components/Header/Header";
import { Link } from "react-router-dom";
import HeroSvg from "../../components/SVG/HeroSvg";
import Footer from "../../components/Footer/Footer";

const HomeScreen = () => {
	return (
		<>
			<Header />
			<div className="hero-container">
				<div>
					<div className="hero-text">
						<p>Donate And Save</p>
						<p>People Life</p>
					</div>
					<Link to={"/donate"} className="hero-button">
						DONATE
					</Link>
				</div>
				<div className="hero-svg">
					<HeroSvg />
				</div>
			</div>

			<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
				<path
					fill="#d2ffe5"
					fillOpacity="1"
					d="M0,0L48,16C96,32,192,64,288,64C384,64,480,32,576,26.7C672,21,768,43,864,74.7C960,107,1056,149,1152,149.3C1248,149,1344,107,1392,85.3L1440,64L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
				></path>
			</svg>

			<Footer />
		</>
	);
};

export default HomeScreen;
