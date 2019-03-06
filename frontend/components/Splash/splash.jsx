import React from 'react'
import SearchContainer from '../search/search_container'
import Footer from '../Footer/footer'
import BusinessIndex from '../business_index/business_index_view_container'
import GreetingContainer from '../greeting/greeting_container'

const Splash = () => {
    return (
          <div className='splash'>
          <div id="background">
            <div className="splash-content-container">
                <GreetingContainer />
                <div className="splash-logo-search">
                    <div className="logo-pic">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/a/ad/Yelp_Logo.svg"></img>
                    </div>         
                    <SearchContainer />
                  </div>
              </div>
            </div>

            <div>
                <BusinessIndex />
            </div>

            <div>
                <Footer /> 
            </div>
        </div>
        )
}

export default Splash;
