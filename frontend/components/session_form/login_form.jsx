import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../Footer/footer'

class LoginForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: ''
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    update(field) {
        return e => this.setState({
            [field]: e.currentTarget.value
        });
    }

    handleSubmit(e) {
        e.preventDefault();
        const user = Object.assign({}, this.state);
        this.props.processForm(user);
    }

    renderErrors() {
        return (
            <ul>
                {this.props.errors.map((error, i) => (
                    <li key={`error-${i}`} className="login-error">
                        {error}
                    </li>
                ))}
            </ul>
        );
    }

    componentWillUnmount() {
        this.props.receiveClearErrors();
    }

    render() {
        return (
            <>
                <div className="login-nav"> <Link to="/"><img src="https://upload.wikimedia.org/wikipedia/commons/a/ad/Yelp_Logo.svg"></img></Link> </div>
                <div className="login-main-content">
                    <div className="login-form">
                        <form onSubmit={this.handleSubmit} className="login-form-box">
                            <div className="login-form-login-text">
                                <h2 className="login-text">Log In to Kelp</h2>
                                <br />
                                <strong>New to Kelp?</strong> 
                                <div id="signup_button">
                                    <Link to="/signup">Sign Up</Link>
                                </div>
                                
                        {this.renderErrors()}
                                <br />
                                <input id="login-form"
                                    type="text"
                                    value={this.state.email}
                                    onChange={this.update('email')}
                                    placeholder="Email"
                                />
                                <br />

                                <input id="login-form"
                                    type="password"
                                    value={this.state.password}
                                    onChange={this.update('password')}
                                    placeholder="Password"
                                />
                                <br />
                                <input className="login-button" type="submit" value="Log In" />
                            </div>
                        </form>
                    </div>
                    <div className="login-aside">
                        <img src="https://s3-media4.fl.yelpcdn.com/assets/2/www/img/7922e77f338d/signup/signup_illustration.png"></img>
                    </div>
                </div>
                <Footer />
            </>
        );
    }
}

export default LoginForm;
