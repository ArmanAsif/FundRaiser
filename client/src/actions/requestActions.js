import axios from "axios";
import {
	UPDATE_DONATED_LIST_FAIL,
	UPDATE_DONATED_LIST_REQUEST,
	UPDATE_DONATED_LIST_SUCCESS,
	USER_REQUEST_APPROVE_FAIL,
	USER_REQUEST_APPROVE_REQUEST,
	USER_REQUEST_APPROVE_SUCCESS,
	USER_REQUEST_CREATE_FAIL,
	USER_REQUEST_CREATE_REQUEST,
	USER_REQUEST_CREATE_SUCCESS,
	USER_REQUEST_DETAILS_FAIL,
	USER_REQUEST_DETAILS_REQUEST,
	USER_REQUEST_DETAILS_SUCCESS,
	USER_REQUEST_LIST_FAIL,
	USER_REQUEST_LIST_REQUEST,
	USER_REQUEST_LIST_SUCCESS,
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

export const getUserRequestList = () => async (dispatch, getState) => {
	try {
		dispatch({ type: USER_REQUEST_LIST_REQUEST });

		const {
			userLogin: { userInfo },
		} = getState();

		const config = {
			headers: {
				Authorization: `Bearer ${userInfo.token}`,
			},
		};

		const { data } = await axios.get(`/api/requests`, config);

		dispatch({ type: USER_REQUEST_LIST_SUCCESS, payload: data });
	} catch (error) {
		dispatch({
			type: USER_REQUEST_LIST_FAIL,
			payload:
				error.response && error.response.data.message
					? error.response.data.message
					: error.message,
		});
	}
};

export const userRequestDetailsById = (id) => async (dispatch, getState) => {
	try {
		dispatch({ type: USER_REQUEST_DETAILS_REQUEST });

		const {
			userLogin: { userInfo },
		} = getState();

		const config = {
			headers: {
				Authorization: `Bearer ${userInfo.token}`,
			},
		};

		const { data } = await axios.get(`/api/requests/${id}`, config);

		dispatch({
			type: USER_REQUEST_DETAILS_SUCCESS,
			payload: data,
		});
	} catch (error) {
		dispatch({
			type: USER_REQUEST_DETAILS_FAIL,
			payload:
				error.response && error.response.data.message
					? error.response.data.message
					: error.message,
		});
	}
};

export const approveRequestByAdmin =
	(id, approve) => async (dispatch, getState) => {
		try {
			dispatch({
				type: USER_REQUEST_APPROVE_REQUEST,
			});

			const {
				userLogin: { userInfo },
			} = getState();

			const config = {
				headers: {
					"Content-Type": "application/json",
					Authorization: `Bearer ${userInfo.token}`,
				},
			};

			const { data } = await axios.put(
				`/api/requests/admin/approve/${id}`,
				{ approve },
				config
			);

			dispatch({
				type: USER_REQUEST_APPROVE_SUCCESS,
				payload: data,
			});
		} catch (error) {
			dispatch({
				type: USER_REQUEST_APPROVE_FAIL,
				payload:
					error.response && error.response.data.message
						? error.response.data.message
						: error.message,
			});
		}
	};

export const updateDonatedListAction =
	(id, donatedAmount, transectionID) => async (dispatch, getState) => {
		try {
			dispatch({ type: UPDATE_DONATED_LIST_REQUEST });

			const {
				userLogin: { userInfo },
			} = getState();

			const config = {
				headers: {
					"Content-Type": "application/json",
					Authorization: `Bearer ${userInfo.token}`,
				},
			};

			const { data } = await axios.put(
				`/api/requests/donatedList/update/${id}`,
				{ donatedAmount, transectionID },
				config
			);

			dispatch({ type: UPDATE_DONATED_LIST_SUCCESS, payload: data });
		} catch (error) {
			dispatch({
				type: UPDATE_DONATED_LIST_FAIL,
				payload:
					error.response && error.response.data.message
						? error.response.data.message
						: error.message,
			});
		}
	};
