# MurrayTracker

#### By <a href="https://github.com/brandonfiebiger"> Brandon Fiebiger</a>, <a href="https://github.com/kmiller9393">Kurt Miller</a>, and <a href="https://github.com/JesseMcBrennan">Jesse Mcfadden</a>

### Project

MurrayTracker is a graphical interface for the Movie-Tracker database displaying all of Bill Murray's fine work. This web application was built using React, Redux, Router along with a Postgres backend database. We used Waffle.io to outline the project and manage workflow.

We used Enzyme and Jest to build out our testing suite.

#### Getting Started

1) clone down this repository.

2) cd into the back-end directory and run npm start.

3) cd into the movie-tracker directory within the root directory.

4) npm install.

5) npm start.


#### User Interaction

Upon page load, the user has access to the entire library of Murray films. By clicking a card, the user sees an overview of the film, date it was released, and rating. If the user chooses to 'favorite' the film and they are not logged in, they will be prompted to sign in. Once signed in, a user has the ability to favorite a movie, adding the favorite to the favorites page. After selecting 'favorites', the user sees all of their favorited movie. By clicking 'unfavorite', they remove the favorited movie from their favorites page.

### UI

<img src="https://github.com/kmiller9393/movie-tracker/blob/master/UI.gif">

#### Landing Page

<img src="https://github.com/kmiller9393/movie-tracker/blob/master/LandingPage.png">

#### Sign In Page

<img src="https://github.com/kmiller9393/movie-tracker/blob/master/SignInPage.png">

#### Favorites Page

<img src="https://github.com/kmiller9393/movie-tracker/blob/master/FavoritesPage.png">
