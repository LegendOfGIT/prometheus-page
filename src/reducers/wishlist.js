const defaultState = {
    items: []
};

export default (state = defaultState, action) => {
    const getNewState = (newState) => Object.assign({}, state, newState);

    let { items } = state;
    switch (action.type) {
        case 'ADD_ITEM_TO_WISHLIST':
            items.push(action.item);
            return getNewState({
                items
            });
        case 'REMOVE_ITEM_FROM_WISHLIST':
            items = items.filter((item) => action.item._id !== item._id);
            return getNewState({
                items
            });
        default:
            return state
    }
};
