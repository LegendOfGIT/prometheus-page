import Axios from "axios";

export default (searchPattern, navigationId) => new Promise((resolve) => {
    Axios.get(`http://localhost:3002/information-items?searchPattern=${searchPattern || ''}&navigationId=${navigationId || ''}`)
        .then(response => {
            if(200 === response.status) {
                resolve(response.data.items);
            }
        })
        .catch(() => {
            resolve([]);
        });
});