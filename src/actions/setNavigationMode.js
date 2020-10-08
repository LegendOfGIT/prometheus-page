export default (navigationMode) => (dispatch) => {
    dispatch({
        type: 'SET_NAVIGATION_MODE',
        navigationMode
    });
};
