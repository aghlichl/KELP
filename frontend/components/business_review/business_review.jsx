import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class BusinessReview extends Component {
    componentDidMount() {
        console.log(this.props)
    }

    render() {
        return (
            <div> 
               <h1>Write your review thanks.</h1>
            </div>
        );
    }
}