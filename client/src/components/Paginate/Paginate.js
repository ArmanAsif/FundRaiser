import "./Paginate.css";
import React, { useEffect } from "react";

const Paginate = () => {
	useEffect(() => {
		let pageBtn;
		let rows = 5;
		let currentPage = 1;

		const list_element = document.getElementById("list");
		const pagination_element = document.getElementById("pagination");
		const left_arrow = document.querySelector(".left-arrow");
		const right_arrow = document.querySelector(".right-arrow");

		function prevButton() {
			left_arrow.addEventListener("click", function () {
				if (currentPage > 1) {
					currentPage--;
					displayList();
					setupPagination();
				}
			});
		}

		function nextButton() {
			right_arrow.addEventListener("click", function () {
				let pageCount = Math.ceil(list_items.length / rows);

				if (currentPage < pageCount) {
					currentPage++;
					displayList();
					setupPagination();
				}
			});
		}

		function displayList() {
			list_element.innerHTML = "";

			let start = (currentPage - 1) * rows;
			let end = start + rows;
			let currentItems = list_items.slice(start, end);

			for (let i = 0; i < currentItems.length; i++) {
				let item = currentItems[i];
				let item_element = document.createElement("div");

				item_element.classList.add("item");
				item_element.innerText = item;
				list_element.appendChild(item_element);
			}
		}

		function setupPagination() {
			pagination_element.innerHTML = "";
			let pageCount = Math.ceil(list_items.length / rows);

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
		prevButton();
		setupPagination();
		nextButton();
	});

	return (
		<div className="pagination-container">
			<div className="left-arrow">&#9665;</div>
			<div className="pagination" id="pagination"></div>
			<div className="right-arrow">&#9655;</div>
		</div>
	);
};

export default Paginate;
