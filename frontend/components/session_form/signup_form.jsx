import React from 'react';
import { Link } from 'react-router-dom';

class SignupForm extends React.Component {
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
                                <h2 id="sign-up-up" className="login-text">Sign Up for Kelp</h2>
                                <br />
                                {this.renderErrors()}
                            </div>
                            <div className="login-form">
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
                                <input className="login-button" type="submit" value="Sign Up" />
                                <span className="sign-up-log-in">Already on Kelp? <a href="#/login">log in</a> </span>
                            </div>
                        </form>
                    </div>
                    <div className="login-aside">
                        <img src="https://s3-media4.fl.yelpcdn.com/assets/2/www/img/7922e77f338d/signup/signup_illustration.png"></img>
                    </div>
                </div>
            </>
        );
    }
}

export default SignupForm;
