import AppContainer from "../../hoc/AppContainer";
import RegisterForm from "./RegisterForm";
import "./Register.css";

// register view, route "/register"
const Register = () => {
	return (
		<div className="Register">
			<AppContainer>
				<div className="register-header pt-5 pb-4 d-flex">
					<img src="/assets/Logo.png" alt="Robot logo" height="200px" />
					<div className="register-header-text mx-5 d-flex">
						<div>
							<h1>Lost in translation</h1>
							<h3>Register your username</h3>
						</div>
					</div>
				</div>
			</AppContainer>
			<RegisterForm />
		</div>
	);
};

export default Register;
