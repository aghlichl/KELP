import { Link } from 'react-router-dom';
import React from 'react';

const Greeting = ({ currentUser, logout, loginDemoUser }) => {
    const sessionLinks = () => (
        <nav className="home_session_links">
                <button id="demo_button"
                    onClick={loginDemoUser}>Demo
                </button>
            <Link id="login-button-splash" to="/login">Login</Link>
            <br></br>
            <Link id="sign_up_button" to="/signup">Sign up!</Link>
        </nav>
    );
    const personalGreeting = () => (
        <div className='home_session_links'>
            {/* <h2>Hi, {currentUser.email}!</h2> */}
            <img className="avatar-img" src='https://s3-media0.fl.yelpcdn.com/assets/public/user_medium_square.yelp_styleguide.yji-bf5ff8a79310030f79328ae60713730f.png'></img>
            <button id='demo_button' onClick={logout}>Log Out</button>
        </div>
    );


    return currentUser ? personalGreeting() : sessionLinks();
};


export default Greeting;
