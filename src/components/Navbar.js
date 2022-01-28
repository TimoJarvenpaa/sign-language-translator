import { useDispatch } from "react-redux";
import { sessionLogoutAction } from "../store/actions/sessionActions";

const Navbar = () => {
	const dispatch = useDispatch();

	const onLogoutClick = () => {
		dispatch(sessionLogoutAction());
	};

	return (
		<div className="Navbar">
			<nav className="navbar navbar-light bg-light">
				<form className="container-fluid justify-content-start">
					<button
						className="btn btn-outline-success me-2"
						type="button"
						onClick={onLogoutClick}
					>
						Log out
					</button>
				</form>
			</nav>
		</div>
	);
};

export default Navbar;
