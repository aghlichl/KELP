import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { signup, receiveClearErrors } from '../../actions/session_actions';
import SignupForm from './signup_form';

const mapStateToProps = ({ errors }) => ({
    errors: errors.session,
    formType: 'signup',
    navLink: <Link to="/login">log in instead</Link>,
});

const mapDispatchToProps = dispatch => ({
    processForm: (user) => dispatch(signup(user)),
    receiveClearErrors: () => dispatch(receiveClearErrors())
});

export default connect(mapStateToProps, mapDispatchToProps)(SignupForm);
