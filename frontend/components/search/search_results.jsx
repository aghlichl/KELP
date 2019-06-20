import SearchNavContainer from '../search/search_nav_container';
import BusinessMapContainer from '../map/map_container';
import React from 'react';
import Footer from '../Footer/footer';
import { Link } from 'react-router-dom';
import GreetingContainer from '../greeting/greeting_container';


export default class SearchResults extends React.Component {
    componentDidMount() {
        // this.props.fetchAll();
    }


    render() {
        function formatPhoneNumber(phoneNumberString) {
            var cleaned = ('' + phoneNumberString).replace(/\D/g, '')
            var match = cleaned.match(/^(\d{3})(\d{3})(\d{4})$/)
            if (match) {
                return '(' + match[1] + ') ' + match[2] + '-' + match[3]
            }
            return null
        }

        function formatRatings(avgRating){
            let classer = "";
                if(avgRating <= 1.0){
                    classer = "star-one";
                    return classer;
                }
                else if(avgRating <= 1.5){
                    classer = "star-one-five";
                    return classer;
                }
                else if(avgRating <= 2.0){
                    classer = "star-two";
                    return classer;
                }
                else if(avgRating <= 2.5){
                    classer = "star-two-five";
                    return classer;
                }
                else if(avgRating <= 3.0){
                    classer = "star-three";
                    return classer;
                }
                else if(avgRating <= 3.5){
                    classer = "star-three-five";
                    return classer;
                }
                else if(avgRating <= 4.0){
                    classer = "star-four";
                    return classer;
                }
                else if(avgRating <= 4.5){
                    classer = "star-four-five";
                    return classer;
                }
                else {
                    return "star-five";
                }
            }    
            
        
        
            return (
            <>
                 
            <div className="search_results">
                <div className="nav_center">
                    <Link to="/"><img src={window.images.logo}></img></Link>
                    <SearchNavContainer />
                    <GreetingContainer />
                </div>
                <div className="nav_left"></div>
                <div className="nav_right"> </div>
                <div className="con_left"></div>
                <div className="con_right"></div>
                        
                <div className="con_center">
                            <BusinessMapContainer />
                            <div className="results">
                    {
                        this.props.businesses.map(biz =>
                            <div className="single-result" key={biz.id}>
                                <div className='single-result-thumb'>
                                    <img src={biz.photo}></img>
                                </div>
                                {/* <div className="single-result-top-info"> */}
                                    <div className="single-result-side">
                                        <div className="single-result-side-top">
                                            <div className="single-result-side-top-left">
                                                <div className="top-img-head">
                                                    <Link to={`businesses/${biz.id}`}> <h3 className="top-img-link">{biz.name}</h3> </Link>
                                                </div>
                                                <div className="review-count">
                                                    <div className={formatRatings(biz.averageStars)}>
                                                        
                                                    </div> 
                                                    <div>
                                                    {biz.numReviews} Reviews
                                                    </div>
                                                </div>
                                                <div className="dollar-sign-cat">
                                                    <span id="dollar-sign">{biz.dollarSign}</span> {biz.category}
                                                </div>
                                            </div>
                                            <div className="single-result-side-right">
                                                <div className='single-result-phone-address'>
                                                    <div className="phone-num">
                                                        {formatPhoneNumber(biz.phone)}
                                                    </div>
                                                    <div className="address">
                                                        {biz.address} <br></br> San Francisco
                                                </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="highlight-review">
                                            <span>{biz.review.body}</span>
                                        </div>
                                    </div>

                                </div>
                        )
                    }
                    </div>
                </div>
        </div>      
    <Footer />
    </>
        )
    }
}


