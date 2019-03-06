import SearchContainer from '../search/search_container'
import React from 'react';
import {Link} from 'react-router-dom'


export default class SearchResults extends React.Component {
    componentDidMount() {
    }

    
    render(){
        
        return(
            <>
            <SearchContainer />
                <div className="search-results">
                    {
                        this.props.businesses.map(biz =>
                            <div className="business-index-item" key={biz.id}>
                                <div className='top-img-div'>
                                    <img className="top-img" src={biz.photo}></img>
                                </div>
                                <div className="top-img-head">
                                    <Link to={`businesses/${biz.id}`}> <h3 className="top-img-link">{biz.name}</h3> </Link>
                                </div>
                            </div>
                        )
                    }
                </div>
            </>
        )
    }

}


