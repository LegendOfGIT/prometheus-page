import Axios from 'axios';

export default () => new Promise((resolve) => {
    Axios.get(`http://localhost:3002/guest-user-id`)
        .then(response => {
            if(200 === response.status) {
                resolve(response.data.userId);
                return;
            }

            resolve('');
        })
        .catch(() => {
            resolve('');
        });

});
