import overItemsMock from '../__data__/overview-items-mock';
import { FIRST_LEVEL_NAVIGATION_ID } from '../constants';

export default (searchPattern, navigationId) => new Promise((resolve) => {
    let { items } = overItemsMock;
    navigationId = FIRST_LEVEL_NAVIGATION_ID === navigationId ? undefined : navigationId;

    console.log(navigationId);
    items = navigationId ? items.filter((item) => (item.navigationPath || []).includes(navigationId)) : items;
    items = searchPattern ? items.filter((item) => -1 !== item.title.toLowerCase().indexOf(searchPattern.toLowerCase())) : items;

    resolve(items);
});