import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import AppContainer from "../../hoc/AppContainer";
import "./TranslateForm.css";

// a component responsible for translation related inputs and actions 
const TranslateForm = props => {
	// property from the session redux state used for conditional rendering
	const { loggedIn } = useSelector(state => state.session);

	return (
		<div className="TranslateForm">
			<AppContainer>
				{!loggedIn && <Navigate to="/" />}
				<form
					onSubmit={props.onTranslationSubmit}
					className="translate-form px-4 py-5 mb-5"
				>
					<div className="input-group">
						<span className="translate-input-icon material-icons input-group-text">
							keyboard_alt
						</span>
						<input
							id="username"
							type="text"
							placeholder="Translate"
							onChange={props.onInputChange}
							value={props.translation}
							className="translate-input form-control border-start-0 border-end-0 shadow-none"
							aria-describedby="translate-button"
						/>
						<button
							type="submit"
							className="translate-button btn border-start-0 shadow-none"
							id="translate-button"
						>
							<span className="translate-button-icon material-icons">east</span>
						</button>
					</div>
				</form>
			</AppContainer>
		</div>
	);
};

export default TranslateForm;
