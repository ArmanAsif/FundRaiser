import React from "react";
import "./DonateScreen.css";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import { Link } from "react-router-dom";
import DonateSvg from "../../components/SVG/DonateSvg";
import Card from "../../components/Card/Card";

const DonateScreen = () => {
	return (
		<>
			<Header />

			<div className="donate-hero-container">
				<div>
					<div className="donate-hero-text">
						<p>Even Small Donation</p>
						<p>Makes Difference</p>
					</div>
					<Link to={"/"} className="donate-hero-button">
						GO BACK
					</Link>
				</div>
				<div className="donate-hero-svg">
					<DonateSvg />
				</div>
			</div>

			<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
				<path
					fill="#d2ffe5"
					fillOpacity="1"
					d="M0,0L48,16C96,32,192,64,288,64C384,64,480,32,576,26.7C672,21,768,43,864,74.7C960,107,1056,149,1152,149.3C1248,149,1344,107,1392,85.3L1440,64L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
				></path>
			</svg>

			<div className="donate-list-container">
				<Card
					progress={17}
					problem={"Diabetes"}
					duration={16}
					dueMoney={250000}
				/>
				<Card
					progress={8}
					problem={"Blood Cancer"}
					duration={16}
					dueMoney={250000}
				/>
				<Card
					progress={34}
					problem={"Brain Tumor"}
					duration={16}
					dueMoney={250000}
				/>
				<Card
					progress={47}
					problem={"Accidental Injury"}
					duration={16}
					dueMoney={250000}
				/>
				<Card
					progress={27}
					problem={"Pulmonary Disease"}
					duration={16}
					dueMoney={250000}
				/>
				<Card
					progress={74}
					problem={"Blood Cancer"}
					duration={16}
					dueMoney={250000}
				/>
				<Card
					progress={66}
					problem={"Accidental Injury"}
					duration={16}
					dueMoney={250000}
				/>
				<Card
					progress={85}
					problem={"Accidental Injury"}
					duration={16}
					dueMoney={250000}
				/>
				<Card
					progress={17}
					problem={"Kidney Damaged"}
					duration={16}
					dueMoney={250000}
				/>
				<Card
					progress={34}
					problem={"Brain Tumor"}
					duration={16}
					dueMoney={250000}
				/>
				<Card
					progress={17}
					problem={"Pulmonary Disease"}
					duration={16}
					dueMoney={250000}
				/>
				<Card
					progress={34}
					problem={"Diabetes"}
					duration={16}
					dueMoney={250000}
				/>
				<Card
					progress={17}
					problem={"Kidney Damaged"}
					duration={16}
					dueMoney={250000}
				/>
				<Card
					progress={34}
					problem={"Brain Tumor"}
					duration={16}
					dueMoney={250000}
				/>
			</div>

			<Footer />
		</>
	);
};

export default DonateScreen;
