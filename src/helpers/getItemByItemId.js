export default (state, itemId = '') => {
    return state.informationItems.find((item) => itemId === item.itemId) || state.wishlist.items.find((item) => itemId === item.itemId);
};
