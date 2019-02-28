import React from 'react'
import GreetingContainer from '../greeting/greeting_container'
const Splash = () => {
    return (
        <div className='background-splash'>
            <div className="home">
                <GreetingContainer />
                <div className="logo-pic">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/a/ad/Yelp_Logo.svg"></img>
                </div>
            </div> 
        </div>


        // <div className="home_image">
        //     <div className="home">
        //         <GreetingContainer />
        //         <div className="home_banner">
        //             <h1>
        //                 Zelp
        // </h1>
        //         </div>
        //     </div>
        // </div>
    )
}

export default Splash;
