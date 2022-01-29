import { useDispatch, useSelector } from "react-redux";
import { sessionLogoutAction } from "../../store/actions/sessionActions";
import AppContainer from "../../hoc/AppContainer";
import "./Navbar.css";

const Navbar = () => {
	const dispatch = useDispatch();
	const { loggedIn } = useSelector(state => state.session);

	const onLogoutClick = () => {
		dispatch(sessionLogoutAction());
	};

	return (
		<div className="Navbar">
			<nav className="navbar shadow p-3 mb-5 bg-body">
				<AppContainer>
					<h2 className="navbar-text navbar-brand">Lost in translation</h2>
					<form className="d-flex">
						{loggedIn && (
							<button
								className="btn btn-outline-success me-2"
								type="button"
								onClick={onLogoutClick}
							>
								Log out
							</button>
						)}

						{loggedIn && (
							<button className="user-button btn">
								<span className="user-button-text">username</span>
								<span className="user-button-icon material-icons">
									person_outline
								</span>
							</button>
						)}
					</form>
				</AppContainer>
			</nav>
		</div>
	);
};

export default Navbar;
