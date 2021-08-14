import "./HomeScreen.css";
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Card from "../../components/Card/Card";
import Footer from "../../components/Footer/Footer";
import { useSelector, useDispatch } from "react-redux";
import HeroSvg from "../../components/SVG/HeroSvg";
import Header from "../../components/Header/Header";
import GuidelineSvg from "../../components/SVG/GuidelineSvg";
import { getUserRequestList } from "../../actions/requestActions";

const HomeScreen = () => {
	const dispatch = useDispatch();

	const userRequestList = useSelector((state) => state.userRequestList);
	const { requests } = userRequestList;

	useEffect(() => {
		dispatch(getUserRequestList());
	}, [dispatch]);

	let Requests = requests && requests.filter((request) => request.isManaged);

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
			<div className="home-donate-list">
				<p className="home-donate-list-header">Successful Event</p>
				<div className="home-donate-list-container">
					{Requests.map((request) => {
						return (
							<Card
								key={request._id}
								donatedList={request.donatedList}
								diseaseName={request.diseaseName}
								lastDate={request.lastDate}
								fundAmount={request.fundAmount}
							/>
						);
					})}
				</div>
			</div>

			<div className="home-guideline">
				<div className="home-guideline-svg">
					<GuidelineSvg />
				</div>

				<div className="home-guideline-text">
					<p>Request Guideline</p>
					<p>
						Carefully Fill Information Which Is Related To Disease
						Or Bank Account Address And Others
					</p>
					<p>
						To Recognize You And Verify Your Problem Before
						Approving Your Fund Request Please Attach These Five
						Documents Mentioned Below
					</p>
					<p>The First One Is Your National ID</p>
					<p>Then Your Clear Passport Size Photo</p>
					<p>Third One Is Patient's Prescription</p>
					<p>Include Incharge Doctor's Contact Details</p>
					<p>
						An Application Which Is Signed By Hospital Authority
						Regarding Patient's Problem.
					</p>
					<p>
						We Will reach Out To Hospital Authority And The Incharge
						Doctor As Well. If All Goes Right, Your Request Will Be
						Approved In A Few Days
					</p>
					<p>
						Go To Request Page{" "}
						<Link
							to={"/request"}
							className="home-guideline-text-link"
						>
							Request
						</Link>
					</p>
				</div>
			</div>
			<Footer />
		</>
	);
};

export default HomeScreen;
