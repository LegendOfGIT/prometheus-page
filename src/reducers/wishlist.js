const defaultState = {
    items: []
};

export default (state = defaultState, action) => {
    const getNewState = (newState) => Object.assign({}, state, newState);

    let { items } = state;
    switch (action.type) {
        case 'ADD_ITEM_TO_WISHLIST':
            items.push({ itemId: action.itemId });
            return getNewState({
                items
            });
        case 'REMOVE_ITEM_FROM_WISHLIST':
            items = items.filter((item) => action.itemId !== item.itemId);
            return getNewState({
                items
            });
        default:
            return state
    }
};
