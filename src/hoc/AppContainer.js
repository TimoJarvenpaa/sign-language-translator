// a higher-order component used to wrap other components
const AppContainer = ({ children }) => {
	return <div className="container">{children}</div>;
};

export default AppContainer;
