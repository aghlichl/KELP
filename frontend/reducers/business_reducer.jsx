import { RECEIVE_BUSINESSES, RECEIVE_BUSINESS } from '../actions/business_actions';
import { REMOVE_REVIEW } from '../actions/review_actions';
import merge from 'lodash/merge';

const businessReducer = (state = {}, action) => {
    Object.freeze(state);
    let newState = null;
    switch (action.type) {
        case RECEIVE_BUSINESSES:
            return action.payload;
        case RECEIVE_BUSINESS:
            return merge({}, state, { [action.payload.business.id]: action.payload.business });

        case REMOVE_REVIEW:
            newState = merge({}, state);
            newState[action.payload.business_id].reviewIds = newState[action.payload.business_id].reviewIds.filter(businessId => businessId !== action.payload.id);
            return newState;


        default:
            return state;
    }
};

export default businessReducer;