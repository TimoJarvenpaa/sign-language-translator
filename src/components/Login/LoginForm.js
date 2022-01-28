import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginAttemptAction } from "../../store/actions/loginActions";

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
			<form onSubmit={onLoginSubmit} className="mt-3">
				<div className="mb-3">
					<label htmlFor="username" className="form-label">
						Username
					</label>
					<input
						id="username"
						type="text"
						placeholder="Enter your username"
						onChange={onInputChange}
						className="form-control"
					/>
				</div>
				<button type="submit" className="btn btn-primary btn-lg">
					Login
				</button>
			</form>

			{loginError && (
				<div className="alert alert-danger" role="alert">
					<p className="d-flex mb-0">
						<span className="material-icons">error</span>&nbsp;
						<span>{loginError}</span>
					</p>
				</div>
			)}
		</div>
	);
};

export default LoginForm;
