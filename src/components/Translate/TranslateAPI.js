const BASE_URL = "https://at-assignment-api.herokuapp.com/translations";
const API_KEY = "PHTR7fTglU6Hdl6/geiBaQ==";

export const TranslateAPI = {
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
      return response.json();
    });
  },
  clearTranslations(translations, userId) {
    const deletedTranslations = translations.map(obj => {
      return {...obj, deleted: true}
    })
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
      return response.json();
    });
  },
};
