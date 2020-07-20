
export const ActionChangeInterval = (interval) => async dispatch => {
    // change interval action
    dispatch({
        type: 'CHANGE_INTERVAL',
        payload: interval
    });
}
