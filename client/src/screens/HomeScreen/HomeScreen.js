import "./HomeScreen.css";
import { Link } from "react-router-dom";
import React, { useEffect, useState } from "react";
import Footer from "../../components/Footer/Footer";
import HeroSvg from "../../components/SVG/HeroSvg";
import Header from "../../components/Header/Header";
import GuidelineSvg from "../../components/SVG/GuidelineSvg";

const HomeScreen = () => {
	const [offset, setOffset] = useState(0);
	let initialHeight = window.innerHeight / 2.25;

	useEffect(() => {
		document.body.scrollTop = 0;
		document.documentElement.scrollTop = 0;
	}, []);

	useEffect(() => {
		window.addEventListener("scroll", counterScroll);

		function counterScroll() {
			setOffset(window.pageYOffset);
			const counters = document.querySelectorAll(".counter");
			const speed = 200;

			if (offset > initialHeight) {
				counters.forEach((counter) => {
					const updateCount = () => {
						const target = +counter.getAttribute("data-target");
						const count = +counter.innerText;
						const inc = target / speed;

						if (count < target) {
							counter.innerText = Math.floor(count + inc);
							setTimeout(updateCount, 100);
						} else {
							counter.innerText = target;
						}
					};

					updateCount();
				});
			} else {
				counters.forEach((counter) => {
					counter.innerText = 0;
				});
			}
		}

		return () => window.removeEventListener("scroll", counterScroll);
	}, [offset, initialHeight]);

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

			<div className="home-counter-container">
				<div className="counter-successful-events">
					<div className="counter" data-target="3287460">
						0
					</div>
					<p>Completed</p>
				</div>
				<div className="counter-running-events">
					<div className="counter" data-target="98476">
						0
					</div>
					<p>Running</p>
				</div>
				<div className="counter-contributors">
					<div className="counter" data-target="78434">
						0
					</div>
					<p>Contributors</p>
				</div>
			</div>

			<div className="home-guideline">
				<div className="home-guideline-text">
					<p>Request Guideline</p>
					{/* <p>
						Carefully Fill Information Which Is Related To Disease
						Or Bank Account Address And Others
					</p> */}
					<p>
						To Recognize You And Verify Your Problem Before
						Approving Your Fund Request Please Attach These Five
						Documents Mentioned Below
					</p>
					<p>
						<span className="guideline-right-arrow">&#9655;</span>{" "}
						Your National ID, Passport Size Photo, Patient's
						Prescription, Incharge Doctor's Contact Details, An
						Application Which Is Signed By Hospital Authority
						Regarding Patient's Problem
					</p>
					{/* <p>
						<span className="guideline-right-arrow">&#9655;</span>{" "}
						The First One Is Your National ID
					</p>
					<p>
						<span className="guideline-right-arrow">&#9655;</span>{" "}
						Then Your Clear Passport Size Photo
					</p>
					<p>
						<span className="guideline-right-arrow">&#9655;</span>{" "}
						Third One Is Patient's Prescription
					</p>
					<p>
						<span className="guideline-right-arrow">&#9655;</span>{" "}
						Include Incharge Doctor's Contact Details
					</p>
					<p>
						<span className="guideline-right-arrow">&#9655;</span>{" "}
						An Application Which Is Signed By Hospital Authority
						Regarding Patient's Problem
					</p> */}
					<p>
						We Will reach Out To Hospital Authority And The Incharge
						Doctor As Well. If All Goes Right, Your Request Will Be
						Approved In A Few Days
					</p>
					{/* <p>
						Go To Request Page{" "}
						<Link
							to={"/request"}
							className="home-guideline-text-link"
						>
							request
						</Link>
					</p> */}
				</div>

				<div className="home-guideline-svg">
					<GuidelineSvg />
				</div>
			</div>

			<Footer />
		</>
	);
};

export default HomeScreen;
