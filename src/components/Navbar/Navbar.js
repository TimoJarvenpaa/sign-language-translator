import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { sessionLogoutAction } from "../../store/actions/sessionActions";
import AppContainer from "../../hoc/AppContainer";
import "./Navbar.css";

const Navbar = () => {
	const dispatch = useDispatch();
	const { username, loggedIn } = useSelector(state => state.session);

	const onLogoutClick = () => {
		dispatch(sessionLogoutAction());
	};

	return (
		<div className="Navbar">
			<nav className="navbar shadow p-3 mb-5">
				<AppContainer>
					<Link className="navbar-link" to="/translate">
						<h2 className="navbar-text navbar-brand">Lost in translation</h2>
					</Link>
					<form className="d-flex">
						{loggedIn && (
							<Link className="navbar-link" to="/profile">
								<button className="user-button btn d-flex">
									<span className="user-button-text">{username}</span>
									<span className="user-button-icon material-icons">
										person_outline
									</span>
								</button>
							</Link>
						)}

						{loggedIn && (
							<button
								className="btn me-2"
								type="button"
								onClick={onLogoutClick}
							>
								<span className="material-icons">logout</span>
							</button>
						)}
					</form>
				</AppContainer>
			</nav>
		</div>
	);
};

export default Navbar;
