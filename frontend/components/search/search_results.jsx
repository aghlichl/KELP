import SearchNavContainer from '../search/search_nav_container'
import React from 'react';
import {Link} from 'react-router-dom';


export default class SearchResults extends React.Component {
    componentDidMount() {
    }

    
    render(){
        
        return(
            <div className="search_results"> 
                <div className="nav_center">  
                    <Link to="/"><img src="https://upload.wikimedia.org/wikipedia/commons/a/ad/Yelp_Logo.svg"></img></Link> 
                    <SearchNavContainer />
                    <button className="search-login"><Link to="/login"> Login</Link></button>
                    <button className="search-signup">  <Link to="/signup">Sign Up</Link></button>
            
                </div>
                <div className="nav_left"></div>
                <div className="nav_right"> </div>
                <div className="con_left"></div>
                <div className="con_right"></div>


                <div className="con_center">
                    {
                        this.props.businesses.map(biz =>
                            <div className="single-result" key={biz.id}>
                                <div className='single-result-thumb'>
                                    <img src={biz.photo}></img>
                                </div>
                                <div className="single-result-side">
                                    <div className="single-result-side-top">
                                        <div className="top-img-head">
                                            <Link to={`businesses/${biz.id}`}> <h3 className="top-img-link">{biz.name}</h3> </Link>
                                        </div>
                                        <div className="review-count">
                                            <img src="https://www.brewensinfinityexperiences.com/wp-content/uploads/2014/03/Yelp-5-stars-300x59.png"></img> 1071 reviews
                                        </div>
                                        <div className="dollar-sign-cat">
                                            <span id="dollar-sign">{biz.dollar_sign}</span> {biz.category}
                                        </div>
                                    </div>
                                    
                                    <div className='single-result-address'>
                                        {biz.address}
                                    </div>
                                </div>
                                
                            </div>
                            

                        )
                    }
                </div>
            </div>
        )
    }

}


