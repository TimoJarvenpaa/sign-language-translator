import { useState } from "react";
import { Link, Navigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { registerAttemptAction } from "../../store/actions/registerActions";
import AppContainer from "../../hoc/AppContainer";
import "./RegisterForm.css";

// a component responsible for register inputs and events
const RegisterForm = () => {
	const [newUsername, setNewUsername] = useState("");
	const dispatch = useDispatch();
	// property from the session redux state used for conditional rendering
	const { loggedIn } = useSelector(state => state.session);
	const { registerError } = useSelector(state => state.register);
	const [error, setError] = useState("");

	// updates the newUsername state on input
	const onInputChange = e => {
		setNewUsername(e.target.value);
	};

	// event handler for the register button
	const onRegisterSubmit = e => {
		e.preventDefault();
		// dispatch the redux action for register attempt
		dispatch(registerAttemptAction(newUsername));
		// display the potential error message from the redux state
		setError(registerError);
		// clear the error message after 5 seconds
		setTimeout(() => {
			setError("");
		}, 5000);
		// clear the input field after the button click
		setNewUsername("");
	};

	return (
		<div className="RegisterForm">
			<AppContainer>
				{loggedIn && <Navigate to="/translate" />}
				<form
					onSubmit={onRegisterSubmit}
					className="register-form mt-3 pt-1 shadow mb-5 bg-body"
				>
					<div className="input-group pt-4 px-4 pb-5">
						<span className="register-input-icon material-icons input-group-text">
							person
						</span>
						<input
							id="username"
							type="text"
							placeholder="Register your username"
							onChange={onInputChange}
							value={newUsername}
							className="register-input form-control border-start-0 border-end-0 shadow-none"
							aria-describedby="register-button"
						/>
						<button
							type="submit"
							className="register-button btn border-start-0 shadow-none"
							id="register-button"
						>
							<span className="register-button-icon material-icons">east</span>
						</button>
					</div>
					{error && (
						<div className="mb-3 px-4" role="alert">
							<p className="d-flex mb-0 text-danger">
								<span className="material-icons">error</span>&nbsp;
								<span>{registerError}</span>
							</p>
						</div>
					)}
					<div className="register-footer px-4 py-1">
						<Link to="/" className="register-footer-link">
							Already registered? Log in here
						</Link>
					</div>
				</form>
			</AppContainer>
		</div>
	);
};

export default RegisterForm;
