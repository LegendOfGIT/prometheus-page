export default (itemId) => new Promise((resolve) => {
    console.log(`added item "${itemId}" to wishlist`);

    resolve();
});
