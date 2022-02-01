# Sign Language Translator

![GitHub repo size](https://img.shields.io/github/repo-size/TimoJarvenpaa/sign-language-translator)


[Live Demo]() (Hosted on _Heroku_)

[REST API]() (Hosted on _Heroku_)

[Component Tree Image](docs/ct-sign-language-translator.png)

## Table of Contents

- [General Information](#general-information)

- [Technologies and Resources](#technologies-and-resources)

- [Installation and Usage](#installation-and-usage)

- [Contributors](#contributors)

## General Information

**Login/Register view**

NOTE: User cannot see these views if _logged in_

The application starts from login view if user is not logged in. The login view contains text input where user can enter their username to log in if username already exists in REST API. If username does not exist in REST API, user can create one on register view. When user has successfully logged in, the translate view will be shown.

**Translate view**

NOTE: User cannot see this view if _not logged in_

The translate view is main view for logged in users. This view has two separate components, translation input and result field. User can start translating words and sentences by typing to translate input and clicking button. The result will be shown on result field below as images. Translations will be saved to translation history which can be found from profile view.

**Profile view**

NOTE: User cannot see this view if _not logged in_

The profile view displays username which is currently logged in and translation history. In translation history user can view last 10 translations from newest to oldest. View also contains two buttons, Clear translation history and Log out. By clicking Clear translation history button, entire translation history will be hidden. Log out button ends the current session and user will be redirected back to login view.

## Technologies and Resources

The project is implemented using the following technologies and resources:

- React/Redux

- Bootstrap
- Material Icons

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

3. Start server:

```sh
npm start
```

After starting the server, you can access the application by navigating to `localhost:3000` on your browser.

## Contributors

[Arttu Hartikainen (@arttuhar)](https://github.com/arttuhar)

[Timo Järvenpää (@TimoJarvenpaa)](https://github.com/TimoJarvenpaa)
