const LoginForm = () => {
	return (
		<div className="LoginForm">
			<div className="input-group w-50">
				<span className="input-group-text" id="username-icon">
					@
				</span>
				<input
					type="text"
					className="form-control"
					placeholder="'What's your name?"
					aria-describedby="username-icon username-button"
				/>
				<button
					className="btn"
					type="submit"
					aria-describedby="username-button"
				>
					:)
				</button>
			</div>
		</div>
	);
};

export default LoginForm;
