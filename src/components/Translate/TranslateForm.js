import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { translationCreateAction } from "../../store/actions/translationActions";
import AppContainer from "../../hoc/AppContainer";
import "./TranslateForm.css";

const TranslateForm = () => {
	const [translation, setTranslation] = useState("");
	const dispatch = useDispatch();
	const { loggedIn, id } = useSelector(state => state.session);
	const { translations } = useSelector(state => state.translation);

	const onInputChange = e => {
		setTranslation(e.target.value);
	};

	const onTranslationSubmit = e => {
		e.preventDefault();
		const translationObject = {
			translation: translation,
			deleted: 'false'
		}
		const newTranslations = translations.concat(translationObject);
		dispatch(translationCreateAction({ 
			translations: newTranslations,
			id: id 
		}));
		setTranslation("");
	};

	return (
		<div className="TranslateForm">
			<AppContainer>
				{!loggedIn && <Navigate to="/" />}
				<form
					onSubmit={onTranslationSubmit}
					className="translate-form mt-3 pt-1 px-4 pb-5 shadow p-3 mb-5 bg-body"
				>
					<div className="input-group pt-4">
						<span className="translate-input-icon material-icons input-group-text">
							person_outline
						</span>
						<input
							id="username"
							type="text"
							placeholder="Translate"
							onChange={onInputChange}
							value={translation}
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
