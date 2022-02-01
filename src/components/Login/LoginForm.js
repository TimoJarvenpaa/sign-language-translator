import { useState } from "react";
import { Link, Navigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { loginAttemptAction } from "../../store/actions/loginActions";
import AppContainer from "../../hoc/AppContainer";
import "./LoginForm.css";

const LoginForm = () => {
	const [username, setUsername] = useState("");
	const dispatch = useDispatch();
	const { loggedIn } = useSelector(state => state.session);
	const { loginError } = useSelector(state => state.login);
	const [error, setError] = useState("");

	const onInputChange = e => {
		setUsername(e.target.value);
	};

	const onLoginSubmit = e => {
		e.preventDefault();
		dispatch(loginAttemptAction(username));
		setError(loginError);
		setTimeout(() => {
			setError("");
		}, 5000);
	};

	return (
		<div className="LoginForm">
			<AppContainer>
				{loggedIn && <Navigate to="/translate" />}
				<form
					onSubmit={onLoginSubmit}
					className="login-form mt-3 pt-1 shadow mb-5 bg-body"
				>
					<div className="login-container input-group pt-4 px-4 pb-5">
						<span className="login-input-icon material-icons input-group-text">
							person
						</span>
						<input
							id="username"
							type="text"
							placeholder="Enter your username"
							onChange={onInputChange}
							className="login-input form-control border-start-0 border-end-0 shadow-none"
							aria-describedby="login-button"
						/>
						<button
							type="submit"
							className="login-button btn border-start-0 shadow-none"
							id="login-button"
						>
							<span className="login-button-icon material-icons">east</span>
						</button>
					</div>
					{error && (
						<div className="mb-4 px-4" role="alert">
							<p className="d-flex mb-0 text-danger">
								<span className="material-icons">error</span>&nbsp;
								<span>{loginError}</span>
							</p>
						</div>
					)}

					<div className="login-footer px-4 py-1">
						<Link to="/register" className="login-footer-link">
							Don't have an account? Register here
						</Link>
					</div>
				</form>
			</AppContainer>
		</div>
	);
};

export default LoginForm;
