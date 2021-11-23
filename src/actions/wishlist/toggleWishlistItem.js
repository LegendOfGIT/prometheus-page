import addWishlistItemMockRepository from '../../repositories/wishlist/addWishlistItemMockRepository';
import addWishlistItemRepository from '../../repositories/wishlist/addWishlistItemRepository';
import getCurrentUserId from '../user/getCurrentUserId';
import removeWishlistItemRepository from '../../repositories/wishlist/removeWishlistItemRepository';
import removeWishlistItemMockRepository from '../../repositories/wishlist/removeWishlistItemMockRepository';
import addActivityRepository from '../../repositories/activities/addActivityRepository';
import { ACTIVITY_ID_ADD_TO_WISHLIST, ACTIVITY_ID_REMOVE_FROM_WISHLIST } from '../../repositories/activities/addActivityRepository';
import { MODULE_ID_ITEM_OVERVIEW } from '../../constants';
import config from '../../config';

export default (itemId) => (dispatch, getState) => new Promise((resolve) => {
    let state = getState();

    getCurrentUserId()(dispatch, getState).then((userId) => {
        const isItemOnWishList = !!state.wishlist.items.find((item) => itemId === item.itemId);

        const items = isItemOnWishList ? state.wishlist.items : state.informationItems;
        const item = items.find((item) => itemId === item.itemId);

        const { useMocks = true } = config;

        const repository =
            !isItemOnWishList
                ? useMocks ? addWishlistItemMockRepository(itemId) : addWishlistItemRepository(userId, itemId)
                : useMocks ? removeWishlistItemMockRepository(itemId) : removeWishlistItemRepository(userId, itemId);

        repository.then(() => {
            dispatch({
                type: isItemOnWishList ? 'REMOVE_ITEM_FROM_WISHLIST' : 'ADD_ITEM_TO_WISHLIST',
                item
            });

            addActivityRepository({
                activityId: isItemOnWishList ? ACTIVITY_ID_REMOVE_FROM_WISHLIST : ACTIVITY_ID_ADD_TO_WISHLIST,
                userId,
                itemId
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
