import React from 'react';
import { Link } from 'react-router-dom';

class ReviewIndex extends React.Component {
    constructor(props) {
        super(props);

    }

    formattedDate(inputDate){
      let result="";
      let d = new Date(inputDate);
        result += (d.getMonth() + 1) + "/" + d.getDate() + "/" + d.getFullYear();
      return result;
    }

    byDate(a, b) {
        // console.log("a", a);
        a = new Date(a.createdAt);
        b = new Date(b.createdAt);
        return a > b ? -1 : a < b ? 1 : 0;
    };

    render() {
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

        

        

        let reviews = Object.values(this.props.reviews).sort((a,b) => this.byDate(a,b)).map(review => {
            return (
                <li key={review.id}>
                    <div className="single_review">
                        <div className="rssr_rating">
                            <div className='rating-and-time'>
                                <div className={formatRatings(review.rating)}>
                                </div>
                                <div className='time-stamp'>
                                    {this.formattedDate(review.createdAt)}
                                </div>
                            </div>
                            <div className="trash-div">
                                {this.props.currentUserId == review.userId ? <button onClick={() => this.props.deleteReview(review.id)} className="trash-button"><i className="far fa-trash-alt"></i></button> : ''}
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


        return (
            <div className="reviews">
                {reviews}
            </div>
        )
    }
};

export default ReviewIndex;
