import getWishlistItemsMockRepository from '../../repositories/wishlist/getWishlistItemsMockRepository';

export default (currentUserId) => (dispatch) => new Promise((resolve) => {
    getWishlistItemsMockRepository(currentUserId).then((items) => {
        dispatch({
            type: 'SET_WISHLIST_ITEMS',
            items
        })

        resolve();
    });
});
