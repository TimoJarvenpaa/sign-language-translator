const BASE_URL = "https://at-assignment-api.herokuapp.com/translations";
// not a good practice but the app doesn't warrant extra security measures
const API_KEY = "PHTR7fTglU6Hdl6/geiBaQ==";

// provides registration related functions that interact with the API
export const RegisterAPI = {
  // given an username, checks if the username already exists and creates a new username or relays an error accordingly
  register(username) {
    return fetch(`${BASE_URL}?username=${username}`).then(async (response) => {
      if (!response.ok) {
        const { error = "An unknown error occurred" } = await response.json();
        throw new Error(error);
      }
      const data = await response.json();
      // the API returns [] if the username doesn't exist
      if (!Object.keys(data).length) {
        // a POST request to create a new user
        return fetch(`${BASE_URL}`, {
          method: "POST",
          headers: {
            "X-API-Key": API_KEY,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            username,
            translations: [],
          }),
        }).then(async (response) => {
          if (!response.ok) {
            const { error = "Could not create new user" } =
              await response.json();
            throw new Error(error);
          }
          return response.json();
        });
      } else {
        // API response wasn't []
        throw new Error("Username already exists");
      }
    });
  },
};
