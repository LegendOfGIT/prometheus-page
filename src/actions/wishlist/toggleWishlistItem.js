import getCurrentUserIdMockRepository from '../../repositories/user/getCurrentUserIdMockRepository';

export default (itemId) => (dispatch, getState) => new Promise((resolve) => {
    getCurrentUserIdMockRepository(dispatch).then((currentUserId) => {
        const state = getState();

        const isItemOnWishList = () => !!state.wishlist.items.find((item) => itemId === item._id);

        const items = isItemOnWishList() ? state.wishlist.items : state.informationItems;
        const item = items.find((item) => itemId === item._id);
        dispatch({
            type: isItemOnWishList() ? 'REMOVE_ITEM_FROM_WISHLIST' : 'ADD_ITEM_TO_WISHLIST',
            item
        });

        resolve();
    });
});
