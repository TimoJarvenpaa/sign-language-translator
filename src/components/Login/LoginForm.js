import { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { loginAttemptAction } from "../../store/actions/loginActions";
import AppContainer from "../../hoc/AppContainer";
import "./LoginForm.css";

const LoginForm = () => {
	const [username, setUsername] = useState("");
	const dispatch = useDispatch();
	const { loggedIn } = useSelector(state => state.session);
	const { loginError } = useSelector(state => state.login);

	const onInputChange = e => {
		setUsername(e.target.value);
	};

	const onLoginSubmit = e => {
		e.preventDefault();
		dispatch(loginAttemptAction(username));
	};

	return (
		<div className="LoginForm">
			<AppContainer>
				<form
					onSubmit={onLoginSubmit}
					className="login-form mt-3 pt-1 px-4 pb-5 shadow p-3 mb-5 bg-body"
				>
					<div className="login-container input-group pt-4">
						<span className="login-input-icon material-icons input-group-text">
							person_outline
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
					<Link to="/register">Register now</Link>
					{loginError && (
						<div className="mt-3 px-3" role="alert">
							<p className="d-flex mb-0 text-danger">
								<span className="material-icons">error</span>&nbsp;
								<span>{loginError}</span>
							</p>
						</div>
					)}
				</form>
			</AppContainer>
		</div>
	);
};

export default LoginForm;
