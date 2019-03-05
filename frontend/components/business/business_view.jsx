import React from 'react';
import { Link } from 'react-router-dom';

class BusinessView extends React.Component {
    constructor(props){
        super(props);
        let businessId = props.match.params.id;
        this.state = {businessId}
    }


    componentDidMount(){
        console.log(this.state)
        console.log(this.props)
        this.props.fetchBusiness(this.state.businessId);
    }

    render(){
        if (!this.props.business) return null;
        if (!this.props.business.photos) return null;
        
        return(

            <div className="business-show">
                <div className="kelp-banner"> 
                    <h1> 
                        <Link to="/">BANNER</Link>
                    </h1>
                </div>
                <h1> {this.props.business.name} </h1>
                <ul> 
                    <li> {this.props.business.category}</li>
                    <li> {this.props.business.dollar_sign}</li>
                    <li> {this.props.business.address}</li>
                    <li> {this.props.business.phone}</li>
                    <li> {this.props.business.website}</li>
                </ul>
            </div>
        )
    }
}


export default BusinessView;