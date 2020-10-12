import getCurrentUserIdMockRepository from '../../repositories/user/getCurrentUserIdMockRepository';

export default (itemId) => (dispatch, getState) => new Promise((resolve) => {
    getCurrentUserIdMockRepository(dispatch).then((currentUserId) => {
        const state = getState();

        const isItemOnWishList = () => !!state.wishlist.items.find((item) => itemId === item.itemId);

        dispatch({
            type: isItemOnWishList() ? 'REMOVE_ITEM_FROM_WISHLIST' : 'ADD_ITEM_TO_WISHLIST',
            itemId
        });

        resolve();
    });
});
