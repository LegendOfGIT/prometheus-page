export default (dispatch) => new Promise((resolve) => {
    const userId = '123';
    dispatch({
        type: 'SET_CURRENT_USER_ID',
        userId
    });
    resolve(userId);
});
