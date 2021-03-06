import * as ReviewApiUtil from '../util/review_api_util'; 

export const RECEIVE_REVIEW = 'RECEIVE_REVIEW';
export const REMOVE_REVIEW = 'REMOVE_REVIEW';

export const receiveReview = ( review ) => ({
    type: RECEIVE_REVIEW,
    review
});

export const removeReview = payload => ({
    type: REMOVE_REVIEW,
    payload
});

export const createReview = review => dispatch => (
    ReviewApiUtil.createReview(review)
        .then(review => dispatch(receiveReview(review)))
);

export const deleteReview = id => dispatch => (
    ReviewApiUtil.deleteReview(id)
        .then(payload => dispatch(removeReview(payload)))
);

export const editReview = (reviewId, review) => dispatch => (
    ReviewApiUtil.updateReview(reviewId, review)
        .then(review => dispatch(receiveReview(review)))
);
