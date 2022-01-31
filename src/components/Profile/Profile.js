import { Navigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { translationClearAction } from "../../store/actions/translationActions";
import ProfileSummary from "./ProfileSummary";

const Profile = () => {
	const dispatch = useDispatch();
	const { username, id, loggedIn } = useSelector(state => state.session);
	const { translations } = useSelector(state => state.translation);

	const onClearTranslationsClick = () => {
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
