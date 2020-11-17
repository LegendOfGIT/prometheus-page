const defaultState = {
    isSearchFieldActive: false
};

export default (state = defaultState, action) => {
    const getNewState = (newState) => Object.assign({}, state, newState);

    const { isActive } = action;
    switch (action.type) {
        case 'SET_SEARCH_FIELD_ACTIVE':
            return getNewState({
                isSearchFieldActive: isActive
            });
        default:
            return state
    }
};
