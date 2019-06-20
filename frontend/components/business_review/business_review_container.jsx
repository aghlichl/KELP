
import { connect } from 'react-redux';
import {createReview, editReview} from '../../actions/review_actions';
import {fetchBusiness} from '../../actions/business_actions';
import BusinessReview from './business_review';

const mapStateToProps = (state, ownProps) => {
  const business = state.entities.businesses[ownProps.match.params.businessId];
  const reviews = state.entities.reviews;
  const users = state.entities.users;
  const userId = state.session.id;
  return ({business});
};

const mapDispatchToProps = dispatch => ({
  fetchBusiness: (id) => dispatch(fetchBusiness(id)),
  createReview: (review) => dispatch(createReview(review)),
  editReview: (reviewId, review) => dispatch(editReview(reviewId, review)),
});

export default connect(mapStateToProps, mapDispatchToProps)(BusinessReview);
