import config from '../../config.js';

export default (navigationId, searchPattern) => (dispatch) => new Promise((resolve) => {
    const getInformationItemsRepository =
        (config.useMocks ?? true)
            ? require('../../repositories/getInformationItemsMockRepository').default
            : require('../../repositories/getInformationItemsRepository').default;

    getInformationItemsRepository(searchPattern, navigationId)
        .then((items) => {
            dispatch({ type: 'ADD_INFORMATION_ITEMS', items });
            resolve();
        })
        .catch(() => {
            resolve();
        });
});
