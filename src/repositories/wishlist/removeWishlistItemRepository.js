import Axios from 'axios';

export default (userId, itemId) => new Promise((resolve) => {
    Axios.delete('http://localhost:3002/wishlist-item', { params: { userId, itemId } })
        .then(response => {
            resolve();
        })
        .catch(() => {
            resolve();
        });

});
