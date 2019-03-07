import { connect } from 'react-redux';
import ReviewIndex from './review_index';
import { receiveBusiness } from '../../actions/business_actions';

const mapStateToProps = (state, ownProps) => {
    return {
        reviews: state.entities.reviews
    }
};

const mapDispatchToProps = dispatch => ({
    // Should map fetchReviews to dispatch
    receiveBusiness: payload => dispatch(receiveBusiness(payload))
})

export default connect(mapStateToProps, mapDispatchToProps)(ReviewIndex);