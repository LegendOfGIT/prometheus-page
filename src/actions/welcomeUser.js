import getCurrentUserId from './user/getCurrentUserId';
import initializeUserIdsFromStorage from './user/initializeUserIdsFromStorage';
import storageStub from '../storage/storageStub';
import loadUserSettingsFromRepository from './settings/loadUserSettingsFromRepository';
import loadWishlistItems from "./wishlist/loadWishlistItems";

const storage = sessionStorage || storageStub;

export default () => (dispatch, getState) => new Promise((resolve) => {
    storage.setItem('prometheusFirstVisit', 'false');

    initializeUserIdsFromStorage()(dispatch);
    getCurrentUserId()(dispatch, getState).then((currentUserId) => {
        loadWishlistItems(currentUserId)(dispatch);
        loadUserSettingsFromRepository(currentUserId)(dispatch);
    });

    resolve();
});
