export default (activeModule) => (dispatch) => {
    dispatch({
        type: 'SET_ACTIVE_MODULE',
        activeModule
    });
};
