import "./DatePicker.css";
import React, { useEffect } from "react";

const DatePicker = () => {
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
					userSelectedDate(index)
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

	return (
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
	);
};

export default DatePicker;
