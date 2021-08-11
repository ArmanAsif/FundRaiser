import axios from "axios";
import {
	USER_LOGIN_FAIL,
	USER_LOGIN_REQUEST,
	USER_LOGIN_SUCCESS,
	USER_SIGNUP_FAIL,
	USER_SIGNUP_REQUEST,
	USER_SIGNUP_SUCCESS,
} from "../constants/userConstants";

export const userSignupAction =
	(name, email, nid, password) => async (dispatch) => {
		try {
			dispatch({ type: USER_SIGNUP_REQUEST });

			const config = { headers: { "Content-Type": "application/json" } };

			const { data } = await axios.post(
				"/api/users/signup",
				{ name, email, nid, password },
				config
			);

			dispatch({ type: USER_SIGNUP_SUCCESS, payload: data });

			dispatch({ type: USER_LOGIN_SUCCESS, payload: data });

			localStorage.setItem("userInfo", JSON.stringify(data));
		} catch (error) {
			dispatch({
				type: USER_SIGNUP_FAIL,
				payload:
					error.response && error.response.data.message
						? error.response.data.message
						: error.message,
			});
		}
	};

export const userLoginAction = (email, password) => async (dispatch) => {
	try {
		dispatch({ type: USER_LOGIN_REQUEST });

		const config = { headers: { "Content-Type": "application/json" } };

		const { data } = await axios.post(
			"/api/users/login",
			{ email, password },
			config
		);

		dispatch({ type: USER_LOGIN_SUCCESS, payload: data });

		localStorage.setItem("userInfo", JSON.stringify(data));
	} catch (error) {
		dispatch({
			type: USER_LOGIN_FAIL,
			payload:
				error.response && error.response.data.message
					? error.response.data.message
					: error.message,
		});
	}
};
