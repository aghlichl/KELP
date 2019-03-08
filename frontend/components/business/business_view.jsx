import React from 'react';
import ReviewIndexContainer from '../review/review_index_container'
import SearchNavContainer from '../search/search_nav_container';
import { Link } from 'react-router-dom';

class BusinessView extends React.Component {
    constructor(props) {
        super(props);
        let businessId = props.match.params.businessId;
        this.state = { businessId };
    }

    

    componentDidMount() {
        this.props.fetchBusiness(this.state.businessId);
    }

    render() {
        if (!this.props.business) return null;
        if (!this.props.business.photoUrls) return null;
        if(!this.props.reviews) return null;

        const business = this.props.business;

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
        
        
        return (
            <>
            <div className="search_results">
                <div className="nav_center">
                    <Link to="/"><img src={window.images.logo}></img></Link>
                    <SearchNavContainer />
                    <button className="search-login"><Link to="/login"> Login</Link></button>
                    <button className="search-signup">  <Link to="/signup">Sign Up</Link></button>

                </div>
                <div className="nav_left"></div>
                <div className="nav_right"> </div>
                <div className="con_left"></div>
                <div className="con_right"></div>
            </div>
            <div className="business-view-view">
                <div className="business-view">
                    <div className="left-b"></div>
                    <div className="right-b"></div>
                    <div className="info">
                        <h1>{business.name}</h1>
                            <div className="review-count">
                                <div className={formatRatings(business.averageStars)}>
                                    
                                </div>
                                <div>       {`  ${business.numReviews} Reviews`}
                                                    </div>
                            </div>
                        <div className="price">
                            {business.priceRange}
                        </div>
                    </div>
                    <div className="review">
                        <button>
                            <i className="fas fa-star"></i>
                            &nbsp;
                            Write a Review
                        </button>
                    </div>
                    <div className="map">
                        <div id="actual-map">
                                <img src="http://tinyurl.com/yy4yggpz"></img>
                        </div>
                        <div className="map-info"> 
                            <address>
                                    <i className="fas fa-map-marker-alt"></i> {business.address}
                            </address>
                                <div>
                                    <i className="fas fa-external-link-alt"></i> <a href={business.website}>{business.website}</a>
                                </div>
                            <div>
                                    <i className="fas fa-directions"></i> <a href={business.website}>Get Directions</a>
                            </div>
                            <div className='rotate-phone'>
                                <i className="fas fa-phone"></i> {business.phone}
                            </div>
                        
                        </div>

                    </div>
                    <div className="images">
                        {business.photoUrls.map(url => (
                            <img src={url} alt="" key={url} />
                        ))}
                    </div>
                    <div className="right"></div>
                    <div className="left"></div>

                    <div className="reviews">
                        <ReviewIndexContainer />
                    </div>
                    <div className="aside">
                            <div className="hours">
                                <table>
                                    <tr>
                                        <th>Hours</th>
                                    </tr>
                                    <tr>
                                        <td><strong>Mon</strong> </td> <td id="table-times">10:00 am - 8:00 pm</td>
                                    </tr>
                                    <tr>
                                        <td><strong>Tues</strong> </td> <td id="table-times">10:00 am - 8:00 pm</td>
                                    </tr>
                                    <tr>
                                        <td><strong>Wed</strong> </td> <td id="table-times">10:00 am - 8:00 pm</td>
                                    </tr>
                                    <tr>
                                        <td><strong>Thurs</strong> </td> <td id="table-times">10:00 am - 8:00 pm</td>
                                    </tr>
                                    <tr>
                                        <td><strong>Fri</strong> </td> <td id="table-times">10:00 am - 8:00 pm</td>
                                    </tr>
                                    <tr>
                                        <td><strong>Sat</strong> </td> <td id="table-times">10:00 am - 7:00 pm</td>
                                    </tr>
                                    <tr>
                                        <td><strong>Sun</strong> </td> <td>Closed</td>
                                    </tr>
                                </table>
                            </div>

                            <div className="business-info">
                                <table>
                                    <tr>
                                        <th>More Business Info</th>
                                    </tr>
                                    <tr>
                                         <td id='business-info-att'> Liked by Vegetarians  <strong>Yes</strong></td>
                                    </tr>
                                    <tr>
                                         <td id='business-info-att'> Takes Reservations <strong>Yes</strong></td>
                                    </tr>
                                    <tr>
                                         <td id='business-info-att'> Delivery <strong>Yes</strong></td>
                                    </tr>
                                    <tr>
                                         <td id='business-info-att'> Takeout  <strong>Yes</strong></td>
                                    </tr>
                                    <tr>
                                         <td id='business-info-att'> Accepts Credit Cards <strong>Yes</strong></td>
                                    </tr>
                                    <tr>
                                         <td id='business-info-att'> Accepts Apple Pay <strong>Yes</strong></td>
                                    </tr>
                                    <tr>
                                         <td id='business-info-att'>Good For <strong>Lunch</strong></td>
                                    </tr>
                                    <tr>
                                        <td id='business-info-att'> Parking  <strong>Validated</strong></td>
                                    </tr>
                                    <tr>
                                        <td id='business-info-att'> Bike Parking <strong>Yes</strong></td>
                                    </tr>
                                    <tr>
                                        <td id='business-info-att'> Wheelchair Accessible <strong>Yes</strong></td>
                                    </tr>
                                    <tr>
                                        <td id='business-info-att'> Good for Kids <strong>Yes</strong></td>
                                    </tr>
                                    <tr>
                                        <td id='business-info-att'> Good for Groups <strong>Yes</strong></td>
                                    </tr>
                                    <tr>
                                        <td id='business-info-att'> Attire <strong>Casual</strong></td>
                                    </tr>
                                    <tr>
                                        <td id='business-info-att'> Ambience  <strong>Casual</strong></td>
                                    </tr>
                                    <tr>
                                        <td id='business-info-att'> Noise Level  <strong>Average</strong></td>
                                    </tr>
                                    <tr>
                                        <td id='business-info-att'> Alcohol  <strong>No</strong></td>
                                    </tr>
                                    <tr>
                                        <td id='business-info-att'> Good For Happy Hour <strong>No</strong></td>
                                    </tr>
                                    <tr>
                                        <td id='business-info-att'> Outdoor Seating <strong>Yes</strong></td>
                                    </tr>
                                    <tr>
                                        <td id='business-info-att'> Wi-Fi <strong>Free</strong></td>
                                    </tr>
                                    <tr>
                                        <td id='business-info-att'> Has TV <strong>Yes</strong></td>
                                    </tr>
                                    <tr>
                                        <td id='business-info-att'> Dogs Allowed <strong>No</strong></td>
                                    </tr>
                                    <tr>
                                        <td id='business-info-att'> Waiter Service <strong>No</strong></td>
                                    </tr>
                                </table>
                            </div>
                    </div>

                </div>

            </div>
            </>
        );
    }
}

export default BusinessView;