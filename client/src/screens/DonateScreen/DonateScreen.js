import "./DonateScreen.css";
import { Link } from "react-router-dom";
import Card from "../../components/Card/Card";
import React, { useEffect, useState } from "react";
import "../../components/Paginate/Paginate.css";
import Footer from "../../components/Footer/Footer";
import Loader from "../../components/Loader/Loader";
import { useSelector, useDispatch } from "react-redux";
import Header from "../../components/Header/Header";
import DonateSvg from "../../components/SVG/DonateSvg";
import { getUserRequestList } from "../../actions/requestActions";

let data;
let pageBtn;
let end = 0;
let start = 0;
let prevPage = 0;
let totalCard = 1;
let currentPage = 1;

const DonateScreen = ({ history }) => {
	const [currentItems, setCurrentItems] = useState([]);
	const dispatch = useDispatch();

	const userLogin = useSelector((state) => state.userLogin);
	const { userInfo } = userLogin;

	const userRequestList = useSelector((state) => state.userRequestList);
	const { loading, requests } = userRequestList;

	useEffect(() => {
		if (!userInfo) {
			history.push("./login");
		} else {
			dispatch(getUserRequestList());
		}
	}, [userInfo, history, dispatch]);

	let Requests;
	let isAdmin = userInfo && userInfo.isAdmin ? true : false;

	if (userInfo && userInfo.isAdmin) {
		Requests =
			requests &&
			requests.filter(
				(request) => !request.isApproved && !request.isDiscarded
			);
	} else {
		Requests =
			requests &&
			requests.filter(
				(request) => request.isApproved && !request.isDiscarded
			);
	}

	let pageCount = Requests && Math.ceil(Requests.length / totalCard);

	useEffect(() => {
		const pagination_element = document.getElementById("pagination");
		const left_arrow = document.querySelector(".left-arrow");
		const right_arrow = document.querySelector(".right-arrow");

		function prevButton() {
			left_arrow.addEventListener("click", function () {
				prevPage++;

				if (currentPage > 1 && prevPage % 3 === 0) {
					currentPage--;
					displayList();
					setupPagination();
				}
			});
		}

		function nextButton() {
			right_arrow.addEventListener("click", function () {
				if (currentPage < pageCount) {
					currentPage++;
					displayList();
					setupPagination();
				}
			});
		}

		function displayList() {
			start = (currentPage - 1) * totalCard;
			end = start + totalCard;
			data = Requests && Requests.slice(start, end);
			setCurrentItems(data);
		}

		function setupPagination() {
			pagination_element.innerHTML = "";

			if (pageCount <= 6) {
				for (let i = 1; i < pageCount + 1; i++) {
					pageBtn = PaginationButton(i);
					pagination_element.appendChild(pageBtn);
				}
			} else {
				pageBtn = PaginationButton(1);
				pagination_element.appendChild(pageBtn);

				if (currentPage > 3) {
					let spread = document.createElement("div");
					spread.innerText = ".";
					spread.style = "font-size: 1.7rem";
					pagination_element.appendChild(spread);
				}

				if (currentPage === pageCount) {
					pageBtn = PaginationButton(currentPage - 2);
					pagination_element.appendChild(pageBtn);
				}

				if (currentPage > 2) {
					pageBtn = PaginationButton(currentPage - 1);
					pagination_element.appendChild(pageBtn);
				}

				if (currentPage !== 1 && currentPage !== pageCount) {
					pageBtn = PaginationButton(currentPage);
					pagination_element.appendChild(pageBtn);
				}

				if (currentPage < pageCount - 1) {
					pageBtn = PaginationButton(currentPage + 1);
					pagination_element.appendChild(pageBtn);
				}

				if (currentPage === 1) {
					pageBtn = PaginationButton(currentPage + 2);
					pagination_element.appendChild(pageBtn);
				}

				if (currentPage < pageCount - 2) {
					let spread = document.createElement("div");
					spread.innerText = ".";
					spread.style = "font-size: 1.7rem";
					pagination_element.appendChild(spread);
				}

				pageBtn = PaginationButton(pageCount);
				pagination_element.appendChild(pageBtn);
			}
		}

		function PaginationButton(page) {
			let button = document.createElement("button");
			let buttonText = page < 10 ? "0" + page : page;
			button.innerText = buttonText;

			if (page === currentPage) {
				button.style.color = "#007a29";
			}

			button.addEventListener("click", function () {
				currentPage = page;
				displayList();
				setupPagination();
			});
			return button;
		}

		displayList();
		setupPagination();
		prevButton();
		nextButton();
	}, [loading]);

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

			{loading && <Loader height={30} />}

			<div className="donate-donate-list-container">
				{currentItems &&
					currentItems.map((request) => {
						return (
							<Card
								key={request._id}
								requestID={request._id}
								donatedList={request.donatedList}
								diseaseName={request.diseaseName}
								lastDate={request.lastDate}
								fundAmount={request.fundAmount}
								isAdmin={isAdmin}
							/>
						);
					})}
			</div>

			<div className="pagination-container">
				<div className="left-arrow">&#9665;</div>
				<div className="pagination" id="pagination"></div>
				<div className="right-arrow">&#9655;</div>
			</div>

			<Footer />
		</>
	);
};

export default DonateScreen;
