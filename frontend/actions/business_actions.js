import * as APIUtil from '../util/business_api_util';
export const RECEIVE_BUSINESSES = 'RECEIVE_BUSINESSES';
export const RECEIVE_BUSINESS = 'RECEIVE_BUSINESS';
export const RECEIVE_BACKEND_ERRORS = 'RECEIVE_BACKEND_ERRORS';
export const CLEAR_BACKEND_ERRORS = 'CLEAR_BACKEND_ERRORS';

 export const receiveBusinesses = payload => ({
    type: RECEIVE_BUSINESSES,
    payload
});
export const receiveBusiness = (payload) => {
        return(
    {
    type: RECEIVE_BUSINESS,
    payload
    }
    )
};

export const receiveErrors = errors => ({
    type: RECEIVE_BACKEND_ERRORS,
    errors
});

export const receiveClearBackendErrors = () => ({
    type: CLEAR_BACKEND_ERRORS
});

export const fetchAll = () => dispatch => (
    APIUtil.fetchAll().then(businesses => (
        dispatch(receiveBusinesses(businesses))), err => (
            dispatch(receiveErrors(err.responseJSON))
        ))
);

export const searchBusinesses = (name) => dispatch => (
    APIUtil.searchAll(name).then(businesses => (
        dispatch(receiveBusinesses(businesses))), err => (
            dispatch(receiveErrors(err.responseJSON))
            ))
);

export const fetchBusiness = (id) => dispatch => (
    APIUtil.fetchBusiness(id).then(business => (
        dispatch(receiveBusiness(business))), err => (
            dispatch(receiveErrors(err.responseJSON))
        ))
);