import AppContainer from "../../hoc/AppContainer";
import "./TranslateResult.css";

// a component responsible for displaying the sign language images for the current translation
const TranslateResult = ({ translation, translatedSigns }) => {
	return (
		<div className="TranslateResult">
			<AppContainer>
				<div className="translate-result-container mx-4 shadow mb-5">
					<div className="translate-result px-4 py-4">
						{translatedSigns.map(sign => sign)}
					</div>
					<div className="translate-result-footer px-4 py-1">
						<p className="translate-footer-text">
							Translation for{" "}
							<span>
								<em>{translation}</em>
							</span>
						</p>
					</div>
				</div>
			</AppContainer>
		</div>
	);
};

export default TranslateResult;
