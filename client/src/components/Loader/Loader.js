import "./Loader.css";
import React from "react";
import styled from "styled-components";

const LoaderContainer = styled.div`
	width: 90vw;
	height: ${(props) => props.height}vh;
	display: flex;
	justify-content: center;
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
