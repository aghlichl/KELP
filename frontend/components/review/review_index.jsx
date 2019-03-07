import React from 'react';
import { Link } from 'react-router-dom';

class ReviewIndex extends React.Component{
    constructor(props){
        super(props);
        
    }

    render(){
        // debugger
        if (!this.props.reviews) return null

        const reviews = Object.values(this.props.reviews).map(review => {
            return(
                <div>{review.body}</div>
            )
        })
        debugger
        return(
            <div> 
                {reviews}
            </div>
        )
    }
};

export default ReviewIndex;
