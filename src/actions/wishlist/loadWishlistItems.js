import getWishlistItemsMockRepository from '../../repositories/wishlist/getWishlistItemsMockRepository';
import config from '../../config';
import getWishlistItemsRepository from "../../repositories/wishlist/getWishlistItemsRepository";

export default (currentUserId) => (dispatch) => new Promise((resolve) => {
    const { useMocks = true } = config;
    const repository = useMocks ? getWishlistItemsMockRepository(currentUserId) : getWishlistItemsRepository(currentUserId);

    repository.then((items) => {
        dispatch({
            type: 'SET_WISHLIST_ITEMS',
            items
        })

        resolve();
    });
});
