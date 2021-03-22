import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'dGpQ5OmGP2SgfvZimlpCUoF4iOag9qzZ';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/all.json?'
            + `api-key=${NYT_API_KEY}`;

// Code LatestMovieReviewsContainer Here

class LatestMovieReviewsContainer extends Component {
    
    constructor(){
        super();
        this.state = {
            reviews: []
        }
    }
    //has a state set to an empty array


    componentDidMount() {
        fetch(URL)
        .then(res => res.json())
        .then(res => this.setState({ reviews: res.value }))
    }
    //it fetches data from the url and sets that data to the initial state.
    //WE use a componentDidMount for our fetch.

    render() {
        return (
          <div className="latest-movie-reviews">
            <h2>The Latest Reviews:</h2>
            <MovieReviews reviews={this.state.reviews} />
          </div>
        );
      }
      //we make a div with a class name
      //we make a title with an h2
      //we then pass in the current state down to MovieReviews
      //all this component does is make the fetch and stores that data in the state.
}

export default LatestMovieReviewsContainer;