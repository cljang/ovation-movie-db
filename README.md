# Description

This project is a movie database web app that allows users to view information about and track their favourite movies. This project was designed and developed by Clayton Jang.

This project uses the [TMDb API](https://www.themoviedb.org/) but is not endorsed or certified by TMDb.

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Pages

There are multiple pages in this app:

### Home Page

The home page displays a list of the current Popular movies. Using a filter selector, the user may change the movie list filter to show Top Rated, Upcoming, or Now Playing movies.

Each movie displays as a card with the movie's poster (or a placeholder if no poster is available). Clicking on or hovering a card will display an overlay with information about the movie. This overlay has a Favourite button to add/remove a movie to the user's favourite list (see [Favourite Page](#favourite-page)) and a More Info button which links to the [Individual Movie Page](#individual-movie-page).

At the top of the page, there is a carousel that features the first three movies in the current movie list. This carousel was implemented using [React Slick](https://react-slick.neostack.com/).

At the bottom of the page, there is a load more button that allows users to load more movies into the list.

### About Page

The About page displays a description about the web app and an attribution to TMDb.

### Favourite Page

The Favourite page displays a list of the user's favourited movies (if any). When user's add a movie by clicking its Favourite button, the movie is added to their favourite list, stored in the browser's localStorage. This allows their favourites to persist across browser sessions. When no movies are added to the list, this is indicated with a message and a link back to the home page.

### Individual Movie Page

The Individual Movie Page is specific to each movie. Using a URL parameter, the movie's ID is passed to the individual page. On this page, we display extra details about the movie, such as runtime, genres, and the top billed cast. We also provide a YouTube link to the movie's trailer (if any).

### Search Page

The Search page displays results when a user searches for a movie. In the header of the app, there is a search bar that allows users to search for movies by name.