import {connect} from 'react-redux';
import {createReview, editReview} from '../../actions/review_actions';
import {fetchBusiness} from '../../actions/business_actions';
import BusinessReview from './business_review';
// import {selectUserReview} from '../../reducers/selectors';

const mapStateToProps = (state, ownProps) => {
  const business = state.entities.businesses[ownProps.match.params.id];
  const reviews = state.entities.reviews;
  const users = state.entities.users;
  const userId = state.session.id;
//   const loggedInUserReview = selectUserReview(userId, business, reviews);
  return ({business});
};

const mapDispatchToProps = dispatch => ({
  fetchBusiness: (id) => dispatch(fetchBusiness(id)),
  createReview: (review) => dispatch(createReview(review)),
  editReview: (reviewId, review) => dispatch(editReview(reviewId, review)),
});

export default connect(null, null)(BusinessReview);
