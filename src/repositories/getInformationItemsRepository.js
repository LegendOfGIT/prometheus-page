import Axios from "axios";
import { FIRST_LEVEL_NAVIGATION_ID } from '../constants';

export default (searchPattern, navigationId) => new Promise((resolve) => {
    navigationId = FIRST_LEVEL_NAVIGATION_ID === navigationId ? undefined : navigationId;

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