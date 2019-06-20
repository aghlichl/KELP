import merge from 'lodash/merge';

import { RECEIVE_BUSINESS } from '../actions/business_actions';
import { RECEIVE_REVIEW, REMOVE_REVIEW } from '../actions/review_actions';

const reviewsReducer = (oldState = {}, action) => {
    Object.freeze(oldState);
    let newState = null;
    switch (action.type) {
        case RECEIVE_BUSINESS:
            return merge({}, oldState, action.payload.reviews);
        case REMOVE_REVIEW:
            /*
                {"id":151,
                "body":"dsjkfasfjl",
                "rating":2,
                "user_id":1,
                "business_id":58,
                "created_at":"2019-06-15T02:06:18.587Z",
                "updated_at":"2019-06-15T02:06:18.587Z"}
            */
            console.log("in the reducer", action);
            newState = merge({}, oldState);
            delete newState[action.payload.id];
            return newState;
        case RECEIVE_REVIEW:
            
            newState = merge({}, oldState);
            delete newState[action.review.id];
            //return merge({}, state, {[action.payload.review.id]: action.payload.review});

            
            return newState;
        default:
            return oldState;
    }
}

export default reviewsReducer;