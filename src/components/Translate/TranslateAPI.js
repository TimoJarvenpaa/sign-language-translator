const BASE_URL = "https://at-assignment-api.herokuapp.com/translations";
// not a good practice but the app doesn't warrant extra security measures
const API_KEY = "PHTR7fTglU6Hdl6/geiBaQ==";

// provides translation related functions that interact with the API
export const TranslateAPI = {
  // given a list of translations and an user id,
  // updates the user's translations to include the new translation in the API
  createTranslation(translations, userId) {
    return fetch(`${BASE_URL}/${userId}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        "X-API-Key": API_KEY,
      },
      body: JSON.stringify({ translations: translations }),
    }).then(async (response) => {
      if (!response.ok) {
        const { error = "An unknown error occurred" } = await response.json();
        throw new Error(error);
      }
      // the API returns the updated user object
      return response.json();
    });
  },
  // given a list of translations and an user id,
  // sets all the user's translations to have the property deleted: true 
  // function doesn't actually delete the records from the API
  clearTranslations(translations, userId) {
    // create a new array of translation objects with the deleted property set to true
    const deletedTranslations = translations.map(obj => {
      return {...obj, deleted: true}
    })
    // PATCH request with the new array
    return fetch(`${BASE_URL}/${userId}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        "X-API-Key": API_KEY,
      },
      body: JSON.stringify({ translations: deletedTranslations }),
    }).then(async (response) => {
      if (!response.ok) {
        const { error = "An unknown error occurred" } = await response.json();
        throw new Error(error);
      }
      // the API returns the updated user object
      return response.json();
    });
  },
};
