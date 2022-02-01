# Sign Language Translator

![GitHub repo size](https://img.shields.io/github/repo-size/TimoJarvenpaa/sign-language-translator)


[Live Demo](https://at-sign-language-translator.herokuapp.com/) (Hosted on _Heroku_)

[REST API](https://at-assignment-api.herokuapp.com/translations) (Hosted on _Heroku_)

[Component Tree Picture](docs/ct-sign-language-translator.png)

## Table of Contents

- [General Information](#general-information)

- [Technologies and Resources](#technologies-and-resources)

- [Installation and Usage](#installation-and-usage)

- [Contributors](#contributors)

## General Information

**Login/Register view**

NOTE: User cannot see these views if _logged in_

The application starts from the login view if the user is not already logged in. The login view contains a form where user can enter their username to log in assuming the username already exists in the [REST API](https://at-assignment-api.herokuapp.com/translations). If the username does not exist in the REST API, the user can register one in the register view, a link to which can be found below the form. When the user has successfully logged in, they'll be redirected to the translate view. Due to convenience and the scope of the application, no passwords or authentication methods are required. The REST API also periodically resets due to the way it was built and how Heroku works, which means usernames and user data will eventually be lost.

**Translate view**

NOTE: User cannot see this view if _not logged in_

The translate view is the main view for the users who are logged in. This view has two separate sections; the translation input form and the result field. The user can start translating words and sentences by typing into the translate input form and clicking button the button next to it. The result i.e. the pictures representing the sign language translation of the input will be shown in the result field below. Special characters and whitespaces are ignored. The translations will be saved to the user's personal translation history which can be viewed in the profile view.

**Profile view**

NOTE: User cannot see this view if _not logged in_

The profile view displays the username for the currently logged in user along with their translation history. The translation history lists the ten most recent translations from newest to oldest. The view also contains two buttons labeled ```Clear translation history``` and ```Log out```. By clicking the clear button, the user's entire translation history will be hidden. In the API, the translations will have their deleted property set to true, which will cause the view to not render them. The logout button resets the session and redirects to the login view.

## Technologies and Resources

The project is implemented using the following technologies and resources:

- React
- Redux
- React Router
- Bootstrap
- Material Icons

**NB!** The code used for the redux setup along with the templates for basic login, register and session related actions, reducers and middleware were replicated from the [example project](https://gitlab.com/sumodevelopment/react-txt-forum-client) created by Dewald Els.

## Installation and Usage

**NOTE:** You will need _node_ and _npm_ installed on your machine

1. Clone the project repository:

```sh
git clone https://github.com/TimoJarvenpaa/sign-language-translator.git
```

2. Install the dependencies while inside the project directory:

```sh
npm install
```

3. Start the server:

```sh
npm start
```

After starting the server, your browser should automatically lauch the application but you can also access it manually by navigating to `localhost:3000` on your browser.

## Contributors

[Arttu Hartikainen (@arttuhar)](https://github.com/arttuhar)

[Timo Järvenpää (@TimoJarvenpaa)](https://github.com/TimoJarvenpaa)
