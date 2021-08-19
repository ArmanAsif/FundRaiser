import "./Loader.css";
import React from "react";
import styled from "styled-components";

const LoaderContainer = styled.div`
	width: 95vw;
	height: ${(props) => props.height}vh;
	display: flex;
	justify-content: center;
	margin: 0 auto;
`;

const Loader = ({ height }) => {
	return (
		<LoaderContainer height={height}>
			<div className="loader">
				<div></div>
				<div></div>
			</div>
		</LoaderContainer>
	);
};

export default Loader;
