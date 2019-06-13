# README

[Kelp Live](https://kelp-ari.herokuapp.com/#/)

Kelp is a Yelp clone that allows users to browse businesses in their area. Users can read reviews for these businesses in order to make a more informed decision on who you want to do business with.


<img src="https://github.com/aghlichl/KELP/blob/master/app/assets/images/splash_screen.png"/>

## Technologies
* Ruby on Rails 
* React.js
* Redux
* HTML and CSS
* PostgreSQL
* Active Storage

## Features 
* User Authentication 
* Allows users to search for businesses by name.
* Displays Business information
* Displays all Reviews associated to a Business

## Code Snippets

Implemented a function that would take the aggregate average rating and find the correct pixel area on the Yelp Star sprite sheet to display. 

`business_view.jsx`

```javascript
function formatRatings(avgRating) {
            let avgRatingFloat = parseFloat(avgRating);
            avgRatingFloat = avgRatingFloat + 0.01;
            let classer = "";
            if (avgRatingFloat <= 1.0) {
                classer = "star-one";
                return classer;
            }
            else if (avgRatingFloat <= 1.5) {
                classer = "star-one-five";
                return classer;
            }
            else if (avgRatingFloat <= 2.0) {
                classer = "star-two";
                return classer;
            }
            else if (avgRatingFloat <= 2.5) {
                classer = "star-two-five";
                return classer;
            }
            else if (avgRatingFloat <= 3.0) {
                classer = "star-three";
                return classer;
            }
            else if (avgRatingFloat <= 3.5) {
                classer = "star-three-five";
                return classer;
            }
            else if (avgRatingFloat <= 4.0) {
                classer = "star-four";
                return classer;
            }
            else if (avgRatingFloat <= 4.5) {
                classer = "star-four-five";
                return classer;
            }
            else {
                return "star-five";
            }
        }
```

Dabbled with CSS Grid which provided 2-dimensional styling options far superior to Flex Box, especially in such a design heavy website such as Yelp.

`application.scss`

```CSS

.business-view {
  width: 960;
  height: 443;
  background-color: rgb(245, 245, 245);
  display: grid;
  grid-template-areas:
    "left  info     info     review   right"
    "left  map      images   images   right"
    "left-b  reviews  reviews  aside  right-b";

  grid-template-columns: 1fr auto auto auto 1fr;
  grid-template-rows: auto auto auto;
}

```

### Search
Users can search for a business by typing the business name in the search bar. using a case insensitive LIKE query, I'm able to output all the businesses that match the query.

<img src="https://github.com/aghlichl/KELP/blob/master/app/assets/images/search_screen.png"/>


### Business View with Reviews

Users can view reviews and business information associated with the business itself

<img src="https://github.com/aghlichl/KELP/blob/master/app/assets/images/biz_screen.png"/>

<a href="https://codeclimate.com/github/aghlichl/KELP/maintainability"><img src="https://api.codeclimate.com/v1/badges/a6c07d674754929b0bbb/maintainability" /></a>
