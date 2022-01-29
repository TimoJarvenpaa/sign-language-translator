import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import Translate from "./components/Translate/Translate";
import Profile from "./components/Profile/Profile";
import NotFound from "./components/NotFound/NotFound";
import Navbar from "./components/Navbar/Navbar";

function App() {
	return (
		<BrowserRouter>
			<div className="App">
				<Navbar />
				<Routes>
					<Route path="/" exact element={<Login />} />
					<Route path="/register" element={<Register />} />
					<Route path="/translate" element={<Translate />} />
					<Route path="/profile" element={<Profile />} />
					<Route path="*" element={<NotFound />} />
				</Routes>
			</div>
		</BrowserRouter>
	);
}

export default App;
