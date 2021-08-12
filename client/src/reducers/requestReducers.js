import {
	USER_REQUEST_CREATE_FAIL,
	USER_REQUEST_CREATE_REQUEST,
	USER_REQUEST_CREATE_RESET,
	USER_REQUEST_CREATE_SUCCESS,
} from "../constants/requestConstants";

export const userRequestCreateReducer = (state = {}, action) => {
	switch (action.type) {
		case USER_REQUEST_CREATE_REQUEST:
			return { loading: true };
		case USER_REQUEST_CREATE_SUCCESS:
			return { loading: false, success: true, request: action.payload };
		case USER_REQUEST_CREATE_FAIL:
			return { loading: false, error: action.payload };
		case USER_REQUEST_CREATE_RESET:
			return {};
		default:
			return state;
	}
};
