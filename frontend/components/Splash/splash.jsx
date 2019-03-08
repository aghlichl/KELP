import React from 'react'
import SearchContainer from '../search/search_container'
import BusinessIndex from '../business_index/business_index_view_container'
import GreetingContainer from '../greeting/greeting_container'
import Footer from '../Footer/footer'


const Splash = () => {
    // const splashImages = ['yelp_splash_1', 'yelp_splash_2', 'yelp_splash_3'];
    // const randomImage = splashImages[Math.floor(Math.random() * splashImages.length)];

    // setTimeout(() => {
        // debugger
        // $('#background').css({
        //     'background-image': `url(${window.images[randomImage]})`
        // });
    // }, 0)

    // window.backgroundImage = window.images[randomImage];
    return (
        <>
          <div className='splash'>
          <div id="background">
            <div className="splash-content-container">
                <GreetingContainer />
                <div className="splash-logo-search">
                    <div className="logo-pic">
                        <img src={window.images.logo}></img>
                    </div>         
                    <SearchContainer />
                  </div>
              </div>
            </div>

            <div>
                <BusinessIndex />
            </div>
        </div>
        <Footer />
        </>
        )
}

export default Splash;
