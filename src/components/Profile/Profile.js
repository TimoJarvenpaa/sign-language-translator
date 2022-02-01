import { Navigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { translationClearAction } from "../../store/actions/translationActions";
import ProfileSummary from "./ProfileSummary";

// profile view, route "/profile"
const Profile = () => {
	const dispatch = useDispatch();
	// user related information from the current session redux state
	const { username, id, loggedIn } = useSelector(state => state.session);
	// the user's translations from the translation redux state
	const { translations } = useSelector(state => state.translation);

	// event handler for the 'clear translation history' button
	const onClearTranslationsClick = () => {
		// dispatch the clear action, payload has to have the translations along with the user id
		dispatch(
			translationClearAction({
				translations: translations,
				id: id,
			})
		);
	};

	return (
		<div className="Profile">
			{!loggedIn && <Navigate to="/" />}
			<ProfileSummary
				username={username}
				translations={translations}
				onClearTranslationsClick={onClearTranslationsClick}
			/>
		</div>
	);
};

export default Profile;
