import {combineReducers} from 'redux';

 function intervalReducer(interval = 90, action){
    // return the inteval value from the action 
    switch(action.type) {
        case 'CHANGE_INTERVAL': {
            return action.payload;
        } break;
        default: {
            return interval
        }
    }
}

export default combineReducers({
    interval: intervalReducer
});