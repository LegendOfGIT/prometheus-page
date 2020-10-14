const defaultState = {
    currentUserId: '',
    guestUserId: ''
};

export default (state = defaultState, action) => {
    const getNewState = (newState) => Object.assign({}, state, newState);

    const { userId } = action;
    switch (action.type) {
        case 'SET_CURRENT_USER_ID':
            return getNewState({
                currentUserId: userId
            });
        case 'SET_GUEST_USER_ID':
            return getNewState({
                guestUserId: userId
            });
        default:
            return state
    }
};
