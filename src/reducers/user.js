const defaultState = {
    currentUserId: '',
    guestUserId: '',
    settings: {
        displayLanguage: 'de-DE'
    }
};

export default (state = defaultState, action) => {
    const getNewState = (newState) => Object.assign({}, state, newState);

    const { settings, userId } = action;
    switch (action.type) {
        case 'SAVE_USER_SETTINGS': {
            return getNewState({
                settings
            });
        }
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
