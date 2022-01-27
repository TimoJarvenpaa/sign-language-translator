import { BrowserRouter, Routes, Route, Redirect } from "react-router-dom";
import Login from "./components/Login/Login";
import Translate from "./components/Translate/Translate";
import Profile from "./components/Profile/Profile";
import NotFound from "./components/NotFound/NotFound";

function App() {
	return (
		<BrowserRouter>
			<div className="App">
				<h1>Sign language translator</h1>
				<Routes>
					<Route path="/" exact element={<Login />} />
					<Route path="/translate" element={<Translate />} />
					<Route path="/profile" element={<Profile />} />
					<Route path="*" element={<NotFound />} />
				</Routes>
			</div>
		</BrowserRouter>
	);
}

export default App;
