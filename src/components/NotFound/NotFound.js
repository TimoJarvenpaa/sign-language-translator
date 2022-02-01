import { Link } from "react-router-dom";

// a view displayed when trying to access undefined routes
const NotFound = () => {
	return (
		<div className="NotFound">
			<h1>Not found</h1>
			<p>This page does not exist :(</p>
			<Link to="/">Back to home</Link>
		</div>
	);
};

export default NotFound;
