import React from 'react'
import Search from '../search/search'
import GreetingContainer from '../greeting/greeting_container'
const Splash = () => {
    return (
        
          <div id="background">
            <div className="splash-content-container">
                <GreetingContainer />
                <div className="splash-logo-search">
                    <div className="logo-pic">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/a/ad/Yelp_Logo.svg"></img>
                    </div>         
                    <Search />
                  </div>
              </div>
            </div>
    )
}

export default Splash;
