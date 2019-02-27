import React from 'react';
import GreetingContainer from './greeting/greeting_conatiner';
import Splash from './Splash/splash'
import Footer from './Footer/footer'
import LoginFormContainer from './session_form/login_form_container';
import SignupFormContainer from './session_form/signup_form_container';
import { AuthRoute } from '../util/route_util';

const App = () => (
    <div>
        <h1>Kelp</h1>
        <AuthRoute exact path="/login" component={LoginFormContainer} />
        <AuthRoute exact path="/signup" component={SignupFormContainer} />
        <GreetingContainer />
        <Splash />
        <Footer />
    </div>
);

export default App;