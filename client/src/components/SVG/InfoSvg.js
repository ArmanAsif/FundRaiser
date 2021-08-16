import React from "react";

const InfoSvg = ({ props }) => {
	return (
		<div>
			<svg
				viewBox="0 0 100 80"
				xmlns="http://www.w3.org/2000/svg"
				width={50}
				height={50}
				style={{
					width: "100%",
					height: "100%",
					backgroundSize: "initial",
					backgroundRepeatY: "initial",
					backgroundRepeatX: "initial",
					backgroundPositionY: "initial",
					backgroundPositionX: "initial",
					backgroundOrigin: "initial",
					backgroundColor: "initial",
					backgroundClip: "initial",
					backgroundAttachment: "initial",
					animationPlayState: "paused",
				}}
				{...props}
			>
				<g
					className="prefix__ldl-scale"
					style={{
						transformOrigin: "50% 50%",
						animationPlayState: "paused",
					}}
					transform="scale(.8)"
					strokeMiterlimit={10}
					strokeWidth={3.5}
					stroke="#fff"
					fill="#0080f9"
				>
					{/* <circle
						r={6.375}
						cy={17.438}
						cx={50}
						style={{
							animationPlayState: "paused",
						}}
					/>
					<circle
						r={9.375}
						cy={79.563}
						cx={50}
						style={{
							animationPlayState: "paused",
						}}
					/> */}
					<path
						d="M81.657 73.019c.002-.117.004-.234-.002-.35a7.345 7.345 0 00-.107-.991c-.018-.104-.045-.205-.068-.308a7.011 7.011 0 00-.167-.645 7.845 7.845 0 00-.356-.909c-.05-.107-.1-.212-.155-.316a7.453 7.453 0 00-.332-.558c-.055-.085-.106-.173-.164-.255a7.341 7.341 0 00-1.276-1.382c-.077-.065-.16-.121-.239-.183-.12-.093-.236-.191-.362-.276-.952-.643-1.882-1.323-2.661-2.165a30.613 30.613 0 01-1.158-1.34l-.085-.11a30.718 30.718 0 01-1.009-1.328c-.117-.163-.226-.332-.339-.497a29.199 29.199 0 01-.666-1.007c-.122-.195-.238-.394-.356-.593a28.645 28.645 0 01-.884-1.61c-.17-.336-.33-.677-.485-1.02-.095-.21-.191-.419-.281-.631a26.142 26.142 0 01-.443-1.141c-.068-.185-.142-.368-.206-.555a25.04 25.04 0 01-.528-1.743c-.173-.663-.326-1.312-.45-1.93s-.22-1.206-.278-1.749L67.086 35.35v-.001l-.049-.452c-.771-7.17-5.899-12.894-12.573-14.695-.115-.032-.228-.068-.344-.097-.285-.071-.576-.125-.866-.182-.259-.051-.517-.103-.781-.141-.237-.034-.476-.056-.716-.081-.203-.021-.401-.055-.606-.069-.099-.007-.195 0-.294-.005-.284-.014-.571-.014-.858-.014-.287 0-.574 0-.858.014-.099.005-.195-.002-.294.005-.205.013-.403.048-.606.069-.24.025-.479.047-.716.081-.263.039-.522.091-.781.141-.291.056-.581.111-.866.182-.116.029-.229.066-.344.097-6.674 1.801-11.802 7.526-12.573 14.695l-.049.452v.001L31.4 49.426c-.058.542-.154 1.13-.278 1.749a34.9 34.9 0 01-.45 1.93 25.04 25.04 0 01-.528 1.743c-.064.187-.138.37-.206.555-.141.383-.285.765-.443 1.141-.089.212-.186.421-.281.631a23.485 23.485 0 01-.814 1.65 27.72 27.72 0 01-.555.98c-.117.198-.234.397-.356.593-.213.341-.438.675-.666 1.007-.113.165-.222.334-.339.497-.323.451-.66.894-1.009 1.328l-.085.11c-.372.458-.76.903-1.158 1.34-.779.843-1.709 1.522-2.661 2.165-.126.085-.241.183-.362.276-.08.061-.162.118-.239.183a7.374 7.374 0 00-1.276 1.382c-.059.083-.109.17-.164.255-.118.181-.23.366-.332.558-.055.104-.104.21-.155.316a7.203 7.203 0 00-.239.573 6.344 6.344 0 00-.284.981c-.022.103-.05.203-.068.308a7.345 7.345 0 00-.107.991c-.006.116-.004.233-.002.35.001.085-.005.167-.002.253.154 3.381 3.058 5.99 6.443 5.99h50.433c3.384 0 6.288-2.609 6.443-5.99.003-.085-.004-.167-.003-.252z"
						style={{
							animationPlayState: "paused",
						}}
					/>
				</g>
			</svg>
			{/* <svg
				viewBox="0 0 90 65"
				xmlns="http://www.w3.org/2000/svg"
				width={40}
				height={40}
				style={{
					width: "100%",
					height: "100%",
					backgroundSize: "initial",
					backgroundRepeatY: "initial",
					backgroundRepeatX: "initial",
					backgroundPositionY: "initial",
					backgroundPositionX: "initial",
					backgroundOrigin: "initial",
					backgroundColor: "initial",
					backgroundClip: "initial",
					backgroundAttachment: "initial",
					animationPlayState: "paused",
				}}
				{...props}
			>
				<g
					className="prefix__ldl-scale"
					style={{
						transformOrigin: "50% 50%",
						animationPlayState: "paused",
					}}
				>
					<path
						fill="#0070da"
						d="M38.37 8.04C22.149 8.847 8.942 21.985 8.05 38.2a31.871 31.871 0 004.964 18.989l-3.91 11.554c-.452 1.334.82 2.607 2.154 2.155l11.554-3.912a31.871 31.871 0 0018.989 4.965c16.216-.892 29.354-14.099 30.159-30.32.94-18.96-14.63-34.532-33.59-33.59z"
						style={{
							animationPlayState: "paused",
						}}
					/>
					<g
						style={{
							animationPlayState: "paused",
						}}
						fill="#ffffff"
					>
						<path
							d="M43.548 57.2h-7.096a1.252 1.252 0 01-1.252-1.252V39.252c0-.691.56-1.252 1.252-1.252h7.096c.691 0 1.252.56 1.252 1.252v16.696c0 .691-.56 1.252-1.252 1.252zM40 22.4A5.8 5.8 0 0040 34a5.8 5.8 0 000-11.6z"
							style={{
								animationPlayState: "paused",
							}}
						/>
					</g>
				</g>
			</svg> */}
			{/* <svg
				viewBox="0 0 100 75"
				xmlns="http://www.w3.org/2000/svg"
				width={40}
				height={40}
				style={{
					width: "100%",
					height: "100%",
					backgroundSize: "initial",
					backgroundRepeatY: "initial",
					backgroundRepeatX: "initial",
					backgroundPositionY: "initial",
					backgroundPositionX: "initial",
					backgroundOrigin: "initial",
					backgroundImage: "initial",
					backgroundColor: "#fff",
					backgroundClip: "initial",
					backgroundAttachment: "initial",
					animationPlayState: "paused",
				}}
				{...props}
			>
				<g
					className="prefix__ldl-scale"
					style={{
						transformOrigin: "50% 50%",
						animationPlayState: "paused",
					}}
					transform="scale(.8)"
				>
					<circle
						strokeMiterlimit={10}
						strokeWidth={8}
						stroke="#007430"
						r={38}
						cy={50}
						cx={50}
						style={{
							animationPlayState: "paused",
						}}
						fill="#007430"
					/>
					<g
						style={{
							animationPlayState: "paused",
						}}
						fill="#fff"
					>
						<path
							d="M54.9 28.4h-8.7c-1 0-1.8.8-1.8 1.8v7.6c0 1 .8 1.8 1.8 1.8h8.7c1 0 1.8-.8 1.8-1.8v-7.6c0-1-.8-1.8-1.8-1.8zM56.7 63V45.4c0-1-.8-1.8-1.8-1.8H42.7c-1 0-1.8.8-1.8 1.8V50c0 1 .8 1.8 1.8 1.8h2.9V63h-2.9c-1 0-1.8.8-1.8 1.8v5.1c0 1 .8 1.8 1.8 1.8h16.8c1 0 1.8-.8 1.8-1.8v-5.1c0-1-.8-1.8-1.8-1.8h-2.8z"
							style={{
								animationPlayState: "paused",
							}}
						/>
					</g>
				</g>
			</svg> */}
			{/* <svg
				viewBox="0 0 100 75"
				xmlns="http://www.w3.org/2000/svg"
				width={40}
				height={40}
				style={{
					width: "100%",
					height: "100%",
					backgroundSize: "initial",
					backgroundRepeatY: "initial",
					backgroundRepeatX: "initial",
					backgroundPositionY: "initial",
					backgroundPositionX: "initial",
					backgroundOrigin: "initial",
					backgroundColor: "initial",
					backgroundClip: "initial",
					backgroundAttachment: "initial",
					animationPlayState: "paused",
				}}
				{...props}
			>
				<g
					className="prefix__ldl-scale"
					style={{
						transformOrigin: "50% 50%",
						animationPlayState: "paused",
					}}
					transform="scale(.8)"
				>
					<circle
						strokeMiterlimit={10}
						strokeWidth={8}
						stroke="#007f68"
						fill="#d2ffe5"
						r={38}
						cy={50}
						cx={50}
						style={{
							animationPlayState: "paused",
						}}
					/>
					<g
						style={{
							animationPlayState: "paused",
						}}
						fill="#007f68"
					>
						<path
							d="M54.9 28.4h-8.7c-1 0-1.8.8-1.8 1.8v7.6c0 1 .8 1.8 1.8 1.8h8.7c1 0 1.8-.8 1.8-1.8v-7.6c0-1-.8-1.8-1.8-1.8zM56.7 63V45.4c0-1-.8-1.8-1.8-1.8H42.7c-1 0-1.8.8-1.8 1.8V50c0 1 .8 1.8 1.8 1.8h2.9V63h-2.9c-1 0-1.8.8-1.8 1.8v5.1c0 1 .8 1.8 1.8 1.8h16.8c1 0 1.8-.8 1.8-1.8v-5.1c0-1-.8-1.8-1.8-1.8h-2.8z"
							style={{
								animationPlayState: "paused",
							}}
						/>
					</g>
				</g>
			</svg> */}
		</div>
	);
};

export default InfoSvg;
