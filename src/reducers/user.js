const defaultState = {
    currentUserId: '',
    guestUserId: ''
};

export default (state = defaultState, action) => {
    const getNewState = (newState) => Object.assign({}, state, newState);

    switch (action.type) {
        case 'SET_CURRENT_USER_ID':
            return getNewState({
                currentUserId: action.userId
            });
        default:
            return state
    }
};
