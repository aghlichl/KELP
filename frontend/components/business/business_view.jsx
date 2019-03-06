import React from 'react';
import SearchContainer from '../search/search_container';
import { Link } from 'react-router-dom';

class BusinessView extends React.Component {
    constructor(props) {
        super(props);
        let businessId = props.match.params.id;
        this.state = { businessId };
    }

    componentDidMount() {
        this.props.fetchBusiness(this.state.businessId);
    }

    render() {
        if (!this.props.business) return null;
        if (!this.props.business.photoUrls) return null;

        const business = this.props.business;

        return (
            <>
            <div className="login-nav"> <SearchContainer /> <Link to="/"><img src="https://upload.wikimedia.org/wikipedia/commons/a/ad/Yelp_Logo.svg"></img></Link> </div>
            <div className="business-view-view">
                <div className="business-view">
                    <div className="info">
                        <h1>{business.name}</h1>
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
                                    <i class="fas fa-map-marker-alt"></i> {business.address}
                            </address>
                                <div>
                                    <i class="fas fa-external-link-alt"></i> <a href={business.website}>{business.website}</a>
                                </div>
                            <div>
                                    <i class="fas fa-directions"></i> <a href={business.website}>Get Directions</a>
                            </div>
                            <div>
                                <i class="fas fa-phone"></i> {business.phone}
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
                        <h1>
                            Reviews coming soon!
            </h1>
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