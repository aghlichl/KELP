import { connect } from 'react-redux';
import ReviewIndex from './review_index';
import { receiveBusiness } from '../../actions/business_actions';
import { deleteReview } from '../../actions/review_actions';
import { withRouter } from 'react-router-dom';
import { selectBusiness , selectReviewsForBusiness } from '../../reducers/selectors';

const mapStateToProps = (state, ownProps) => {
    const businessId = parseInt(ownProps.match.params.businessId);
    const business = selectBusiness(state.entities, businessId);
    const reviews = selectReviewsForBusiness(state.entities, business);
    return {
        reviews,
        currentUserId: state.session.id
    }
};

const mapDispatchToProps = dispatch => ({
    // Should map fetchReviews to dispatch
    receiveBusiness: payload => dispatch(receiveBusiness(payload)),
    deleteReview: reviewId => dispatch(deleteReview(reviewId))
})

export default withRouter(connect(
    mapStateToProps,
    mapDispatchToProps
  )(ReviewIndex));
