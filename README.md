### How to run

* install all the dependencies: `npm install`
* start the app: `npm start`
* The browser should automatically open and go to `http://localhost:3000`

### Libraries used

* React
* Material UI
* React Router

### Implementation

I use the data from [Chicago Art Museum](https://api.artic.edu/docs/), particularly
the [artwork endpoint](https://api.artic.edu/docs/#collections).

The app displays a list of artworks with the iiif image and some additional information such as the artists and date.

When clicking on the 'Learn More' button of each artwork, the app displays the artwork detail with more meta information
displayed on the side of the picture.

The api returns the pagination information which is being used as the properties to display the pagination component.

I use frontend url query parameters to store the state of pagination (which page to display) and the search term. This
is a good solution if the user wants to bookmark certain page and/or search results.

### Misc information

* Displaying a spinner when loading the data
* Displaying a "No Image Available" image when the iiif image is not available
* No result message when search returns empty result

### ToDoes

* Unit tests and e2e tests
* Sorting the results. Can add a sort param to the frontend url as well to preserve the state.
* Different search terms, such as searching by artists or title or any other fields possible.
* Error handling. Both backend request errors and frontend errors should be handled properly to not confuse the user.
* On the final thought, I think this assignment is better to be implemented by [next.js](https://nextjs.org/). Since the
  data don't change that often, it is mostly suitable for Server Side Rendering(SSR)