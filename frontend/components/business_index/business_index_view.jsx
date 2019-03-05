import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class BusinessIndex extends Component {
    componentDidMount() {
        console.log(this.props)
        this.props.fetchAll();
    }

    render() {
        return (
            <div className="business-index">
                <h1>Top Businesses</h1>
                <div className="business-index-container">
                    {
                        this.props.businesses.map(biz =>
                            <div className="business-index-item" key={biz.id}>
                                <Link to={`businesses/${biz.id}`}>{biz.name}</Link>
                                <div>{biz.dollar_sign}</div>
                            </div>
                        )
                    }
                </div>
            </div>
        );
    }
}