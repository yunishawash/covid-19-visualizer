import {combineReducers} from 'redux';

 function intervalReducer(interval = 90, action){
    switch(action.type) {
        case 'CHANGE_INTERVAL': {
            return action.payload;
        }break;
        default: {
            return interval
        }
    }
}

export default combineReducers({
    interval: intervalReducer
});