import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import ReviewNav from './review_nav';

//http://localhost:59694/#/businesses/58/review
//http://localhost:59694/#/businesses/58

export default class BusinessReview extends Component {
    constructor(props) {
        super(props);
        let businessId = props.match.params.businessId;
        this.state = {
            businessId,
            selectedRating: 0,
            hoverRating: 0,
            reviewContent: ""
        };
        
    }

    componentDidMount() {
        let businessId = this.props.match.params.businessId;
        this.props.fetchBusiness(businessId);
    }

    handleContentUpdate(event) {
        this.setState({reviewContent: event.currentTarget.value})
    }

    handleSubmit() {
        //Create review
        this.props.createReview({
            business_id: this.state.businessId,
            body: this.state.reviewContent,
            rating: this.state.selectedRating
        }).then(() => {
            console.log("inside of submit",this.props);
            this.props.history.push({
                pathname: `/businesses/${this.state.businessId}`
            })
        });
    }

    getPlaceHolderText() {
        let text = 'Your review helps others learn about great local businesses.' + '\n\n' + 'Please don\'t review this business if you received a freebie for writing this review, or if you\'re connected in any way to the owner or employees.';
        return text;
    }

    formatRatings(avgRating) {
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
        else if (avgRatingFloat <= 2.5) {
            classer = "star-two-five";
            return classer;
        }
        else if (avgRatingFloat <= 3.5) {
            classer = "star-three-five";
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

    formatClassName(rating){
        let classNameStar = "star-zero-dynamic"
        switch(rating){
            case 1:
                classNameStar = 'star-one-dynamic'
                break;
            case 2:
                classNameStar = 'star-two-dynamic'
                break;
            case 3:
                classNameStar = 'star-three-dynamic'
                break;
            case 4:
                classNameStar = 'star-four-dynamic'
                break;
            case 5:
                classNameStar = 'star-five-dynamic'
                break;
        }
        return classNameStar;
    }
    
    formatRatingText(rating){
        let ratingText = "Select your rating"
        switch(rating){
            case 1:
                ratingText = 'Eek! Methinks not.'
                break;
            case 2:
                ratingText = "Meh. I've experienced better."
                break;
            case 3:
                ratingText = 'A-OK.'
                break;
            case 4:
                ratingText = "Yay. I'm a fan."
                break;
            case 5:
                ratingText = "Woohoo! As good as it gets!"
                break;
        }
        return ratingText;
    }

  

    render() {
        let businessId = this.props.match.params.businessId;
        if (this.props.business === undefined) return null;

        return (
            <>
                <ReviewNav/>
                <div className="review-grid">
                    <div className='review-form-left'></div>
                    <div className='review-form-center'>
                        <h2 className='review-business-name'>
                            <Link id='review-business-link' key={businessId} to={`/businesses/${businessId}`} >
                                {this.props.business.name}
                            </Link>
                        </h2>
                        <div className='review-total'>
                            <div className='dynamic-rating-total'>
                                <div className='dynamic-ratings'>
                                    <div onClick={() => this.setState({ selectedRating: 1 })} onMouseOver={() => this.setState({ hoverRating: 1 })} onMouseOut={() => this.setState({ hoverRating: this.state.selectedRating })} className={this.state.hoverRating <= 0 ? 'star-zero-dynamic' : `${this.formatClassName(this.state.hoverRating)}`}>
                                        
                                    </div>

                                    <div onClick={() => this.setState({ selectedRating: 2 })} onMouseOver={() => this.setState({ hoverRating: 2 })} onMouseOut={() => this.setState({ hoverRating: this.state.selectedRating })} className={this.state.hoverRating <= 1 ? 'star-zero-dynamic' : `${this.formatClassName(this.state.hoverRating)}`}>

                                    </div>

                                    <div onClick={() => this.setState({ selectedRating: 3 })} onMouseOver={() => this.setState({ hoverRating: 3 })} onMouseOut={() => this.setState({ hoverRating: this.state.selectedRating })} className={this.state.hoverRating <= 2 ? 'star-zero-dynamic' : `${this.formatClassName(this.state.hoverRating)}`}>

                                    </div>

                                    <div onClick={() => this.setState({ selectedRating: 4 })} onMouseOver={() => this.setState({ hoverRating: 4 })} onMouseOut={() => this.setState({ hoverRating: this.state.selectedRating })} className={this.state.hoverRating <= 3 ? 'star-zero-dynamic' : `${this.formatClassName(this.state.hoverRating)}`}>

                                    </div>

                                    <div onClick={() => this.setState({ selectedRating: 5 })} onMouseOver={() => this.setState({ hoverRating: 5 })} onMouseOut={() => this.setState({ hoverRating: this.state.selectedRating })} className={this.state.hoverRating <= 4 ? 'star-zero-dynamic' : `${this.formatClassName(this.state.hoverRating)}`}>

                                    </div>
                                </div>

                                <div className='rating-description'>
                                    {this.formatRatingText(this.state.hoverRating)}
                                </div>
                            </div>
                            <textarea onChange={(e) => this.handleContentUpdate(e)} className='review-form-body' placeholder={this.getPlaceHolderText()}>

                            </textarea>
                            <div className='review-spacer'>

                            </div>
                        </div>
                        <button className="review-post" onClick={() => this.handleSubmit()}>Post Review</button>
                    </div>
                    <div className='review-form-right'></div>
                </div>
            </>
        );
    }
}