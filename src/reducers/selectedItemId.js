const defaultState = '';

export default (state = defaultState, action) => {
    let { itemId } = action;
    switch (action.type) {
        case 'SET_SELECTED_ITEM_ID':
            return itemId;
        default:
            return state
    }
};
