import axios from "axios";
import "./RequestScreen.css";
import React, { useEffect } from "react";
import "../../components/DatePicker/DatePicker.css";
import Footer from "../../components/Footer/Footer";
import { useDispatch, useSelector } from "react-redux";
import Header from "../../components/Header/Header";
import "../../components/FileUploader/FileUploader.css";
import RequestSvg from "../../components/SVG/RequestSvg";
import { userRequestCreateAction } from "../../actions/requestActions";

const diseaseOption = [
	"Blood Cancer",
	"Lung Infections",
	"Pulmonary Disease",
	"Heart Stroke",
	"Brain Tumor",
	"Tuberculosis",
	"Accidental Injury",
	"Diabetes",
];

var loading;
var lastDate;
var fundAmount;
var bankAccount;
var phoneNumber;
var documents = [];
var uploadImages = [];
var diseaseName = "Blood Cancer";

function setLastDate(val) {
	lastDate = val;
}

const RequestScreen = ({ history }) => {
	const dispatch = useDispatch();

	const userLogin = useSelector((state) => state.userLogin);
	const { userInfo } = userLogin;

	useEffect(() => {
		if (!userInfo) {
			history.push("/login");
		}
	}, [userInfo, history]);

	const submitHandler = (e) => {
		e.preventDefault();

		if (userInfo && !loading) {
			dispatch(
				userRequestCreateAction(
					phoneNumber,
					diseaseName,
					lastDate,
					fundAmount,
					bankAccount,
					documents
				)
			);

			document.getElementById("inputBankAccount").value = "";
			document.getElementById("inputPhoneNumber").value = "";
			document.querySelector(".current-date").textContent =
				"Submission Date";
			document.querySelector(".file-upload-label").textContent =
				"No Files Chosen";
			document.getElementById("inputFundAmount").value = "Enter Amount";
			document.getElementById("selectDiseaseName").value = "Blood Cancer";
		}
	};

	const setPhoneNumber = () => {
		phoneNumber = document.getElementById("inputPhoneNumber").value;
	};

	const selectChangeHandler = () => {
		let select = document.getElementById("selectDiseaseName");
		diseaseName = select.options[select.selectedIndex].value;
	};

	const setFundAmount = () => {
		fundAmount = document.getElementById("inputFundAmount").value;
	};

	const setBankAccount = () => {
		bankAccount = document.getElementById("inputBankAccount").value;
	};

	const uploadFileHandler = async (images) => {
		loading = true;
		documents = [];
		const label = document.querySelector(".file-upload-label");

		if (loading) {
			label.textContent = "Uploading Images...";
		}

		const uploaders = images.map((image) => {
			const formData = new FormData();
			formData.append("file", image);
			formData.append("tags", `dectw0gjt, medium, gist`);
			formData.append("upload_preset", "FundRaiser");
			formData.append("api_key", "863154323282319");
			formData.append("timestamp", (Date.now() / 1000) | 0);

			return axios
				.post(
					"https://api.cloudinary.com/v1_1/dectw0gjt/image/upload",
					formData
				)
				.then((response) => {
					const data = response.data;
					const secureUrl = data.secure_url;
					documents.push(secureUrl);
				});
		});

		axios.all(uploaders).then(() => {
			loading = false;

			if (!loading) {
				label.textContent = "Uploading Complete";
			}
		});
	};

	useEffect(() => {
		const date_picker_element = document.querySelector(
			".date-picker-container"
		);
		const current_date_element = document.querySelector(".current-date");
		const choose_date_layout_element = document.querySelector(
			".choose-date-layout"
		);
		const mth_element = document.querySelector(".mth");
		const next_mth_element = document.querySelector(".next-mth");
		const prev_mth_element = document.querySelector(".prev-mth");
		const days_element = document.querySelector(".days");

		const months = [
			"January",
			"February",
			"March",
			"April",
			"May",
			"June",
			"July",
			"August",
			"September",
			"October",
			"November",
			"December",
		];

		let currentDate = new Date();
		let currentDay = currentDate.getDate();
		let currentMonth = currentDate.getMonth();
		let currentYear = currentDate.getFullYear();

		let selectedDate = currentDate;
		let selectedDay = currentDay;
		let selectedMonth = currentMonth;
		let selectedYear = currentYear;

		mth_element.textContent = months[currentMonth] + " " + currentYear;
		let newCurrentDay = currentDay < 10 ? "0" + currentDay : currentDay;
		current_date_element.textContent =
			months[currentMonth] + " " + newCurrentDay + ", " + currentYear;
		current_date_element.dataset.value = selectedDate;
		lastDate = current_date_element.textContent;

		populateDates();
		date_picker_element.addEventListener("click", toggleDatePicker);
		next_mth_element.addEventListener("click", goToNextMonth);
		prev_mth_element.addEventListener("click", goToPrevMonth);

		function checkEventPathForClass(path, selector) {
			for (let i = 0; i < path.length; i++) {
				if (path[i].classList && path[i].classList.contains(selector)) {
					return true;
				}
			}
			return false;
		}

		function toggleDatePicker(e) {
			if (!checkEventPathForClass(e.path, "choose-date-layout")) {
				choose_date_layout_element.classList.toggle("active");
			}
		}

		function goToNextMonth(e) {
			currentMonth++;
			if (currentMonth > 11) {
				currentMonth = 0;
				currentYear++;
			}
			mth_element.textContent = months[currentMonth] + " " + currentYear;
			populateDates();
		}

		function goToPrevMonth(e) {
			currentMonth--;
			if (currentMonth < 0) {
				currentMonth = 11;
				currentYear--;
			}
			mth_element.textContent = months[currentMonth] + " " + currentYear;
			populateDates();
		}

		function checkLeapYear() {
			let days = 31;
			let M = currentMonth;
			let Y = currentYear;

			if (M === 1) {
				days =
					(Y % 4 === 0 && Y % 100 !== 0) || Y % 400 === 0 ? 29 : 28;
			} else if (M === 3 || M === 5 || M === 8 || M === 10) {
				days = 30;
			}
			return days;
		}

		function populateDates(e) {
			days_element.innerHTML = "";
			let totalDays = checkLeapYear();

			for (let index = 0; index < totalDays; index++) {
				const single_day_element = document.createElement("div");
				single_day_element.classList.add("day");

				let currentIndex = index + 1;
				single_day_element.textContent =
					index < 9 ? "0" + currentIndex : currentIndex;

				if (
					selectedDay === index + 1 &&
					selectedYear === currentYear &&
					selectedMonth === currentMonth
				) {
					single_day_element.classList.add("selected");
				}

				single_day_element.addEventListener("click", () =>
					setLastDate(userSelectedDate(index))
				);
				days_element.appendChild(single_day_element);
			}
		}

		function userSelectedDate(index) {
			selectedDate = new Date(
				currentYear + "-" + (currentMonth + 1) + "-" + (index + 1)
			);

			selectedDay = index + 1;
			selectedMonth = currentMonth;
			selectedYear = currentYear;
			let currSelectedDay =
				selectedDay < 10 ? "0" + selectedDay : selectedDay;

			current_date_element.textContent =
				months[selectedMonth] +
				" " +
				currSelectedDay +
				", " +
				selectedYear;

			current_date_element.dataset.value = selectedDate;
			populateDates();
			return current_date_element.textContent;
		}
	});

	useEffect(() => {
		Array.prototype.forEach.call(
			document.querySelectorAll(".file-upload-button"),
			function (button) {
				const hiddenInput =
					button.parentElement.querySelector(".file-upload-input");
				const label =
					button.parentElement.querySelector(".file-upload-label");
				const defaultLabelText = "No Files Chosen";

				label.textContent = defaultLabelText;
				label.title = defaultLabelText;

				button.addEventListener("click", function () {
					hiddenInput.click();
				});

				hiddenInput.addEventListener("change", function () {
					uploadImages = [];
					const fileNameList = Array.prototype.map.call(
						hiddenInput.files,
						function (file) {
							uploadImages.push(file);
							return file.name;
						}
					);

					label.textContent =
						fileNameList.join(", ") || defaultLabelText;
					label.title = label.textContent;
				});
			}
		);
	});

	return (
		<>
			<Header />

			<div className="request-container">
				<div className="request-form-container">
					<h3>Form Fillup</h3>
					<form className="request-form" onSubmit={submitHandler}>
						<label>Enter Phone Number:</label>
						<input
							type="text"
							placeholder="Enter Phone Number"
							id="inputPhoneNumber"
							onChange={setPhoneNumber}
						/>

						<label>Choose Your Problem:</label>
						<div className="request-form-select">
							<select
								options={diseaseOption}
								id="selectDiseaseName"
								onChange={selectChangeHandler}
							>
								{diseaseOption.map((data, index) => {
									return (
										<option
											key={index}
											value={data}
											label={data}
										/>
									);
								})}
							</select>
							<span className="request-select-arrow"></span>
						</div>

						<label>Submission Date:</label>
						<div className="date-picker-container">
							<div className="current-date"></div>

							<div className="choose-date-layout">
								<div className="month">
									<div className="arrows prev-mth">&lt;</div>
									<div className="mth"></div>
									<div className="arrows next-mth">&gt;</div>
								</div>

								<div className="days"></div>
							</div>
						</div>

						<label>Enter Amount:</label>
						<input
							type="number"
							placeholder="Enter Amount"
							id="inputFundAmount"
							onChange={setFundAmount}
						/>

						<label>Bank Account:</label>
						<input
							type="text"
							placeholder="Bank Account"
							id="inputBankAccount"
							onChange={setBankAccount}
						/>

						<div className="file-upload-container">
							<input
								className="file-upload-input"
								type="file"
								name="fileUploader"
								id="fileUploader"
								accept=".png, .jpg, .jpeg"
								multiple
							/>
							<button
								className="file-upload-button"
								type="button"
							>
								Upload
							</button>
							<span className="file-upload-label"></span>

							<button
								className="file-upload-submit-button"
								type="button"
								onClick={() => uploadFileHandler(uploadImages)}
							>
								+
							</button>
						</div>

						<button type="submit" className="request-submit-button">
							send
						</button>
					</form>
				</div>

				<div className="request-svg">
					<RequestSvg />
				</div>
			</div>

			<Footer />
		</>
	);
};

export default RequestScreen;
