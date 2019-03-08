import React from 'react';
import { Link } from 'react-router-dom';

class ReviewIndex extends React.Component{
    constructor(props){
        super(props);
        
    }


    render(){
        if (!this.props.reviews) return null

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
        

        const reviews = Object.values(this.props.reviews).map(review => {
            return(
                <li>
                    <div className="single_review">
                        <div className="rssr_rating">
                            <div className={formatRatings(review.rating)}>
                            </div> 
                        </div>
                        <div className="rssr_user">
                            <img src={window.images.profile_60}></img>
                        </div>
                        <div className="rssr_feedback">
                        </div>
                        <div className="rssr_review">
                            {review.body}
                        </div>
                    </div>
                </li>
            )
        })
        return(
            <div className="reviews">
                {reviews}
            </div>
        )
    }
};

export default ReviewIndex;
