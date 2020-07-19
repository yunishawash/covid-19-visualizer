
export const ActionChangeInterval = (interval) => async dispatch => {
    dispatch({
        type: 'CHANGE_INTERVAL',
        payload: interval
    });
}// return
