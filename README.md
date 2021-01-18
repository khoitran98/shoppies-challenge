# Shopify Challenge

https://khoitran98.github.io/shoppies-challenge/

## Set up after cloning

### `npm install`

### `npm start`

The app will need OMDB API key to work.

## Features:
* Give search results from OMDB's API based on movies' title and release year (page number can also be specified).
* Each search result display the movie's poster, title, year of release and a button to nominate that film.
* Updates to the search terms update the result list.
* Movies in search results can be added and removed from the nomination list.
* If a search result has already been nominated, its nominate button is disabled
* Display a banner and disable all nominate buttons when the user has 5 nominations.
* Use cookieS to store an user's nomination list to the browser.
* Caching is used to store API requests and responses.

## Tech used:
* React, react-cookie
* Material-UI

