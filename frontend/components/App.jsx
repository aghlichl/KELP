import React from 'react';
import Footer from './Footer/footer'
import Splash from './Splash/splash'
import BusinessViewContainer from './business/business_view_container';
import BusinessIndexViewContainer from './business_index/business_index_view_container';
import ErrorPage from './error/error_page';
import LoginFormContainer from './session_form/login_form_container';
import SignupFormContainer from './session_form/signup_form_container';
import { AuthRoute } from '../util/route_util';
import { Switch, Route } from 'react-router-dom';


const App = () => (
    <div>
            <Route exact path="/" component={Splash}/>
        <Switch>
            <AuthRoute exact path="/login" component={LoginFormContainer} />
            <AuthRoute exact path="/signup" component={SignupFormContainer} />
            <Route exact path="/businesses/:id" component={BusinessViewContainer} />
            <Route exact path="/businesses" component={BusinessIndexViewContainer} />
            <Route component={ErrorPage}/>
        </Switch>
        <Route path="/" component={Footer} />
    </div>
);

export default App;