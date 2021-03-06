import { useDispatch } from "react-redux";
import AppContainer from "../../hoc/AppContainer";
import "./ProfileSummary.css";
import { sessionLogoutAction } from "../../store/actions/sessionActions";

const ProfileSummary = ({
	username,
	translations,
	onClearTranslationsClick,
}) => {
	const dispatch = useDispatch();

	// event handler for the logout button
	const onLogoutClick = () => {
		// dispatch the redux action for logging out i.e. clearing the session from local storage
		dispatch(sessionLogoutAction());
	};

	// array that includes the latest ten translations that are not marked as deleted
	// used to render the translation history of the user
	const filteredAndSlicedTranslations = translations
		.filter(t => t.deleted === false)
		.slice(-10)
		.reverse();

	return (
		<div className="ProfileSummary">
			<AppContainer>
				<div className="profile-summary mt-5 p-4 shadow mb-5">
					<div className="profile-details p-3">
						<h1>{username}</h1>
						<div className="pt-5 pb-3">
							<button
								className="profile-button btn"
								onClick={onClearTranslationsClick}
							>
								Clear translation history
							</button>
							<button
								className="profile-button btn mx-3"
								onClick={onLogoutClick}
							>
								Log out
							</button>
						</div>
					</div>

					<div className="profile-history mt-3 p-3">
						<h3>Translation history</h3>
						<ul className="list-group list-group-flush pt-3">
							{filteredAndSlicedTranslations.map((translationObject, index) => {
								return (
									<li
										className="list-group-item"
										key={translationObject.translation + index}
									>
										{translationObject.translation}
									</li>
								);
							})}
						</ul>
					</div>
				</div>
			</AppContainer>
		</div>
	);
};

export default ProfileSummary;
