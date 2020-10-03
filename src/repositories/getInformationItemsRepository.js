import Axios from "axios";

export default (searchPattern) => new Promise((resolve) => {
    Axios.get(`http://localhost:3002/information-items?searchPattern=${searchPattern || ''}`)
        .then(response => {
            if(200 === response.status) {
                resolve(response.data.items);
            }
        })
        .catch(() => {
            resolve([]);
        });
});