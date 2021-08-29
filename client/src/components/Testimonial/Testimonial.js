import "./Testimonial.css";
import React, { useEffect } from "react";

const Testimonial = () => {
	useEffect(() => {
		let indexCurrent = 0;
		const imageCircle = document.querySelectorAll(
			".testimonial-image-circle .circle-image"
		);
		const imageCenter = document.querySelectorAll(
			".testimonial-image-center .circle-image"
		);
		const textContent = document.querySelectorAll(".testimonial-text");
		const prevArrow = document.querySelector(".testimonial-prev-arrow");
		const nextArrow = document.querySelector(".testimonial-next-arrow");

		imageCircle.forEach((image) => {
			image.addEventListener("click", () => {
				const index = +image.getAttribute("data-slide-index");

				let prevSibling = imageCenter[index].previousElementSibling;
				let nextSibling = imageCenter[index].nextElementSibling;

				imageCenter[index].classList.add("active");

				while (prevSibling) {
					prevSibling.classList.remove("active");
					prevSibling = prevSibling.previousElementSibling;
				}
				while (nextSibling) {
					nextSibling.classList.remove("active");
					nextSibling = nextSibling.nextElementSibling;
				}

				let prvSibling = textContent[index].previousElementSibling;
				let nxtSibling = textContent[index].nextElementSibling;

				textContent[index].classList.add("active");

				while (prvSibling) {
					prvSibling.classList.remove("active");
					prvSibling = prvSibling.previousElementSibling;
				}
				while (nxtSibling) {
					nxtSibling.classList.remove("active");
					nxtSibling = nxtSibling.nextElementSibling;
				}
			});
		});

		nextArrow.onclick = function () {
			for (let i = 0; i < imageCenter.length; i++) {
				if (imageCenter[i].classList.contains("active")) {
					indexCurrent = i;
				}
			}

			imageCenter[indexCurrent].classList.remove("active");
			imageCenter[(indexCurrent + 1) % 6].classList.add("active");

			textContent[indexCurrent].classList.remove("active");
			textContent[(indexCurrent + 1) % 6].classList.add("active");
		};

		prevArrow.onclick = function () {
			for (let i = 0; i < imageCenter.length; i++) {
				if (imageCenter[i].classList.contains("active")) {
					indexCurrent = i;
				}
			}

			let index = indexCurrent === 0 ? 5 : indexCurrent - 1;

			imageCenter[indexCurrent].classList.remove("active");
			imageCenter[index].classList.add("active");

			textContent[indexCurrent].classList.remove("active");
			textContent[index].classList.add("active");
		};

		let timerDelay = setInterval(() => {
			nextArrow.onclick();
		}, 7500);
		return () => clearInterval(timerDelay);
	});

	return (
		<div className="testimonial-slider-container">
			<div className="testimonial-image-container">
				<div className="testimonial-image-circle">
					<a
						href={"#0"}
						className="circle-image active"
						data-slide-index="0"
					>
						<img src="/images/test-01.jpg" alt="" />
					</a>
					<a
						href={"#1"}
						className="circle-image"
						data-slide-index="1"
					>
						<img src="/images/test-02.jpg" alt="" />
					</a>
					<a
						href={"#2"}
						className="circle-image"
						data-slide-index="2"
					>
						<img src="/images/test-03.jpg" alt="" />
					</a>
					<a
						href={"#3"}
						className="circle-image"
						data-slide-index="3"
					>
						<img src="/images/test-04.jpg" alt="" />
					</a>
					<a
						href={"#4"}
						className="circle-image"
						data-slide-index="4"
					>
						<img src="/images/test-05.jpg" alt="" />
					</a>
					<a
						href={"#5"}
						className="circle-image"
						data-slide-index="5"
					>
						<img src="/images/test-06.jpg" alt="" />
					</a>
				</div>

				<div className="testimonial-image-center">
					<a
						href={"#0"}
						className="circle-image active"
						data-slide-index="0"
					>
						<img src="/images/test-01.jpg" alt="" />
					</a>
					<a
						href={"#1"}
						className="circle-image"
						data-slide-index="1"
					>
						<img src="/images/test-02.jpg" alt="" />
					</a>
					<a
						href={"#2"}
						className="circle-image "
						data-slide-index="2"
					>
						<img src="/images/test-03.jpg" alt="" />
					</a>
					<a
						href={"#3"}
						className="circle-image"
						data-slide-index="3"
					>
						<img src="/images/test-04.jpg" alt="" />
					</a>
					<a
						href={"#4"}
						className="circle-image"
						data-slide-index="4"
					>
						<img src="/images/test-05.jpg" alt="" />
					</a>
					<a
						href={"#5"}
						className="circle-image"
						data-slide-index="5"
					>
						<img src="/images/test-06.jpg" alt="" />
					</a>
				</div>
			</div>

			<div className="testimonial-text-container">
				<p>What’s our clients are saying....</p>

				<div className="testimonial-text active" data-slide-index="0">
					<div className="testimonial-text-content">
						<p>
							Lorem ipsum dolor sit amet consectetur adipisicing
							elit. Nobis optio consectetur officiis obcaecati
							quis, minus neque repellat vero officia perferendis
							libero corrupti pariatur distinctio, sit eum
							eligendi maiores! Sunt eligendi, beatae nihil odio
							nesciunt commodi quos amet quo error voluptatem
							possimus labore nam debitis praesentium aliquam
							placeat voluptate, cupiditate quis?
						</p>
					</div>

					<div className="testimonial-text-name">
						<p>Maria</p>
					</div>
				</div>

				<div className="testimonial-text" data-slide-index="1">
					<div className="testimonial-text-content">
						<p>
							Lorem ipsum dolor sit amet consectetur adipisicing
							elit. Nobis optio consectetur officiis obcaecati
							quis, minus neque repellat vero officia perferendis
							libero corrupti pariatur distinctio, sit eum
							eligendi maiores! Sunt eligendi, beatae nihil odio
							nesciunt commodi quos amet quo error voluptatem
							possimus labore nam debitis praesentium aliquam
							placeat voluptate, cupiditate quis?
						</p>
					</div>

					<div className="testimonial-text-name">
						<p>Samiha</p>
					</div>
				</div>

				<div className="testimonial-text" data-slide-index="2">
					<div className="testimonial-text-content">
						<p>
							Lorem ipsum dolor sit amet consectetur adipisicing
							elit. Nobis optio consectetur officiis obcaecati
							quis, minus neque repellat vero officia perferendis
							libero corrupti pariatur distinctio, sit eum
							eligendi maiores! Sunt eligendi, beatae nihil odio
							nesciunt commodi quos amet quo error voluptatem
							possimus labore nam debitis praesentium aliquam
							placeat voluptate, cupiditate quis?
						</p>
					</div>

					<div className="testimonial-text-name">
						<p>John Doe</p>
					</div>
				</div>

				<div className="testimonial-text" data-slide-index="3">
					<div className="testimonial-text-content">
						<p>
							Lorem ipsum dolor sit amet consectetur adipisicing
							elit. Nobis optio consectetur officiis obcaecati
							quis, minus neque repellat vero officia perferendis
							libero corrupti pariatur distinctio, sit eum
							eligendi maiores! Sunt eligendi, beatae nihil odio
							nesciunt commodi quos amet quo error voluptatem
							possimus labore nam debitis praesentium aliquam
							placeat voluptate, cupiditate quis?
						</p>
					</div>

					<div className="testimonial-text-name">
						<p>Jashon</p>
					</div>
				</div>

				<div className="testimonial-text" data-slide-index="4">
					<div className="testimonial-text-content">
						<p>
							Lorem ipsum dolor sit amet consectetur adipisicing
							elit. Nobis optio consectetur officiis obcaecati
							quis, minus neque repellat vero officia perferendis
							libero corrupti pariatur distinctio, sit eum
							eligendi maiores! Sunt eligendi, beatae nihil odio
							nesciunt commodi quos amet quo error voluptatem
							possimus labore nam debitis praesentium aliquam
							placeat voluptate, cupiditate quis?
						</p>
					</div>

					<div className="testimonial-text-name">
						<p>Boby</p>
					</div>
				</div>

				<div className="testimonial-text" data-slide-index="5">
					<div className="testimonial-text-content">
						<p>
							Lorem ipsum dolor sit amet consectetur adipisicing
							elit. Nobis optio consectetur officiis obcaecati
							quis, minus neque repellat vero officia perferendis
							libero corrupti pariatur distinctio, sit eum
							eligendi maiores! Sunt eligendi, beatae nihil odio
							nesciunt commodi quos amet quo error voluptatem
							possimus labore nam debitis praesentium aliquam
							placeat voluptate, cupiditate quis?
						</p>
					</div>

					<div className="testimonial-text-name">
						<p>Smith</p>
					</div>
				</div>

				<div className="testimonial-text-arrow">
					<div className="testimonial-prev-arrow">&#9665;</div>
					<div className="testimonial-next-arrow">&#9655;</div>
				</div>
			</div>
		</div>
	);
};

export default Testimonial;
