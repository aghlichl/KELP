import React from 'react';
import { Link } from 'react-router-dom';

const ErrorPage = () => {
    return(
        <>
        <div className="login-nav"> <Link to="/"><img src={window.images.logo}></img></Link> </div>
        <div className="error-container">
            <div className="error-text">
                <h4><strong>404 error.</strong> Doggone it! The page <br></br> you’re looking for cannot be found.</h4> <br></br>
                    <br></br> <h3> Detective Darwin is hot on the case of the missing webpage! While <br></br> he's sniffing out the problem, you should either <strong>go home</strong> or search <br></br>for what you need below. Elementary, my dear Kelper. </h3>

            </div>
            <div className="error-gif">
                    <img src='https://s3-media1.fl.yelpcdn.com/assets/srv0/error_pages/8540db29d6b3/assets/img/detective-darwin.gif'></img>
            </div> 
        </div>
        <div className="error-footer">
        </div>
        </>
    )
};

export default ErrorPage;