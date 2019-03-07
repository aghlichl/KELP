import {
    combineReducers
} from 'redux';

import entitiesReducer from './entities_reducer';
import errorsReducer from './errors_reducer';
import sessionReducer from './session_reducer';
import reviewsReducer from './reviews_reducer';

const rootReducer = combineReducers({
    entities: entitiesReducer,
    session: sessionReducer,
    errors: errorsReducer,
    reviews: reviewsReducer
});

export default rootReducer;
