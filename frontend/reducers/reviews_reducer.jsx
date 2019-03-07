import merge from 'lodash/merge';

import { RECEIVE_BUSINESS } from '../actions/business_actions';
import { RECEIVE_REVIEW, REMOVE_REVIEW } from '../actions/review_actions';

const reviewsReducer = (oldState = {}, action) => {
    Object.freeze(oldState);
    switch (action.type) {
        case RECEIVE_BUSINESS:
            return merge({}, oldState, action.payload.reviews);
        case REMOVE_REVIEW:
            const newState = merge({}, oldState);
            delete newState[action.review.id];
            return newState;
        default:
            return oldState;
    }
}

export default reviewsReducer;