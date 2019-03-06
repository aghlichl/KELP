import React from 'react';
import Splash from './Splash/splash'
import BusinessViewContainer from './business/business_view_container';
import BusinessIndexViewContainer from './business_index/business_index_view_container';
import SearchResultsContainer from './search/search_results_container'
import ErrorPage from './error/error_page';
import LoginFormContainer from './session_form/login_form_container';
import SignupFormContainer from './session_form/signup_form_container';
import { AuthRoute } from '../util/route_util';
import { Switch, Route } from 'react-router-dom';


const App = () => (
    <div>
        <Switch>
            <AuthRoute exact path="/login" component={LoginFormContainer} />
            <AuthRoute exact path="/signup" component={SignupFormContainer} />
            <Route exact path="/businesses" component={BusinessIndexViewContainer} />
            <Route exact path="/businesses/:id" component={BusinessViewContainer} />
            <Route exact path="/search" component={SearchResultsContainer} />
            <Route exact path="/" component={Splash}/>
            <Route component={ErrorPage}/>
        </Switch>
    </div>
);

export default App;