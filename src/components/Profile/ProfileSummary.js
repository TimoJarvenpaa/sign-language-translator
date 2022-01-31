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

	const onLogoutClick = () => {
		dispatch(sessionLogoutAction());
	};

	const filteredAndSlicedTranslations = translations
		.filter(t => t.deleted === false)
		.slice(-10)
		.reverse();

	return (
		<div className="ProfileSummary">
			<AppContainer>
				<div className="profile-summary p-4 shadow mb-5">
					<div className="profile-details p-3">
						<h1>{username}</h1>
						<div className="py-3">
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
						<ul className="list-group list-group-flush">
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
