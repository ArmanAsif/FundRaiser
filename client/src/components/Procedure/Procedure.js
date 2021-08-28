import "./Procedure.css";
import React, { useEffect } from "react";
import StepFiveSvg from "../SVG/StepFiveSvg";
import StepTwoSvg from "../SVG/StepTwoSvg";
import StepOneSvg from "../SVG/StepOneSvg";
import StepFourSvg from "../SVG/StepFourSvg";
import StepThreeSvg from "../SVG/StepThreeSvg";

const Procedure = () => {
	useEffect(() => {
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
							<div className="step-inner">01</div>
						</li>
						<li className="step step02">
							<div className="step-inner">02</div>
						</li>
						<li className="step step03">
							<div className="step-inner">03</div>
						</li>
						<li className="step step04">
							<div className="step-inner">04</div>
						</li>
						<li className="step step05">
							<div className="step-inner">05</div>
						</li>
					</ul>

					<div id="line">
						<div id="line-progress"></div>
					</div>
				</div>

				<div id="progress-content-section">
					<div className="section-content discovery active">
						<StepOneSvg />
						<p>
							Register Yourself With Proper Information And Logged
							Into Your Account For Applying Fund Request
						</p>
					</div>

					<div className="section-content strategy">
						<StepTwoSvg />
						<p>
							Give Authentic Information About Patient's Disease
							Name, Bank Account Id, Approximate Last Date And
							Others
						</p>
					</div>

					<div className="section-content creative">
						<StepThreeSvg />
						<p>
							Upload NID, Passport Photo, Prescription, Incharge
							Doctor Contact Details And An Application Signed By
							Hospital Authority
						</p>
					</div>

					<div className="section-content production">
						<StepFourSvg />
						<p>
							Based On Your Uploaded Five Document, We Will Reach
							Out To Hospital Authority And Doctor As Well To
							Verify Your Request
						</p>
					</div>

					<div className="section-content analysis">
						<StepFiveSvg />
						<p>
							Some Time Is Required For The Verification Process.
							Please Be Patient If All Goes Right Then You Are
							Good To Go
						</p>
					</div>
				</div>
			</div>
		</>
	);
};

export default Procedure;
