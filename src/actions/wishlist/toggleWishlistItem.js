import addWishlistItemMockRepository from '../../repositories/wishlist/addWishlistItemMockRepository';
import addWishlistItemRepository from '../../repositories/wishlist/addWishlistItemRepository';
import getCurrentUserId from '../user/getCurrentUserId';
import removeWishlistItemMockRepository from '../../repositories/wishlist/removeWishlistItemMockRepository';
import { MODULE_ID_ITEM_OVERVIEW } from '../../constants';
import config from '../../config';

export default (itemId) => (dispatch, getState) => new Promise((resolve) => {
    let state = getState();

    getCurrentUserId()(dispatch, getState).then((userId) => {
        const isItemOnWishList = !!state.wishlist.items.find((item) => itemId === item.itemId);

        const items = isItemOnWishList ? state.wishlist.items : state.informationItems;
        const item = items.find((item) => itemId === item.itemId);

        const repository =
            !isItemOnWishList
                ? (config.useMocks ?? true) ? addWishlistItemMockRepository(itemId) : addWishlistItemRepository(userId, itemId)
                : removeWishlistItemMockRepository(itemId);
        repository.then(() => {
            dispatch({
                type: isItemOnWishList ? 'REMOVE_ITEM_FROM_WISHLIST' : 'ADD_ITEM_TO_WISHLIST',
                item
            });

            state = getState();
            if (0 === state.wishlist.items.length) {
                dispatch({
                    type: 'SET_ACTIVE_MODULE',
                    activeModule: MODULE_ID_ITEM_OVERVIEW
                });
            }

            resolve();
        });
    });
});
