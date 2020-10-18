import wishlistItemsMock from '../../__data__/wishlist-mock';

export default (currentUserId) => new Promise((resolve) => {
    resolve(wishlistItemsMock[currentUserId] || []);
});
