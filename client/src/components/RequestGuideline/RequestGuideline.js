import "./RequestGuideline.css";
import React, { useEffect } from "react";

const RequestGuideline = () => {
	useEffect(() => {
		// const eachStep = document.querySelector(".step");
		const lineProgress = document.getElementById("line-progress");
		const stepOne = document.querySelector(".step01");
		const stepTwo = document.querySelector(".step02");
		const stepThree = document.querySelector(".step03");
		const stepFour = document.querySelector(".step04");
		const stepFive = document.querySelector(".step05");
		const discovery = document.querySelector(".discovery");
		const strategy = document.querySelector(".strategy");
		const creative = document.querySelector(".creative");
		const production = document.querySelector(".production");
		const analysis = document.querySelector(".analysis");

		function activateCurrentStep(width, text, indicator) {
			lineProgress.style = `width: ${width}%`;
			let prevSibling = text.previousElementSibling;
			let nextSibling = text.nextElementSibling;

			text.classList.add("active");

			while (prevSibling) {
				prevSibling.classList.remove("active");
				prevSibling = prevSibling.previousElementSibling;
			}
			while (nextSibling) {
				nextSibling.classList.remove("active");
				nextSibling = nextSibling.nextElementSibling;
			}

			let prevSibling2 = indicator.previousElementSibling;
			let nextSibling2 = indicator.nextElementSibling;

			indicator.classList.add("active");

			while (prevSibling2) {
				prevSibling2.classList.remove("active");
				prevSibling2 = prevSibling2.previousElementSibling;
			}
			while (nextSibling2) {
				nextSibling2.classList.remove("active");
				nextSibling2 = nextSibling2.nextElementSibling;
			}
		}

		stepOne.addEventListener("click", () => {
			activateCurrentStep(0, discovery, stepOne);
		});

		stepTwo.addEventListener("click", () => {
			activateCurrentStep(25, strategy, stepTwo);
		});

		stepThree.addEventListener("click", () => {
			activateCurrentStep(50, creative, stepThree);
		});

		stepFour.addEventListener("click", () => {
			activateCurrentStep(75, production, stepFour);
		});

		stepFive.addEventListener("click", () => {
			activateCurrentStep(100, analysis, stepFive);
		});
	});

	return (
		<>
			<div className="process-wrapper">
				<span>Fund Apply Procedure</span>

				<div id="progress-bar-container">
					<ul>
						<li className="step step01 active">
							<div className="step-inner">1</div>
						</li>
						<li className="step step02">
							<div className="step-inner">2</div>
						</li>
						<li className="step step03">
							<div className="step-inner">3</div>
						</li>
						<li className="step step04">
							<div className="step-inner">4</div>
						</li>
						<li className="step step05">
							<div className="step-inner">5</div>
						</li>
					</ul>

					<div id="line">
						<div id="line-progress"></div>
					</div>
				</div>

				<div id="progress-content-section">
					<div className="section-content discovery active">
						<h2>Register Yourself</h2>
						<p>
							No User Can Apply For Fund Without Signup Process.
							So Signup Yourself With Proper Information And Log
							With Your Account.
						</p>
					</div>

					<div className="section-content strategy">
						<h2>Give Information</h2>
						<p>
							Lorem ipsum dolor sit amet, consectetur adipiscing
							elit. Donec neque justo, consequat non fermentum ac,
							tempor eu turpis. Proin nulla eros, placerat non
							ipsum ut, dapibus ullamcorper ex. Nulla in dapibus
							lorem. Suspendisse vitae velit ac ante consequat
							placerat ut sed eros. Nullam porttitor mattis mi, id
							fringilla ex consequat eu. Praesent pulvinar
							tincidunt leo et condimentum. Maecenas volutpat
							turpis at felis egestas malesuada. Phasellus sem
							odio, venenatis at ex a, lacinia suscipit orci.
						</p>
					</div>

					<div className="section-content creative">
						<h2>Upload Documents</h2>
						<p>
							Lorem ipsum dolor sit amet, consectetur adipiscing
							elit. Donec neque justo, consequat non fermentum ac,
							tempor eu turpis. Proin nulla eros, placerat non
							ipsum ut, dapibus ullamcorper ex. Nulla in dapibus
							lorem. Suspendisse vitae velit ac ante consequat
							placerat ut sed eros. Nullam porttitor mattis mi, id
							fringilla ex consequat eu. Praesent pulvinar
							tincidunt leo et condimentum. Maecenas volutpat
							turpis at felis egestas malesuada. Phasellus sem
							odio, venenatis at ex a, lacinia suscipit orci.
						</p>
					</div>

					<div className="section-content production">
						<h2>Verification Process</h2>
						<p>
							Lorem ipsum dolor sit amet, consectetur adipiscing
							elit. Donec neque justo, consequat non fermentum ac,
							tempor eu turpis. Proin nulla eros, placerat non
							ipsum ut, dapibus ullamcorper ex. Nulla in dapibus
							lorem. Suspendisse vitae velit ac ante consequat
							placerat ut sed eros. Nullam porttitor mattis mi, id
							fringilla ex consequat eu. Praesent pulvinar
							tincidunt leo et condimentum. Maecenas volutpat
							turpis at felis egestas malesuada. Phasellus sem
							odio, venenatis at ex a, lacinia suscipit orci.
						</p>
					</div>

					<div className="section-content analysis">
						<h2>Your Desire Moment</h2>
						<p>
							Lorem ipsum dolor sit amet, consectetur adipiscing
							elit. Donec neque justo, consequat non fermentum ac,
							tempor eu turpis. Proin nulla eros, placerat non
							ipsum ut, dapibus ullamcorper ex. Nulla in dapibus
							lorem. Suspendisse vitae velit ac ante consequat
							placerat ut sed eros. Nullam porttitor mattis mi, id
							fringilla ex consequat eu. Praesent pulvinar
							tincidunt leo et condimentum. Maecenas volutpat
							turpis at felis egestas malesuada. Phasellus sem
							odio, venenatis at ex a, lacinia suscipit orci.
						</p>
					</div>
				</div>
			</div>
		</>
	);
};

export default RequestGuideline;
