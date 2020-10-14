import Axios from 'axios';

export default (userId, itemId) => new Promise((resolve) => {
    console.log('hi');
    Axios.put('http://localhost:3002/wishlist-item', { userId, itemId })
        .then(response => {
            resolve();
        })
        .catch(() => {
            resolve();
        });

});
