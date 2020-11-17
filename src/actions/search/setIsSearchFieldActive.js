export default (isActive) => (dispatch) => new Promise((resolve) => {
    dispatch({
        type: 'SET_SEARCH_FIELD_ACTIVE',
        isActive
    });

    resolve();
});
