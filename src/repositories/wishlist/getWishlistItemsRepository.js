import Axios from 'axios';

export default (userId) => new Promise((resolve) => {
    Axios.get(`http://localhost:3002/wishlist-items?userId=${userId}`)
        .then(response => {
            resolve(response.data);
        })
        .catch(() => {
            resolve();
        });

});
