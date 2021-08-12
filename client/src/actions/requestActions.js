import axios from "axios";
import {
	USER_REQUEST_CREATE_FAIL,
	USER_REQUEST_CREATE_REQUEST,
	USER_REQUEST_CREATE_SUCCESS,
} from "../constants/requestConstants";

export const userRequestCreateAction =
	(phoneNumber, diseaseName, lastDate, fundAmount, bankAccount, documents) =>
	async (dispatch, getState) => {
		try {
			dispatch({ type: USER_REQUEST_CREATE_REQUEST });

			const {
				userLogin: { userInfo },
			} = getState();

			const config = {
				headers: {
					"Content-Type": "application/json",
					Authorization: `Bearer ${userInfo.token}`,
				},
			};

			const { data } = await axios.post(
				"/api/requests/create",
				{
					phoneNumber,
					diseaseName,
					lastDate,
					fundAmount,
					bankAccount,
					documents,
				},
				config
			);

			dispatch({ type: USER_REQUEST_CREATE_SUCCESS, payload: data });
		} catch (error) {
			dispatch({
				type: USER_REQUEST_CREATE_FAIL,
				payload:
					error.response && error.response.data.message
						? error.response.data.message
						: error.message,
			});
		}
	};
