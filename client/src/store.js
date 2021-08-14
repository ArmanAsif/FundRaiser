import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { createStore, combineReducers, applyMiddleware } from "redux";
import {
	userSignupReducer,
	userLoginReducer,
} from "../src/reducers/userReducers";

import {
	userRequestCreateReducer,
	userRequestListReducer,
	userRequestDetailsReducer,
	userRequestApproveReducer,
} from "./reducers/requestReducers";

const reducers = combineReducers({
	userSignup: userSignupReducer,
	userLogin: userLoginReducer,

	userRequestCreate: userRequestCreateReducer,
	userRequestList: userRequestListReducer,
	userRequestDetails: userRequestDetailsReducer,
	userRequestApprove: userRequestApproveReducer,
});

const userInfoFromStorage = localStorage.getItem("userInfo")
	? JSON.parse(localStorage.getItem("userInfo"))
	: null;

const initialState = { userLogin: { userInfo: userInfoFromStorage } };

const middleware = [thunk];

const store = createStore(
	reducers,
	initialState,
	composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
