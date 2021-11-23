import storageStub from '../../storage/storageStub';

export const ACTIVITY_ID_ADD_TO_WISHLIST = 'item-added-to-wishlist';
export const ACTIVITY_ID_DISPLAY_ITEM = 'item-displayed';
export const ACTIVITY_ID_REMOVE_FROM_WISHLIST = 'item-removed-from-wishlist';

export default (activity) => new Promise((resolve) => {

    const storage = sessionStorage || storageStub;
    const STORAGE_ID_ACTIVITY_ITEMS = 'activities';

    const trackingItems = JSON.parse(storage.getItem(STORAGE_ID_ACTIVITY_ITEMS) || '[]');
    trackingItems.push({
        activityId: activity.activityId,
        userId: activity.userId,
        itemId: activity.itemId
    });
    storage.setItem(STORAGE_ID_ACTIVITY_ITEMS, JSON.stringify(trackingItems));

    resolve();

});
