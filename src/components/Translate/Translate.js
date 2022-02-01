import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { translationCreateAction } from "../../store/actions/translationActions";
import TranslateForm from "./TranslateForm";
import TranslateResult from "./TranslateResult";

const Translate = () => {
	const [translation, setTranslation] = useState("");
	const [translationResult, setTranslationResult] = useState("");
	const [translatedSigns, setTranslatedSigns] = useState([]);

	const dispatch = useDispatch();
	const { id } = useSelector(state => state.session);
	const { translations } = useSelector(state => state.translation);

	const onInputChange = e => {
		setTranslation(e.target.value);
	};

	const onTranslationSubmit = e => {
		e.preventDefault();
		setTranslatedSigns([]);
		const translationObject = {
			translation: translation,
			deleted: false,
		};
		const newTranslations = translations.concat(translationObject);
		dispatch(
			translationCreateAction({
				translations: newTranslations,
				id: id,
			})
		);
		setTranslationResult(translation);
		setTranslatedSigns(translateToSigns(translation));
		setTranslation("");
	};

	const baseSrc = "/assets/individial_signs/";
	const alphabet = [..."abcdefghijklmnopqrstuvwxyz"];

	const translateToSigns = translation => {
		const translationSigns = [];
		const charArray = [...translation];
		charArray.forEach((letter, index) => {
			if (alphabet.includes(letter.toLowerCase())) {
				translationSigns.push(
					<img
						src={baseSrc + letter.toLowerCase() + ".png"}
						key={index + letter}
						alt={letter}
					/>
				);
			}
		});
		return translationSigns;
	};

	return (
		<div className="Translate">
			<TranslateForm
				translation={translation}
				onInputChange={onInputChange}
				onTranslationSubmit={onTranslationSubmit}
			/>
			<TranslateResult
				translation={translationResult}
				translatedSigns={translatedSigns}
			/>
		</div>
	);
};

export default Translate;
