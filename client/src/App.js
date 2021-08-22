import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import LoginScreen from "./screens/LoginScreen/LoginScreen";
import HomeScreen from "./screens/HomeScreen/HomeScreen";
import SignupScreen from "./screens/SignupScreen/SignupScreen";
import DonateScreen from "./screens/DonateScreen/DonateScreen";
import RequestScreen from "./screens/RequestScreen/RequestScreen";
import RequestDetailsScreen from "./screens/RequestDetailsScreen/RequestDetailsScreen";
import AdminApproveScreen from "./screens/AdminApproveScreen/AdminApproveScreen";

function App() {
	return (
		<Router>
			<Route path="/admin/approve/:id" component={AdminApproveScreen} />
			<Route path="/request/:id" component={RequestDetailsScreen} />
			<Route path="/request" component={RequestScreen} exact />
			<Route path="/donate" component={DonateScreen} />
			<Route path="/signup" component={SignupScreen} />
			<Route path="/login" component={LoginScreen} />
			<Route path="/" component={HomeScreen} exact />
		</Router>
	);
}

export default App;
