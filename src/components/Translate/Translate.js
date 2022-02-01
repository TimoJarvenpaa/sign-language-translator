import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { translationCreateAction } from "../../store/actions/translationActions";
import TranslateForm from "./TranslateForm";
import TranslateResult from "./TranslateResult";

// translate view, route "/translate"
const Translate = () => {
	// component level state for the user input
	const [translation, setTranslation] = useState("");
	// a separate state that doesn't update on input change
	// passed down to the TranslateResult component for rendering purposes
	const [translationResult, setTranslationResult] = useState("");
	// component level state that holds an array with appropriate <img> elements for the translation
	const [translatedSigns, setTranslatedSigns] = useState([]);

	const dispatch = useDispatch();
	// user id for the currently logged in user
	const { id } = useSelector(state => state.session);
	// all the user's previous translations from the redux state
	const { translations } = useSelector(state => state.translation);

	// updates the component translation state on input
	const onInputChange = e => {
		setTranslation(e.target.value);
	};

	// event handler for the translate button
	const onTranslationSubmit = e => {
		e.preventDefault();
		// clear the previous images
		setTranslatedSigns([]);
		// create a new object that includes translation and deleted properties
		const translationObject = {
			translation: translation,
			deleted: false,
		};
		// create a new array that includes the previous translation objects and the new one created above
		const newTranslations = translations.concat(translationObject);
		// dispatch the create action for translations
		// payload has to include an object with all the translations and the user id
		dispatch(
			translationCreateAction({
				translations: newTranslations,
				id: id,
			})
		);
		// update the state that is used to pass down a prop with the new translation
		setTranslationResult(translation);
		// update the <img> element array
		setTranslatedSigns(translateToSigns(translation));
		// clear the input field
		setTranslation("");
	};

	// path to the American sign language images in the public folder
	const baseSrc = "/assets/individial_signs/";
	// alphabet char array used in the next function
	const alphabet = [..."abcdefghijklmnopqrstuvwxyz"];

	// function that recieves a string (i.e. translation) and returns an array of corresponding <img>
	// elements that represent the string in American sign language
	const translateToSigns = translation => {
		const translationSigns = [];
		// spread the string into individual characters
		const charArray = [...translation];
		// loop through the characters
		charArray.forEach((letter, index) => {
			// if the character is a-z or A-Z
			if (alphabet.includes(letter.toLowerCase())) {
				// push a new image element into the array with the correct src-attribute
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
