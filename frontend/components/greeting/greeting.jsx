import { Link } from 'react-router-dom';
import React from 'react';

const Greeting = ({ currentUser, logout, loginDemoUser }) => {
    const sessionLinks = () => (
        <nav className="home_session_links">
            <Link to="/login">Login</Link>
            <br></br>
            <Link id="signup_button" to="/signup">Sign up!</Link>
            <button onClick={ loginDemoUser }>Demo</button>
        </nav>
    );
    const personalGreeting = () => (
        <div>
            <h2>Hi, {currentUser.email}!</h2>
            <button onClick={logout}>Log Out</button>
        </div>
    );


    return currentUser ? personalGreeting() : sessionLinks();
};


export default Greeting;
