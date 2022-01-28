const BASE_URL = "https://at-assignment-api.herokuapp.com/translations";

export const LoginAPI = {
	login(username) {
		return fetch(`${BASE_URL}?username=${username}`).then(async response => {
			if (!response.ok) {
				const { error = "An unknown error occurred" } = await response.json();
				throw new Error(error);
			}
			const data = await response.json();
			console.log(data);
			if (!Object.keys(data).length) {
				throw new Error("Username does not exist");
			}
			return data;
		});
	},
};
