
    
import * as ReviewApiUtil from '../util/review_api_util'; 

export const RECEIVE_REVIEW = 'RECEIVE_REVIEW';
export const REMOVE_REVIEW = 'REMOVE_REVIEW';

export const receiveReview = ( review ) => ({
    type: RECEIVE_REVIEW,
    review
});

export const removeReview = business => ({
    type: REMOVE_REVIEW,
    review: business.review
});

export const createReview = review => dispatch => (
    ReviewApiUtil.createReview(review)
        .then(review => dispatch(receiveReview(review)))
);

export const deleteReview = id => dispatch => (
    ReviewApiUtil.deleteReview(id)
        .then(payload => dispatch(removeReview(payload)))
);