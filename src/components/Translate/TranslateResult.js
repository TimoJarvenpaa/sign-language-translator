import AppContainer from "../../hoc/AppContainer";
import "./TranslateResult.css";

const TranslateResult = () => {
	return (
		<div className="TranslateResult">
			<AppContainer>
				<div className="translate-result-container shadow mb-5">
					<div className="translate-result px-4 py-4">
						<h1>Hello</h1>
					</div>
					<div className="translate-result-footer px-4 py-1">
						<p className="translate-footer-text">
							Translation for{" "}
							<span>
								<em>Hello</em>
							</span>
						</p>
					</div>
				</div>
			</AppContainer>
		</div>
	);
};

export default TranslateResult;
