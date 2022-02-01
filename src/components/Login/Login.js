import AppContainer from "../../hoc/AppContainer";
import LoginForm from "./LoginForm";
import "./Login.css";

const Login = () => {
	return (
		<div className="Login">
			<AppContainer>
				<div className="login-header pt-5 pb-4 d-flex">
					<img src="/assets/Logo.png" alt="Robot logo" height="200px" />
					<div className="login-header-text mx-5 d-flex">
						<div>
							<h1>Lost in translation</h1>
							<h3>Get started by logging in</h3>
						</div>
					</div>
				</div>
			</AppContainer>
			<LoginForm />
		</div>
	);
};

export default Login;
