import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class BusinessIndex extends Component {
    componentDidMount() {
        console.log(this.props)
        this.props.fetchAll();
    }

    render() {
        return (
            <>
            <div className="business-index">
                <div className='business-index-header'>
                    <h1>Find the Best Businesses in Town</h1>
                </div>

                <div className="business-index-container">
                    {
                        this.props.businesses.slice(0,3).map(biz =>
                            <Link to={`businesses/${biz.id}`}>
                                <div className="business-index-item" key={biz.id}>
                                    <div className='top-img-div'>
                                        <img className="top-img" src={biz.photo}></img> 
                                    </div>
                                    <div className="top-img-head-2">
                                        <h3 className="top-img-link-2">{biz.name}</h3>
                                    </div>
                                </div>
                            </Link>
                    )
                }
                </div>
            </div>
            </>
        );
    }
}