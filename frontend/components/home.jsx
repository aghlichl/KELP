import React from 'react';
import GreetingContainer from './greeting/greeting_container';
import Splash from './Splash/splash'

const Home = () => (
    <>
    <div className="everything">
        <Splash />
        <GreetingContainer />
        <div className="home">
            <div className="home_banner">
            </div>
        </div>
    </div>
    </>
);

export default Home;