import { useState } from "react";
import { Link, Navigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { registerAttemptAction } from "../../store/actions/registerActions";
import AppContainer from "../../hoc/AppContainer";
import "./RegisterForm.css";

const RegisterForm = () => {
	const [newUsername, setNewUsername] = useState("");
	const dispatch = useDispatch();
	const { loggedIn } = useSelector(state => state.session);
	const { registerError } = useSelector(state => state.register);

	const onInputChange = e => {
		setNewUsername(e.target.value);
	};

	const onRegisterSubmit = e => {
		e.preventDefault();
		dispatch(registerAttemptAction(newUsername));
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
							person_outline
						</span>
						<input
							id="username"
							type="text"
							placeholder="Register"
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
					{registerError && (
						<div className="mt-3 px-3" role="alert">
							<p className="d-flex mb-0 text-danger">
								<span className="material-icons">error</span>&nbsp;
								<span>{registerError}</span>
							</p>
						</div>
					)}
					<div className="register-footer px-4 py-1">
						<Link to="/" className="register-footer-link">
							Already registered? Log in here.
						</Link>
					</div>
				</form>
			</AppContainer>
		</div>
	);
};

export default RegisterForm;
