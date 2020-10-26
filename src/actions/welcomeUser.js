import getCurrentUserId from './user/getCurrentUserId';
import initializeUserIdsFromStorage from './user/initializeUserIdsFromStorage';
import storageStub from '../storage/storageStub';
import loadWishlistItems from "./wishlist/loadWishlistItems";

const storage = sessionStorage || storageStub;

export default () => (dispatch, getState) => new Promise((resolve) => {
    storage.setItem('prometheusFirstVisit', 'false');

    initializeUserIdsFromStorage()(dispatch);
    getCurrentUserId()(dispatch, getState).then((currentUserId) => {
        loadWishlistItems(currentUserId)(dispatch);
    });

    resolve();
});
