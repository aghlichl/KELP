import React from 'react';
import Footer from './Footer/footer'
import Splash from './Splash/splash'
import BusinessIndex from './business/business_index'
import LoginFormContainer from './session_form/login_form_container';
import SignupFormContainer from './session_form/signup_form_container';
import { AuthRoute } from '../util/route_util';
import { Switch, Route } from 'react-router-dom';


const App = () => (
    <div>
        <Route exact path="/" component={Splash}/>
        <Route exact path="/" component={BusinessIndex}/>
        <AuthRoute exact path="/login" component={LoginFormContainer} />
        <AuthRoute exact path="/signup" component={SignupFormContainer} />
        <Footer />
    </div>
);

export default App;