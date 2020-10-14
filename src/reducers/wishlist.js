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
            items = items.filter((item) => action.item.itemId !== item.itemId);
            return getNewState({
                items
            });
        case 'SET_WISHLIST_ITEMS':
            return getNewState({
                items: action.items
            });
        default:
            return state
    }
};
