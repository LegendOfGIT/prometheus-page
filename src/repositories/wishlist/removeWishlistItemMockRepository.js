export default (itemId) => new Promise((resolve) => {
    console.log(`removed item "${itemId}" to wishlist`);

    resolve();
});
