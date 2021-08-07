import React, { useEffect } from "react";
import "./DatePicker.css";

const DatePicker = () => {
	useEffect(() => {
		const date_picker_element = document.querySelector(".date-picker");
		const selected_date_element = document.querySelector(
			".date-picker .selected-date"
		);
		const dates_element = document.querySelector(".date-picker .dates");
		const mth_element = document.querySelector(
			".date-picker .dates .month .mth"
		);
		const next_mth_element = document.querySelector(
			".date-picker .dates .month .next-mth"
		);
		const prev_mth_element = document.querySelector(
			".date-picker .dates .month .prev-mth"
		);
		const days_element = document.querySelector(
			".date-picker .dates .days"
		);

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

		let date = new Date();
		let day = date.getDate();
		let month = date.getMonth();
		let year = date.getFullYear();

		let selectedDate = date;
		let selectedDay = day;
		let selectedMonth = month;
		let selectedYear = year;

		mth_element.textContent = months[month] + " " + year;

		let currDay = day < 10 ? "0" + day : day;
		selected_date_element.textContent =
			months[month] + " " + currDay + ", " + year;
		selected_date_element.dataset.value = selectedDate;

		populateDates();

		date_picker_element.addEventListener("click", toggleDatePicker);
		next_mth_element.addEventListener("click", goToNextMonth);
		prev_mth_element.addEventListener("click", goToPrevMonth);

		function toggleDatePicker(e) {
			if (!checkEventPathForClass(e.path, "dates")) {
				dates_element.classList.toggle("active");
			}
		}

		function goToNextMonth(e) {
			month++;
			if (month > 11) {
				month = 0;
				year++;
			}
			mth_element.textContent = months[month] + " " + year;
			populateDates();
		}

		function goToPrevMonth(e) {
			month--;
			if (month < 0) {
				month = 11;
				year--;
			}
			mth_element.textContent = months[month] + " " + year;
			populateDates();
		}

		function populateDates(e) {
			days_element.innerHTML = "";
			let amount_days = 31;

			if (month === 1) {
				if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
					amount_days = 29;
				} else {
					amount_days = 28;
				}
			} else if (
				month === 3 ||
				month === 5 ||
				month === 8 ||
				month === 10
			) {
				amount_days = 30;
			}

			for (let i = 0; i < amount_days; i++) {
				const day_element = document.createElement("div");
				day_element.classList.add("day");
				let eachCurrentDay = i + 1;
				day_element.textContent =
					i < 9 ? "0" + eachCurrentDay : eachCurrentDay;

				if (
					selectedDay === i + 1 &&
					selectedYear === year &&
					selectedMonth === month
				) {
					day_element.classList.add("selected");
				}

				day_element.addEventListener("click", function () {
					selectedDate = new Date(
						year + "-" + (month + 1) + "-" + (i + 1)
					);
					selectedDay = i + 1;
					selectedMonth = month;
					selectedYear = year;
					let currSelectedDay =
						selectedDay < 10 ? "0" + selectedDay : selectedDay;

					selected_date_element.textContent =
						months[selectedMonth] +
						" " +
						currSelectedDay +
						", " +
						selectedYear;
					selected_date_element.dataset.value = selectedDate;

					populateDates();
				});

				days_element.appendChild(day_element);
			}
		}

		function checkEventPathForClass(path, selector) {
			for (let i = 0; i < path.length; i++) {
				if (path[i].classList && path[i].classList.contains(selector)) {
					return true;
				}
			}

			return false;
		}
	});

	return (
		<div className="date-picker">
			<div className="selected-date"></div>

			<div className="dates">
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
