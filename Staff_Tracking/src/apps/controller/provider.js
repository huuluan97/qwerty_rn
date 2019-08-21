
import { combineReducers } from 'redux';
import { reducer as reduxFormReducer } from 'redux-form';

//distributor reducer in project
export default combineReducers({
    form: reduxFormReducer,
    
})