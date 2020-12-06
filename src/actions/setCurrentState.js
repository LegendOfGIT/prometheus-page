export default (currentState) => (dispatch) => new Promise((resolve) => {
    dispatch({
        type: 'SET_CURRENT_STATE',
        currentState
    });

    resolve();
});
