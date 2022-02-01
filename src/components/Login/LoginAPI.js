const BASE_URL = "https://at-assignment-api.herokuapp.com/translations";

// provides login related functions that interact with the API
export const LoginAPI = {
  // given the username, checks if the username exists and either allows login or relays an error
  login(username) {
    return fetch(`${BASE_URL}?username=${username}`).then(async (response) => {
      if (!response.ok) {
        const { error = "An unknown error occurred" } = await response.json();
        throw new Error(error);
      }
      const data = await response.json();
	  // API returns []
      if (!Object.keys(data).length) {
        throw new Error("Username does not exist");
      }
	  // API returns an array with one user object
      return data[0];
    });
  },
};
