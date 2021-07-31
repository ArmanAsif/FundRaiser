import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import HomeScreen from "./screens/HomeScreen/HomeScreen";
import LoginScreen from "./screens/LoginScreen/LoginScreen";
import SignupScreen from "./screens/SignupScreen/SignupScreen";
import DonateScreen from "./screens/DonateScreen/DonateScreen";
import RequestScreen from "./screens/RequestScreen/RequestScreen";

function App() {
	return (
		<Router>
			<Route path="/request" component={RequestScreen} />
			<Route path="/donate" component={DonateScreen} />
			<Route path="/signup" component={SignupScreen} />
			<Route path="/login" component={LoginScreen} />
			<Route path="/" component={HomeScreen} exact />
		</Router>
	);
}

export default App;
