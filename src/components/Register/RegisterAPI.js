const BASE_URL = "https://at-assignment-api.herokuapp.com/translations";
const API_KEY = "PHTR7fTglU6Hdl6/geiBaQ==";

export const RegisterAPI = {
  register(username) {
    return fetch(`${BASE_URL}?username=${username}`).then(async (response) => {
      if (!response.ok) {
        const { error = "An unknown error occurred" } = await response.json();
        throw new Error(error);
      }
      const data = await response.json();
      if (!Object.keys(data).length) {
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
            const { error = "Could not create new user" } = await response.json();
            throw new Error(error);
          }
          return response.json();
        });
      } else {
        throw new Error("Username already exists");
      }
    });
  },
};
