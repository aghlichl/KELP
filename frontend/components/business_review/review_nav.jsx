import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class BusinessReview extends Component {
    componentDidMount() {
    }

    render() {
        return (
            <div className="search_results">
                <div className="nav_center">
                    <Link to="/"><img src={window.images.logo}></img></Link>
                    <div className='review-nav-text'>Write a Review</div>
                    <div className='login-signup-flex'>
                        <button className="search-login"><Link to="/login"> Login</Link></button>
                        <button className="search-signup">  <Link to="/signup">Sign Up</Link></button>
                    </div>

                </div>
                <div className="nav_left"></div>
                <div className="nav_right"> </div>
                <div className="con_left"></div>
                <div className="con_right"></div>
            </div>
        );
    }
}