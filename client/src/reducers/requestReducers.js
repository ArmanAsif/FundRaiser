import {
	UPDATE_DONATED_LIST_FAIL,
	UPDATE_DONATED_LIST_REQUEST,
	UPDATE_DONATED_LIST_RESET,
	UPDATE_DONATED_LIST_SUCCESS,
	USER_REQUEST_APPROVE_FAIL,
	USER_REQUEST_APPROVE_REQUEST,
	USER_REQUEST_APPROVE_RESET,
	USER_REQUEST_APPROVE_SUCCESS,
	USER_REQUEST_CREATE_FAIL,
	USER_REQUEST_CREATE_REQUEST,
	USER_REQUEST_CREATE_RESET,
	USER_REQUEST_CREATE_SUCCESS,
	USER_REQUEST_DETAILS_FAIL,
	USER_REQUEST_DETAILS_REQUEST,
	USER_REQUEST_DETAILS_SUCCESS,
	USER_REQUEST_LIST_FAIL,
	USER_REQUEST_LIST_REQUEST,
	USER_REQUEST_LIST_SUCCESS,
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

export const userRequestListReducer = (state = { requests: [] }, action) => {
	switch (action.type) {
		case USER_REQUEST_LIST_REQUEST:
			return { loading: true, requests: [] };
		case USER_REQUEST_LIST_SUCCESS:
			return { loading: false, success: true, requests: action.payload };
		case USER_REQUEST_LIST_FAIL:
			return { loading: false, error: action.payload };
		default:
			return state;
	}
};

export const userRequestDetailsReducer = (
	state = { request: { donatedList: [] } },
	action
) => {
	switch (action.type) {
		case USER_REQUEST_DETAILS_REQUEST:
			return { ...state, loading: true };
		case USER_REQUEST_DETAILS_SUCCESS:
			return { loading: false, request: action.payload };
		case USER_REQUEST_DETAILS_FAIL:
			return { loading: false, error: action.payload };
		default:
			return state;
	}
};

export const userRequestApproveReducer = (state = {}, action) => {
	switch (action.type) {
		case USER_REQUEST_APPROVE_REQUEST:
			return { loading: true };
		case USER_REQUEST_APPROVE_SUCCESS:
			return { loading: false, success: true };
		case USER_REQUEST_APPROVE_FAIL:
			return { loading: false, error: action.payload };
		case USER_REQUEST_APPROVE_RESET:
			return {};
		default:
			return state;
	}
};

export const donatedListUpdateReducer = (state = {}, action) => {
	switch (action.type) {
		case UPDATE_DONATED_LIST_REQUEST:
			return { loading: true };
		case UPDATE_DONATED_LIST_SUCCESS:
			return { loading: false, success: true };
		case UPDATE_DONATED_LIST_FAIL:
			return { loading: false, error: action.payload };
		case UPDATE_DONATED_LIST_RESET:
			return {};
		default:
			return state;
	}
};
