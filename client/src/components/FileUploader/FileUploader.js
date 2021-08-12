import "./FileUploader.css";
import React, { useEffect } from "react";

const FileUploader = () => {
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
					const fileNameList = Array.prototype.map.call(
						hiddenInput.files,
						function (file) {
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
		<div className="file-upload">
			<input
				className="file-upload-input"
				type="file"
				name="fileUploader"
				id="fileUploader"
				accept=".jpg, .jpeg, .png"
				multiple
			/>

			<button className="file-upload-button" type="button">
				Upload
			</button>
			<span className="file-upload-label"></span>
		</div>
	);
};

export default FileUploader;
