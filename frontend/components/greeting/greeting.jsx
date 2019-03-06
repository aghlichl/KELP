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
            <Link id="demo_button" to="/signup">Sign up!</Link>
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
