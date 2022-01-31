import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import AppContainer from "../../hoc/AppContainer";
import "./TranslateForm.css";

const TranslateForm = props => {
	const { loggedIn } = useSelector(state => state.session);

	return (
		<div className="TranslateForm">
			<AppContainer>
				{!loggedIn && <Navigate to="/" />}
				<form
					onSubmit={props.onTranslationSubmit}
					className="translate-form mt-3 pt-1 px-4 pb-5 shadow p-3 mb-5"
				>
					<div className="input-group pt-4">
						<span className="translate-input-icon material-icons input-group-text">
							person_outline
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
